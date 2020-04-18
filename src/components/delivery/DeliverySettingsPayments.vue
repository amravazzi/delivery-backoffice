<template>
<div>

  <DeliveryUpperNav :title="pageTitle"></DeliveryUpperNav>

  <DeliveryUpperNavMobile></DeliveryUpperNavMobile>

  <div class="container-fluid h-100">
    <spinner v-show="loading"></spinner>

    <div class="row">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Configurações</a></li>
        <li class="breadcrumb-item">Opções de Pagamento</li>
      </ol>
    </div>

    <div class="row">
      <div class="col">
        <div class="card" >
          <div class="card-block card-title">
            <p>OPÇÕES DE PAGAMENTO</p>

            <div class="form-group">
              <label class="switch">
                <span>Pagamento online via Paggi</span>
                <input type="checkbox" v-model="paggiPayment">
                <span class="slider round"></span>
              </label>
            </div>

            <div v-if="paggiPayment === true" class="form-group col-sm-6">
              <label for="delivery-paggi-token" style="">Informe o token de API da Paggi</label>
              <input id="delivery-paggi-token" class="form-control" type="text">
            </div>

            <div class="form-group">
              <label class="switch">
                <span>Pagamento via máquina de cartão</span>
                <input type="checkbox" v-model="pinpadPayment">
                <span class="slider round"></span>
              </label>
            </div>

              <div v-if="pinpadPayment === true" class="col-sm-6">
                <div class="row" style="margin-bottom:20px;">

                  <div class="form-group col-12 col-sm-12">
                    <label class="switch">
                      <span>Bandeira 1</span>
                      <input type="checkbox" v-model="cardOperator1">
                      <span class="slider round"></span>
                    </label>
                  </div>

                  <div class="form-group col-12 col-sm-12">
                    <label class="switch">
                      <span>Bandeira 2</span>
                      <input type="checkbox" v-model="cardOperator2">
                      <span class="slider round"></span>
                    </label>
                  </div>

                </div>
              </div>

            <div class="form-group">
              <label class="switch">
                <span>Vale Refeição ou Vale Alimentação</span>
                <input type="checkbox" v-model="vavrPayment">
                <span class="slider round"></span>
              </label>
            </div>

              <div v-if="vavrPayment === true" class="col-sm-6">
                <div class="row" style="margin-bottom:20px;">

                  <div class="form-group col-12 col-sm-12">
                    <label class="switch">
                      <span>Bandeira VR 1</span>
                      <input type="checkbox" v-model="vavrCardOperator1">
                      <span class="slider round"></span>
                    </label>
                  </div>

                  <div class="form-group col-12 col-sm-12">
                    <label class="switch">
                      <span>Bandeira VR 2</span>
                      <input type="checkbox" v-model="vavrCardOperator2">
                      <span class="slider round"></span>
                    </label>
                  </div>

                </div>
              </div>

            <div class="form-group">
              <label class="switch">
                <span>Dinheiro</span>
                <input type="checkbox" v-model="cashPayment">
                <span class="slider round"></span>
              </label>
            </div>

            <div class="form-group ">
              <label class="switch">
                <span>Cheque</span>
                <input type="checkbox" v-model="checkPayment">
                <span class="slider round"></span>
              </label>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

  <DashboardFooter></DashboardFooter>

</div>
</template>

<script>

import moment from 'moment'
import DeliveryUpperNav from '@/components/common/DeliveryUpperNav'
import DeliveryUpperNavMobile from '@/components/common/DeliveryUpperNavMobile'
import DashboardFooter from '@/components/common/DashboardFooter'
import Spinner from '@/components/common/Spinner'

var numeral = require('numeral')

export default {
  name: 'DeliverySettingsPayments',
  components: {
    moment,
    DeliveryUpperNav,
    DeliveryUpperNavMobile,
    DashboardFooter,
    Spinner,
    numeral
  },
   data () {
    return {
      pageTitle: 'Your Company Delivery',
      loading: false,
      paggiPayment: '',
      pinpadPayment: '',
      cardOperator1: '',
      cardOperator2: '',
      vavrPayment: '',
      vavrCardOperator1: '',
      vavrCardOperator2: '',
      cashPayment: '',
      checkPayment: '',
    }
  },
  methods: {
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
    },
    // TODO: if the parent checkbox is disabled, disable the children checkboxes
    disableChildren (useParent, useModel) {

    }
  },
  mounted () {
    this.getOrders()
  },
  computed: {

  }
}
</script>
