<template>
<div>

  <DeliveryUpperNav :title="pageTitle"></DeliveryUpperNav>

  <DeliveryUpperNavMobile></DeliveryUpperNavMobile>

  <div class="container-fluid h-100">
    <spinner v-show="loading"></spinner>

    <div class="row">
      <p class="upper-title-reports bold"></p>
    </div>

    <div class="row">
      <div class="col">
        <div class="card" >
          <div class="card-block card-title">
            <p>PEDIDOS</p>
            <div class="row" style="margin-left:0px;margin-right:0px;border-bottom:solid 1px #CCC;">
              <div class="reports-default-tables table-responsive small-content-table">
                <vue-good-table
                  :columns="ordersColumns"
                  :rows="ordersRows"
                  :paginate="false"
                  :lineNumbers="false"
                  styleClass="table table-responsive">
                  <template slot="table-row" scope="props">
                    <td>{{ props.row.orderNumber }}</td>
                    <td>{{ props.row.customer }}</td>
                    <td>{{ props.row.phoneContact }}</td>
                    <td>{{ props.row.timestamp }}</td>
                    <td>{{ props.row.status }}</td>
                    <td><a href="#" @click="openModal"><i style="float:right" class="material-icons">menu</i></a></td>
                  </template>
                </vue-good-table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <DashboardFooter></DashboardFooter>
  <OrderDetailsModal></OrderDetailsModal>

</div>
</template>

<script>

import moment from 'moment'
import DeliveryUpperNav from '@/components/common/DeliveryUpperNav'
import DeliveryUpperNavMobile from '@/components/common/DeliveryUpperNavMobile'
import DashboardFooter from '@/components/common/DashboardFooter'
import Spinner from '@/components/common/Spinner'
import OrderDetailsModal from '@/components/modals/OrderDetailsModal'

var numeral = require('numeral')

export default {
  name: 'DeliveryOrders',
  components: {
    moment,
    DeliveryUpperNav,
    DeliveryUpperNavMobile,
    DashboardFooter,
    Spinner,
    OrderDetailsModal,
    numeral
  },
  methods: {
    openModal () {
      this.$modal.show('associate-modal')
    },
    getOrders () {
      // this.loading = false

      this.branchFilter = JSON.parse(localStorage.getItem('branchFilter'))
      this.$http.get('http://altec-ws-staging-873971210.us-east-1.elb.amazonaws.com/backoffice/reports/v1/sales_products', {
        // params do endpoint
        params: {
          branch: this.branchFilter.map(function (branch) { return branch.id }).join(',')
        }
      })
      .then((response) => {
        const Rows = []
        this.ordersRows = []

        Array.prototype.forEach.call(response.body.products.data, function (row) {
          const orderRow = {
            // orderNumber:
            // customer:
            // phoneContact:
            // timestamp:
            // branchName:
            // status:
            // code: line.code.toString(),
            // item: line.description.toString(),
            // unitaryValue: 'R$ ' + utils.moneyFormat(line.unitary_value),
            // quantity: line.quantity,
            // totalPrice: 'R$ ' + utils.moneyFormat(line.total_value),
            // perCent: (line.percent / 100).toString()
          }

          Rows.push(orderRow)
        })

        this.ordersRows = Rows

        this.loading = false
      })
      .catch((response) => {
        this.loading = false
      })
    }
  },
  mounted () {
    this.getOrders()
  },
  data () {
    return {
      branchFilter: [],
      pageTitle: 'Produtos',
      loading: false,
      ordersColumns: [{
        label: 'Número do Pedido',
        field: 'orderNumber'
      }, {
        label: 'Cliente',
        field: 'customer'
      }, {
        label: 'Contato',
        field: 'phoneContact'
      }, {
        label: 'Data/horário',
        field: 'timestamp'
      }, {
        label: 'Status',
        field: 'status'
      }, {
        field: 'details'
      }],
      ordersRows: [ { orderNumber: '123456', customer: 'Fulano de Tal', phoneContact: '99999-9999', timestamp: '16/08/2017 22:00', status: 'Em produção' } ]
    }
  }
}
</script>
