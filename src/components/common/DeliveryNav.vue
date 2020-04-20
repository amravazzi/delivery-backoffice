<template>
<div>
  <ul class="nav row" id="deliveryNavMenu">
    <li class="nav-item col-12 col-md-auto">
      <a class="nav-link" v-bind:class="{ 'active' : $route.path == '/' }" href="/">
        <i class="material-icons align-middle">dashboard</i>
        <span class="align-middle">Dashboard</span>
      </a>
    </li>
    <li class="nav-item col-12 col-md-auto">
      <a class="nav-link" v-bind:class="{ 'active' : $route.path == '/orders' }" href="/orders">
        <i class="material-icons align-middle">shopping_cart</i>
        <span class="align-middle">Pedidos</span>
      </a>
    </li>
    <li class="nav-item col-12 col-md-auto">
      <a class="nav-link" v-bind:class="{ 'active' : $route.path == '/products' }" href="/products">
        <i class="material-icons align-middle">local_offer</i>
        <span class="align-middle">Produtos</span>
      </a>
    </li>
    <li class="nav-item col-12 col-md-auto">
      <a class="nav-link" v-bind:class="{ 'active' : $route.path == '/customers' }" href="/customers">
        <i class="material-icons align-middle">people</i>
        <span class="align-middle">Clientes</span>
      </a>
    </li>
    <li class="nav-item col-12 col-md-auto">
      <a class="nav-link" v-bind:class="{ 'active' : $route.path == '/settings' }" href="/settings">
        <i class="material-icons align-middle">settings</i>
        <span class="align-middle">Configurações</span>
      </a>
    </li>
  </ul>
</div>
</template>

<script>

export default {
  name: 'DeliveryNav',
  components: {
  },
  data () {
    return {
    }
  },
  mounted () {
    document.title = 'Your Company'
  }
}
</script>
