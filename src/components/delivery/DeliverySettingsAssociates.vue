<template>
<div>

  <DeliveryUpperNav :title="pageTitle"></DeliveryUpperNav>

  <DeliveryUpperNavMobile></DeliveryUpperNavMobile>

  <div class="container-fluid h-100">

    <div class="row">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Configurações</a></li>
        <li class="breadcrumb-item">Colaboradores</li>
        <li class="breadcrumb-item active"><a href="#" class="btn btn-primary btn-add-new" @click="open">Adicionar Novo</a></li>
      </ol>
    </div>

    <div class="row">
      <div class="col">
        <div class="card" >
          <div class="card-block card-title">
            <p>COLABORADORES</p>
            <div class="row" style="margin-left:0px;margin-right:0px;bcustomer-bottom:solid 1px #CCC;">
              <div class="reports-default-tables table-responsive small-content-table">
                <vue-good-table
                  :columns="associatesColumns"
                  :rows="associatesRows"
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
  <DeliveryAssociateModal></DeliveryAssociateModal>

</div>
</template>

<script>

import DeliveryUpperNav from '@/components/common/DeliveryUpperNav'
import DeliveryUpperNavMobile from '@/components/common/DeliveryUpperNavMobile'
import DashboardFooter from '@/components/common/DashboardFooter'
import DeliveryAssociateModal from '@/components/modals/DeliveryAssociateModal'

export default {
  name: 'DeliverySettingsAssociates',
  components: {
    DeliveryUpperNav,
    DeliveryUpperNavMobile,
    DashboardFooter,
    DeliveryAssociateModal
  },
  data () {
    return {
      pageTitle: 'Your Company Delivery',
      branchFilter: [],
      pageTitle: 'Clientes',
      loading: false,
      associatesColumns: [{
        label: 'Nome do Colaborador',
        field: 'associateName'
      }, {
        label: 'Email',
        field: 'associatePhoneContact'
      }, {
        label: 'Perfil',
        field: 'associateEmailContact'
      }],
      associatesRows: []
    }
  },
  methods: {
    open () {
      this.$modal.show('associate-modal')
    },
    getAssociate () {
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
      //   this.customersRows = []

      //   Array.prototype.forEach.call(response.body.products.data, function (row) {
      //     const associateRow = {
      //       // highlight:
      //       // customerName:
      //       // customerPhoneContact:
      //       // customerEmailContact:
      //       // customerCPFDocument:
      //       // code: line.code.toString(),
      //       // item: line.description.toString(),
      //       // unitaryValue: 'R$ ' + utils.moneyFormat(line.unitary_value),
      //       // quantity: line.quantity,
      //       // totalPrice: 'R$ ' + utils.moneyFormat(line.total_value),
      //       // perCent: (line.percent / 100).toString()
      //     }

      //     Rows.push(associateow)
      //   })

      //   this.associatesRows = Rows

      //   this.loading = false
      // })
      // .catch((response) => {
      //   this.loading = false
      // })
    }
  },
  mounted () {
  }
}
</script>
