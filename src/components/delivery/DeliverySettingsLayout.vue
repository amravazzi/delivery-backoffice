<template>
<div>

  <DeliveryUpperNav :title="pageTitle"></DeliveryUpperNav>

  <DeliveryUpperNavMobile></DeliveryUpperNavMobile>

  <div class="container-fluid h-100">

    <div class="row">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Configurações</a></li>
        <li class="breadcrumb-item">Layout</li>
      </ol>
    </div>

    <div class="row">
      <div class="col">

        <div class="card" >
          <div class="card-block card-title delivery-manage-card">
            <div class="row">
              <div class="col-12 col-sm-12 col-md-8">
                <p>Logotipo</p>
                <p>Defina a imagem do logo do seu estabelecimento.</p>
                <a href="#" class="btn btn-primary btn-manage">Definir Logo</a>
              </div>
              <div class="col-12 col-sm-12 col-md-4">
                <img src="http://via.placeholder.com/290x193" class="rounded float-right delivery-logo-image-thumb" alt="">
              </div>
            </div>
          </div>
        </div>

        <div class="card" >
          <div class="card-block card-title delivery-manage-card">
            <div class="row">
              <div class="col-12 col-sm-12 col-md-8">
                <p>Imagem de plano de fundo</p>
                <p>Defina a imagem principal que será utilizada como plano de fundo de seu estabelecimento.</p>
                <a href="#" class="btn btn-primary btn-manage" style="bottom:0;">Definir plano de fundo</a>
              </div>
              <div class="col-12 col-sm-12 col-md-4">
                <img src="http://via.placeholder.com/290x193" class="rounded float-right delivery-background-image-thumb" alt="">
              </div>
            </div>
          </div>
        </div>

        <div class="card" >
          <div class="card-block card-title delivery-manage-card">

            <div class="row">
              <div class="col-12">
                <p>Cores Principais</p>
                <p>Defina a cor principal do delivery, esta cor será utilizada e menus, botões, ícones e demais áreas.</p>
                <!-- <a href="#" class="btn btn-primary btn-manage">Gerenciar</a> -->
              </div>
            </div>
            <div class="row">
              <div class="col-12 delivery-layout-color-scheme">
                <input type="radio" name="colors" value="cor1" style="background-color:#000">
                <input type="radio" name="colors" value="cor2" style="background-color:#000">
                <input type="radio" name="colors" value="cor3" style="background-color:#000" checked>
                <input type="radio" name="colors" value="cor4" style="background-color:#000">
                <input type="radio" name="colors" value="cor5" style="background-color:#000">
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

import DeliveryUpperNav from '@/components/common/DeliveryUpperNav'
import DeliveryUpperNavMobile from '@/components/common/DeliveryUpperNavMobile'
import DashboardFooter from '@/components/common/DashboardFooter'

export default {
  name: 'DeliverySettingsLayout',
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
