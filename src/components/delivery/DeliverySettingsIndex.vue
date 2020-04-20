<template>
<div>

  <DeliveryUpperNav :title="pageTitle"></DeliveryUpperNav>

  <DeliveryUpperNavMobile></DeliveryUpperNavMobile>

  <div class="container-fluid h-100">

    <div class="row">
      <p class="upper-title-reports bold"></p>
    </div>

    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-block card-title delivery-manage-card">
                <p>Informações Básicas</p>
                <p>Gerencie as informações básicas do seu Delivery.</p>
                <a href="/settings/basics" class="btn btn-primary btn-manage">Gerenciar</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-block card-title delivery-manage-card">
                <p>Layout</p>
                <p>Gerencie a estrutura do seu site de Delivery.</p>
                <a href="/settings/layout" class="btn btn-primary btn-manage">Gerenciar</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card" >
              <div class="card-block card-title delivery-manage-card">
                <p>Opções de Pagamento</p>
                <p>Gerencie as formas de pagamento do seu Delivery.</p>
                <a href="/settings/payments" class="btn btn-primary btn-manage">Gerenciar</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card" >
              <div class="card-block card-title delivery-manage-card">
                <p>Endereço e Área de Entrega</p>
                <p>Gerencie o endereço físico do seu Delivery e a área de entrega.</p>
                <a href="/settings/delivery-areas" class="btn btn-primary btn-manage">Gerenciar</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card" >
              <div class="card-block card-title delivery-manage-card">
                <p>Datas e Horários de Funcionamento</p>
                <p>Gerencie os dias e horários que seu delivery funcionará.</p>
                <a href="/settings/timetable" class="btn btn-primary btn-manage">Gerenciar</a>
              </div>
            </div>
          </div>
         <!--  <div class="col-sm-6">
            <div class="card" >
              <div class="card-block card-title delivery-manage-card">
                <p>Cardápio</p>
                <p>Gerencie a ordem dos itens de seu cardápio.</p>
                <a href="/settings/menu" class="btn btn-primary btn-manage">Gerenciar</a>
              </div>
            </div>
          </div> -->
          <!-- Unavailable -->
          <!-- <div class="col-sm-6">
          <div class="card" >
            <div class="card-block card-title delivery-manage-card">
              <p>Colaboradores</p>
              <p>Gerencie o cadastro dos seus funcionários autorizados a acessar seu sistema.</p>
              <a href="/settings/associates" class="btn btn-primary btn-manage">Gerenciar</a>
            </div>
          </div>
        </div> -->
      </div>
    </div>
    </div>
  </div>

  <DashboardFooter></DashboardFooter>

</div>
</template>

<script>

import DeliveryUpperNav from '@/components/common/DeliveryUpperNav'
import DeliveryUpperNavMobile from '@/components/common/DeliveryUpperNavMobile'
import DashboardFooter from '@/components/common/DashboardFooter'

export default {
  name: 'DeliverySettingsIndex',
  components: {
    DeliveryUpperNav,
    DeliveryUpperNavMobile,
    DashboardFooter
  },
  methods: {
  },
  mounted () {
  },
  data () {
    return {
      pageTitle: 'Your Company Delivery'
    }
  }
}
</script>
