<template>
<div>

  <DeliveryUpperNav :title="pageTitle"></DeliveryUpperNav>

  <DeliveryUpperNavMobile></DeliveryUpperNavMobile>

  <div class="container-fluid h-100">

    <div class="row">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Configurações</a></li>
        <li class="breadcrumb-item">Informações Básicas</li>
      </ol>
    </div>

    <div class="row">
      <div class="col">

        <div class="card" >
          <div class="card-block card-title delivery-manage-card">
            <div class="row">
              <div class="col-12 col-sm-12">
                <p>Endereço do Delivery</p>
                <p>Defina o endereço físico do seu delivery.</p>
              </div>
              <div class="form-group col-sm-12">
                <label for="delivery-self-zipcode" id="delivery-self-zipcode-label" style="">CEP</label>
                <input class="form-control col-sm-6" type="text" placeholder="12345-678" id="delivery-self-zipcode">
              </div>
              <div class="form-group col-sm-12 col-md-10 col-lg-10">
                <label for="delivery-self-street" id="delivery-self-street-label" style="">Rua</label>
                <input class="form-control" type="address" placeholder="Rua da Mooca" id="delivery-self-street">
              </div>
              <div class="form-group col-sm-12 col-md-2 col-lg-2">
                <label for="delivery-self-number" id="delivery-self-number-label" style="">Número</label>
                <input class="form-control" type="number" placeholder="123" id="delivery-self-number">
              </div>
              <div class="form-group col-sm-12 col-md-4 col-lg-4">
                <label for="delivery-self-neighborhood" id="delivery-self-neighborhood-label" style="">Bairro</label>
                <input class="form-control" type="text" placeholder="Mooca" id="delivery-self-neighborhood">
              </div>
              <div class="form-group col-sm-12 col-md-4 col-lg-4">
                <label for="delivery-self-city" id="delivery-self-city-label" style="">Cidade</label>
                <input class="form-control" type="text" placeholder="São Paulo" id="delivery-self-city">
              </div>
              <div class="form-group col-sm-12 col-md-4 col-lg-4">
                <label for="delivery-self-state" id="delivery-self-state-label" style="">Estado</label>
                <input class="form-control" type="text" placeholder="SP" id="delivery-self-state">
              </div>
            </div>
          </div>
        </div>

        <div class="card" >
          <div class="card-block card-title delivery-manage-card">
            <div class="row">
              <div class="col-12 col-sm-12">
                <p>Tipo de entrega</p>
                <p>Defina quem irá realizar a entraga dos pedidos.</p>
              </div>
              <div class="form-group col-sm-12 col-md-6 col-lg-6">

                <select class="form-control" id="delivery-carrier" v-model="deliveryCarrier">
                  <option value="none" disabled>Selecione</option>
                  <option value="self">Entregadores Próprios</option>
                  <option value="loggi">Loggi</option>
                  <option value="rapiddo">Rapiddo</option>
                </select>

                <label v-if="deliveryCarrier === 'loggi' || deliveryCarrier === 'rapiddo'" for="delivery-carrier-token" style="margin-top:20px;">Informe o token de API da transportadora</label>
                <input v-if="deliveryCarrier === 'loggi' || deliveryCarrier === 'rapiddo'" id="delivery-carrier-token" class="form-control" type="text">

              </div>
            </div>
          </div>
        </div>

        <div class="card" >
          <div class="card-block card-title delivery-manage-card">
            <div class="row">
              <div class="col-12 col-sm-12">
                <p>Taxa de entrega</p>
                <p>Defina como será cobrada a taxa de entrega.</p>
              </div>
              <div class="form-group col-sm-12 col-md-6 col-lg-6">

                <select class="form-control" id="delivery-carrier" v-model="deliveryFeeType" :disabled="deliveryFeeTypeModel === 'carrier'">
                  <option value="none" disabled>Selecione</option>
                  <option value="fixed">Fixa</option>
                  <option value="dynamic">Dinâmica</option>
                  <option value="carrier" :disabled="deliveryFeeTypeModel != 'carrier'">Transportadora</option>
                </select>

                <label v-if="deliveryFeeType === 'fixed'" for="delivery-fee-value" style="margin-top:20px;">Informe o valor da taxa de entrega, em reais.</label>
                <input v-if="deliveryFeeType === 'fixed'" class="form-control" type="text" placeholder="R$ 22,00" id="delivery-fee-value">

                <label v-if="deliveryFeeType === 'dynamic'" for="delivery-fee-percent" style="margin-top:20px;">Informe o percentual da taxa dinâmica, em %.</label>
                <input v-if="deliveryFeeType === 'dynamic'" class="form-control" type="text" placeholder="15%" id="delivery-fee-percent">

              </div>
            </div>
          </div>
        </div>

        <div class="card" >
          <div class="card-block card-title delivery-manage-card">
            <div class="row">
              <div class="col-12 col-sm-12">
                <p>Outras opções</p>
                <p>Defina outras opções do seu delivery.</p>
              </div>
              <div class="form-group col-sm-12 col-md-7 col-lg-6">

                <label for="example-text-input" id="delivery-min-value">Informe o valor mínimo para delivery, em reais. Coloque zero caso não tenha valor mínimo.</label>
                <input class="form-control" type="text" placeholder="R$ 20,00" id="delivery-min-value">

                <label v-if="deliveryFeeTypeModel != 'carrier'" for="example-text-input" id="delivery-min-time" style="margin-top:20px;">Informe o tempo mínimo de espera, em minutos. Coloque zero caso não tenha tempo mínimo.</label>
                <input v-if="deliveryFeeTypeModel != 'carrier'" class="form-control" type="text" placeholder="40" id="delivery-min-time">

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
  name: 'DeliverySettingsBasics',
  components: {
    DeliveryUpperNav,
    DeliveryUpperNavMobile,
    DashboardFooter
  },
  data () {
    return {
      pageTitle: 'Your Company Delivery',
      deliveryCarrier: 'none',
      deliveryFeeType: 'none'
    }
  },
  mounted () {
  },
  computed: {
    deliveryFeeTypeModel: function () {
      if (this.deliveryCarrier === 'loggi' || this.deliveryCarrier === 'rapiddo') {
        this.deliveryFeeType = 'carrier'
      } else {
        return
      }
      console.log(this.deliveryFeeType)
      return this.deliveryFeeType
    }
  }
}
</script>
