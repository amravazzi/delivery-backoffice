<template>
<div>

  <DeliveryUpperNav :title="pageTitle"></DeliveryUpperNav>

  <DeliveryUpperNavMobile></DeliveryUpperNavMobile>

  <div class="container-fluid h-100">
    <spinner v-show="loading"></spinner>

    <div class="row">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Configurações</a></li>
        <li class="breadcrumb-item">Dias e horários de funcionamento</li>
        <li class="breadcrumb-item"><a href="#" class="btn btn-primary btn-add-new" @click="openAddShiftModal">Adicionar turno</a><a href="#" style="margin-left:10px;" class="btn btn-primary btn-add-new" @click="openAddHolidayModal">Adicionar turno diferenciado</a></li>
      </ol>
    </div>

    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col-sm-12">
            <div class="card">

              <div class="card-block card-title delivery-manage-card">
                <p>Segundas-feiras</p>
                <p>Horários de funcionamento das segundas-feiras</p>
                <p></p>
              </div>
            </div>

            <div class="card">
              <div class="card-block card-title delivery-manage-card">
                <p>Terças-feiras</p>
                <p>Horários de funcionamento das terças-feiras</p>
                <p></p>
              </div>
            </div>

            <div class="card">
              <div class="card-block card-title delivery-manage-card">
                <p>Quartas-feiras</p>
                <p>Horários de funcionamento das quartas-feiras</p>
                <p></p>
              </div>
            </div>

            <div class="card">
              <div class="card-block card-title delivery-manage-card">
                <p>Quintas-feiras</p>
                <p>Horários de funcionamento das quintas-feiras</p>
                <p></p>
              </div>
            </div>

            <div class="card">
              <div class="card-block card-title delivery-manage-card">
                <p>Sextas-feiras</p>
                <p>Horários de funcionamento das sextas-feiras</p>
                <p></p>
              </div>
            </div>

            <div class="card">
              <div class="card-block card-title delivery-manage-card">
                <p>Sábados</p>
                <p>Horários de funcionamento das sábados</p>
                <p></p>
              </div>
            </div>

            <div class="card">
              <div class="card-block card-title delivery-manage-card">
                <p>Domingos</p>
                <p>Horários de funcionamento das domingos</p>
                <p></p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>

  <DashboardFooter></DashboardFooter>
  <DeliveryShiftModal></DeliveryShiftModal>
  <DeliveryHolidayModal></DeliveryHolidayModal>

</div>
</template>

<script>

import moment from 'moment'
import DeliveryUpperNav from '@/components/common/DeliveryUpperNav'
import DeliveryUpperNavMobile from '@/components/common/DeliveryUpperNavMobile'
import DashboardFooter from '@/components/common/DashboardFooter'
import Spinner from '@/components/common/Spinner'
import DeliveryShiftModal from '@/components/modals/DeliveryShiftModal'
import DeliveryHolidayModal from '@/components/modals/DeliveryHolidayModal'

var numeral = require('numeral')

export default {
  name: 'DeliveryOrders',
  components: {
    moment,
    DeliveryUpperNav,
    DeliveryUpperNavMobile,
    DashboardFooter,
    Spinner,
    DeliveryShiftModal,
    DeliveryHolidayModal,
    numeral
  },
  methods: {
    openAddShiftModal () {
      this.$modal.show('add-shift-modal')
    },
    openAddHolidayModal () {
      this.$modal.show('add-holiday-modal')
    },
    // getOrders () {
    //   // this.loading = false

    //   this.branchFilter = JSON.parse(localStorage.getItem('branchFilter'))
    //   this.$http.get('http://altec-ws-staging-873971210.us-east-1.elb.amazonaws.com/backoffice/reports/v1/sales_products', {
    //     // params do endpoint
    //     params: {
    //       branch: this.branchFilter.map(function (branch) { return branch.id }).join(',')
    //     }
    //   })
    //   .then((response) => {
    //     const Rows = []
    //     this.ordersRows = []

    //     Array.prototype.forEach.call(response.body.products.data, function (row) {
    //       const orderRow = {
    //         // orderNumber:
    //         // customer:
    //         // phoneContact:
    //         // timestamp:
    //         // branchName:
    //         // status:
    //         // code: line.code.toString(),
    //         // item: line.description.toString(),
    //         // unitaryValue: 'R$ ' + utils.moneyFormat(line.unitary_value),
    //         // quantity: line.quantity,
    //         // totalPrice: 'R$ ' + utils.moneyFormat(line.total_value),
    //         // perCent: (line.percent / 100).toString()
    //       }

    //       Rows.push(orderRow)
    //     })

    //     this.ordersRows = Rows

    //     this.loading = false
    //   })
    //   .catch((response) => {
    //     this.loading = false
    //   })
    // }
  },
  mounted () {
    // this.getOrders()
  },
  data () {
    return {
      branchFilter: [],
      pageTitle: 'Your Company Delivery',
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
        label: 'Unidade',
        field: 'branchName'
      }, {
        label: 'Status',
        field: 'status'
      }],
      ordersRows: []
    }
  }
}
</script>
