<template>
<div>

  <DeliveryUpperNav :title="pageTitle"></DeliveryUpperNav>

  <DeliveryUpperNavMobile></DeliveryUpperNavMobile>

  <div class="container-fluid h-100">
    <!-- <spinner v-show="loading"></spinner> -->
    <div class="row">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Configurações</a></li>
        <li class="breadcrumb-item">Menu</li>
      </ol>
    </div>

    <div class="row">
      <div class="col">
        <div class="card" >
          <div class="card-block card-title">
            <p>Ordem dos itens do cardápio</p>
            <div class="row">

              <div class="col-sm-12">

                <vuedraggable class="list-group" element="ul" v-model="list" :options="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                  <transition-group type="transition" :name="'flip-list'">
                    <li class="list-group-item justify-content-between" v-for="element in list" :key="element.order" style="cursor:move">

                      <span class="col-2 col-sm-1 align-bottom"><i style="cursor:move" class="material-icons float-left">drag_handle</i></span>
                      <span class="col-10 col-sm-11">{{element.name}}</span>

                    </li>
                  </transition-group>
                </vuedraggable>

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

import vuedraggable from 'vuedraggable'
import DeliveryUpperNav from '@/components/common/DeliveryUpperNav'
import DeliveryUpperNavMobile from '@/components/common/DeliveryUpperNavMobile'
import DashboardFooter from '@/components/common/DashboardFooter'
import Spinner from '@/components/common/Spinner'

export default {
  name: 'DeliverySettingsMenu',
  components: {
    DeliveryUpperNav,
    DeliveryUpperNavMobile,
    DashboardFooter,
    Spinner,
    vuedraggable,
  },
  data () {
    return {
      list: [{
        name: 'Grupo 1',
        order: 1,
        fixed: false
      }, {
        name: 'Grupo 2',
        order: 2,
        fixed: false
      }, {
        name: 'Grupo 3',
        order: 3,
        fixed: false
      }, {
        name: 'Grupo 4',
        order: 4,
        fixed: false
      }, {
        name: 'Grupo 5',
        order: 5,
        fixed: false
      }, {
        name: 'Grupo 6',
        order: 6,
        fixed: false
      }],
      branchFilter: [],
      pageTitle: 'Produtos',
      loading: false,
      editable:true,
      isDragging: false,
      delayedDragging:false,
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
  },
  methods: {
    orderList () {
      this.list = this.list.sort((one,two) =>{return one.order-two.order; })
    },
    onMove ({relatedContext, draggedContext}) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
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
    // this.getOrders()
  },
  computed: {
    dragOptions () {
      return  {
        animation: 0,
        group: 'description',
        disabled: !this.editable,
        ghostClass: 'ghost'
      };
    },
    listString(){
      return JSON.stringify(this.list, null, 2);
    },
    list2String(){
      return JSON.stringify(this.list2, null, 2);
    }
  },
  watch: {
    isDragging (newValue) {
      if (newValue){
        this.delayedDragging= true
        return
      }
      this.$nextTick( () =>{
           this.delayedDragging =false
      })
    }
  }
}
</script>
