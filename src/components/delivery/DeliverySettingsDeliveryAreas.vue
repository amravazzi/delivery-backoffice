<template>
<div>

  <DeliveryUpperNav :title="pageTitle"></DeliveryUpperNav>

  <DeliveryUpperNavMobile></DeliveryUpperNavMobile>

  <div class="container-fluid h-100">
    <spinner v-show="loading"></spinner>

    <div class="row">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Configurações</a></li>
        <li class="breadcrumb-item">Áreas de Delivery</li>
        <li class="breadcrumb-item active"><a href="#" class="btn btn-primary btn-add-new" @click="open">Adicionar Novo</a></li>
      </ol>
    </div>

    <div class="row">
      <div class="col">
        <div class="card" >
          <div class="card-block card-title">
            <p>ÁREAS DE DELIVERY</p>
            <div class="row" style="margin-left:0px;margin-right:0px;border-bottom:solid 1px #CCC;">
              <div class="reports-default-tables table-responsive small-content-table">
                <vue-good-table
                  :columns="ordersColumns"
                  :rows="ordersRows"
                  :paginate="false"
                  :lineNumbers="false"
                  :defaultSortBy="{field: 'quantity', type: 'desc'}"
                  styleClass="table table-responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <DashboardFooter></DashboardFooter>
  <DeliveryAreasModal></DeliveryAreasModal>

</div>
</template>

<script>

import moment from 'moment'
import DeliveryUpperNav from '@/components/common/DeliveryUpperNav'
import DeliveryUpperNavMobile from '@/components/common/DeliveryUpperNavMobile'
import DashboardFooter from '@/components/common/DashboardFooter'
import Spinner from '@/components/common/Spinner'
import DeliveryAreasModal from '@/components/modals/DeliveryAreasModal'

const numeral = require('numeral')

export default {
  name: 'DeliverySettingsDeliveryAreas',
  components: {
    moment,
    DeliveryUpperNav,
    DeliveryUpperNavMobile,
    DashboardFooter,
    Spinner,
    DeliveryAreasModal,
    numeral
  },
  methods: {
    open () {
      this.$modal.show('delivery-areas-modal')
    },
    getOrders () {
      // this.loading = false

      // this.branchFilter = JSON.parse(localStorage.getItem('branchFilter'))
      // this.$http.get('http://altec-ws-staging-873971210.us-east-1.elb.amazonaws.com/backoffice/reports/v1/sales_products', {
      //   // params do endpoint
      //   params: {
      //     branch: this.branchFilter.map(function (branch) { return branch.id }).join(',')
      //   }
      // })
      // .then((response) => {
      //   const Rows = []
      //   this.ordersRows = []

      //   Array.prototype.forEach.call(response.body.products.data, function (row) {
      //     const orderRow = {
      //       // orderNumber:
      //       // customer:
      //       // phoneContact:
      //       // timestamp:
      //       // branchName:
      //       // status:
      //       // code: line.code.toString(),
      //       // item: line.description.toString(),
      //       // unitaryValue: 'R$ ' + utils.moneyFormat(line.unitary_value),
      //       // quantity: line.quantity,
      //       // totalPrice: 'R$ ' + utils.moneyFormat(line.total_value),
      //       // perCent: (line.percent / 100).toString()
      //     }

      //     Rows.push(orderRow)
      //   })

      //   this.ordersRows = Rows

      //   this.loading = false
      // })
      // .catch((response) => {
      //   this.loading = false
      // })
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
        label: 'Nome da área',
        field: 'areaName'
      }, {
        label: '# de CEPs atendidos',
        field: 'status'
      }, {
        label: 'Status',
        field: 'status'
      }],
      ordersRows: []
    }
  }
}
</script>
