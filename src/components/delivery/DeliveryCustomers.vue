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
            <p>CLIENTES</p>
            <div class="row" style="margin-left:0px;margin-right:0px;bcustomer-bottom:solid 1px #CCC;">
              <div class="reports-default-tables table-responsive small-content-table">
                <vue-good-table
                  :columns="customersColumns"
                  :rows="customersRows"
                  :paginate="false"
                  :lineNumbers="false"
                  :defaultSortBy="{field: 'timestamp', type: 'desc'}"
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

</div>
</template>

<script>

import moment from 'moment'
import DeliveryUpperNav from '@/components/common/DeliveryUpperNav'
import DeliveryUpperNavMobile from '@/components/common/DeliveryUpperNavMobile'
import DashboardFooter from '@/components/common/DashboardFooter'
import Spinner from '@/components/common/Spinner'

const numeral = require('numeral')

export default {
  name: 'DeliveryCustomers',
  components: {
    moment,
    DeliveryUpperNav,
    DeliveryUpperNavMobile,
    DashboardFooter,
    Spinner,
    numeral
  },
  methods: {
    getcustomers () {
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
        this.customersRows = []

        Array.prototype.forEach.call(response.body.products.data, function (row) {
          const customerRow = {
            // highlight:
            // customerName:
            // customerPhoneContact:
            // customerEmailContact:
            // customerCPFDocument:
            // code: line.code.toString(),
            // item: line.description.toString(),
            // unitaryValue: 'R$ ' + utils.moneyFormat(line.unitary_value),
            // quantity: line.quantity,
            // totalPrice: 'R$ ' + utils.moneyFormat(line.total_value),
            // perCent: (line.percent / 100).toString()
          }

          Rows.push(customerRow)
        })

        this.customersRows = Rows

        this.loading = false
      })
      .catch((response) => {
        this.loading = false
      })
    }
  },
  mounted () {
    this.getcustomers()
  },
  data () {
    return {
      branchFilter: [],
      pageTitle: 'Clientes',
      loading: false,
      customersColumns: [{
        label: 'Nome do Cliente',
        field: 'customerName'
      }, {
        label: 'Contato',
        field: 'customerPhoneContact'
      }, {
        label: 'Email',
        field: 'customerEmailContact'
      }, {
        label: 'CPF',
        field: 'customerCPFDocument'
      }],
      customersRows: []
    }
  }
}
</script>
