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
            <p>PRODUTOS</p>
            <div class="row" style="margin-left:0px;margin-right:0px;bproduct-bottom:solid 1px #CCC;">
              <div class="reports-default-tables table-responsive small-content-table">
                <vue-good-table
                  :columns="productsColumns"
                  :rows="productsRows"
                  :paginate="false"
                  styleClass="table table-responsive">
                  <template slot="table-row" scope="props">
                    <!-- TODO: fazer :id binding funcinar pra poder fazer upload da imagem... -->
                    <td><img src="http://fakeimg.pl/50x50/" @click="test1"><input type="file" style="display:none" /></td>
                    <td><label class="switch"><input type="checkbox" v-model="highlightIt" style="display:none;"><span class="slider round"></span></label></td>
                    <td>{{ props.row.productName }}</td>
                    <td>{{ props.row.productCode }}</td>
                    <td>{{ props.row.productGroup }}</td>
                    <td>{{ props.row.salePrice }}</td>
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
  name: 'DeliveryProducts',
  components: {
    moment,
    DeliveryUpperNav,
    DeliveryUpperNavMobile,
    DashboardFooter,
    Spinner,
    numeral
  },
  methods: {
    test1 () {
      console.log(1)
    }
    // getproducts () {
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
    //     this.productsRows = []

    //     Array.prototype.forEach.call(response.body.products.data, function (row) {
    //       const productRow = {
    //         // highlight:
    //         // productName:
    //         // productCode:
    //         // productGroup:
    //         // salePrice:
    //         // status:
    //         // code: line.code.toString(),
    //         // item: line.description.toString(),
    //         // unitaryValue: 'R$ ' + utils.moneyFormat(line.unitary_value),
    //         // quantity: line.quantity,
    //         // totalPrice: 'R$ ' + utils.moneyFormat(line.total_value),
    //         // perCent: (line.percent / 100).toString()
    //       }

    //       Rows.push(productRow)
    //     })

    //     this.productsRows = Rows

    //     this.loading = false
    //   })
    //   .catch((response) => {
    //     this.loading = false
    //   })
    // }
  },
  mounted () {
  },
  data () {
    return {
      branchFilter: [],
      pageTitle: 'Produtos',
      loading: false,
      highlightIt: [],
      productsColumns: [{
        label: 'Imagem',
        field: 'imageLink'
      },{
        label: 'Destacar',
        field: 'highlight',
        html: true
      }, {
        label: 'Nome do Produto',
        field: 'productName'
      }, {
        label: 'Código',
        field: 'productCode'
      }, {
        label: 'Categoria',
        field: 'productGroup'
      }, {
        label: 'Preço de Venda',
        field: 'salePrice'
      }],
      productsRows: [
        { imageLink: 'http://fakeimg.pl/50x50/', highlight: this.highlightIt, productName: 'Produto 1', productCode: '123456', productGroup: 'Grupo 1', salePrice: 'R$ 22,00' }
      ]
    }
  }
}
</script>
