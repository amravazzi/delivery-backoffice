import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    // Delivery Routes
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: function (resolve) {
    //     require(['@/components/login/Login.vue'], resolve)
    //   },
    //   beforeEnter: guardLoginRoute
    // },
    {
      path: '/',
      name: 'DeliveryDashboard',
      component: function (resolve) {
        require(['@/components/delivery/DeliveryDashboard.vue'], resolve)
      },
      beforeEnter: guardRoute
    },
    {
      path: '/delivery/orders',
      name: 'DeliveryOrders',
      component: function (resolve) {
        require(['@/components/delivery/DeliveryOrders.vue'], resolve)
      },
      beforeEnter: guardRoute
    },
    {
      path: '/delivery/products',
      name: 'DeliveryProducts',
      component: function (resolve) {
        require(['@/components/delivery/DeliveryProducts.vue'], resolve)
      },
      beforeEnter: guardRoute
    },
    {
      path: '/delivery/customers',
      name: 'DeliveryCustomers',
      component: function (resolve) {
        require(['@/components/delivery/DeliveryCustomers.vue'], resolve)
      },
      beforeEnter: guardRoute
    },
    {
      path: '/delivery/settings',
      name: 'DeliverySettingsIndex',
      component: function (resolve) {
        require(['@/components/delivery/DeliverySettingsIndex.vue'], resolve)
      },
      beforeEnter: guardRoute
    },
    {
      path: '/delivery/settings/layout',
      name: 'DeliverySettingsLayout',
      component: function (resolve) {
        require(['@/components/delivery/DeliverySettingsLayout.vue'], resolve)
      },
      beforeEnter: guardRoute
    },
    {
      path: '/delivery/settings/basics',
      name: 'DeliverySettingsBasics',
      component: function (resolve) {
        require(['@/components/delivery/DeliverySettingsBasics.vue'], resolve)
      },
      beforeEnter: guardRoute
    },
    {
      path: '/delivery/settings/associates',
      name: 'DeliverySettingsAssociates',
      component: function (resolve) {
        require(['@/components/delivery/DeliverySettingsAssociates.vue'], resolve)
      },
      beforeEnter: guardRoute
    },
    {
      path: '/delivery/settings/menu',
      name: 'DeliverySettingsMenu',
      component: function (resolve) {
        require(['@/components/delivery/DeliverySettingsMenu.vue'], resolve)
      },
      beforeEnter: guardRoute
    },
    {
      path: '/delivery/settings/delivery-areas',
      name: 'DeliverySettingsDeliveryAreas',
      component: function (resolve) {
        require(['@/components/delivery/DeliverySettingsDeliveryAreas.vue'], resolve)
      },
      beforeEnter: guardRoute
    },
    {
      path: '/delivery/settings/payments',
      name: 'DeliverySettingsPayments',
      component: function (resolve) {
        require(['@/components/delivery/DeliverySettingsPayments.vue'], resolve)
      },
      beforeEnter: guardRoute
    },
    {
      path: '/delivery/settings/timetable',
      name: 'DeliverySettingsTimetable',
      component: function (resolve) {
        require(['@/components/delivery/DeliverySettingsTimetable.vue'], resolve)
      },
      beforeEnter: guardRoute
    },

    // 404
    {
      path: '*',
      name: 'notFound',
      component: function (resolve) {
        require(['@/components/notFound/notFound.vue'], resolve)
      }
    }
  ]
})

function guardRoute (to, from, next) {
  const auth = router.app.$options.store.state.auth

  if (!auth.isLoggedIn) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

function guardLoginRoute (to, from, next) {
  const auth = router.app.$options.store.state.auth

  if (auth.isLoggedIn) {
    next({
      path: '/'
    })
  } else {
    next()
  }
}

export default router

