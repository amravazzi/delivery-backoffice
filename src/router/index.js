import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: function (resolve) {
        require(['@/components/dashboard/dashboard.vue'], resolve)
      },
      beforeEnter: guardRoute
    },
    {
      path: '/login',
      name: 'Login',
      component: function (resolve) {
        require(['@/components/login/Login.vue'], resolve)
      },
      beforeEnter: guardLoginRoute
    },
    {
      path: '/store-selection',
      name: 'StoreSelection',
      component: function (resolve) {
        require(['@/components/store-selection/StoreSelection.vue'], resolve)
      },
      beforeEnter: guardRoute
    },
    {
      path: '/reports/revenue/accumulated',
      name: 'AccumulatedRevenueReport',
      component: function (resolve) {
        require(['@/components/reports/AccumulatedRevenueReport.vue'], resolve)
      },
      beforeEnter: guardRoute
    },
    {
      path: '/reports/revenue/calendar',
      name: 'CalendarRevenueReport',
      component: function (resolve) {
        require(['@/components/reports/CalendarRevenueReport.vue'], resolve)
      },
      beforeEnter: guardRoute
    },
    {
      path: '/reports/revenue/hour',
      name: 'HourRevenueReport',
      component: function (resolve) {
        require(['@/components/reports/HourRevenueReport.vue'], resolve)
      },
      beforeEnter: guardRoute
    },
    {
      path: '/reports/revenue/receipt-type',
      name: 'ReceiptTypeRevenueReport',
      component: function (resolve) {
        require(['@/components/reports/ReceiptTypeRevenueReport.vue'], resolve)
      },
      beforeEnter: guardRoute
    },
    {
      path: '/reports/revenue/cashier-closing',
      name: 'CashierClosingRevenueReport',
      component: function (resolve) {
        require(['@/components/reports/CashierClosingRevenueReport.vue'], resolve)
      },
      beforeEnter: guardRoute
    },
    {
      path: '/reports/selling/products',
      name: 'ProductsSellingReport',
      component: function (resolve) {
        require(['@/components/reports/ProductsSellingReport.vue'], resolve)
      },
      beforeEnter: guardRoute
    },
    {
      path: '/reports/selling/groups',
      name: 'GroupsSellingReport',
      component: function (resolve) {
        require(['@/components/reports/GroupsSellingReport.vue'], resolve)
      },
      beforeEnter: guardRoute
    },
    {
      path: '/reports/selling/ppp/products',
      name: 'ProductsSellingPurchasingPowerParityReport',
      component: function (resolve) {
        require(['@/components/reports/ProductsSellingPurchasingPowerParityReport.vue'], resolve)
      },
      beforeEnter: guardRoute
    },
    {
      path: '/reports/selling/ppp/groups',
      name: 'GroupsSellingPurchasingPowerParityReport',
      component: function (resolve) {
        require(['@/components/reports/GroupsSellingPurchasingPowerParityReport.vue'], resolve)
      },
      beforeEnter: guardRoute
    },
    {
      path: '/reports/audit/exclusions',
      name: 'CancellationsAuditReport',
      component: function (resolve) {
        require(['@/components/reports/CancellationsAuditReport.vue'], resolve)
      },
      beforeEnter: guardRoute
    },
    {
      path: '/reports/audit/transferences',
      name: 'TransferencesAuditReport',
      component: function (resolve) {
        require(['@/components/reports/TransferencesAuditReport.vue'], resolve)
      },
      beforeEnter: guardRoute
    },
    {
      path: '/reports/audit/discounts',
      name: 'DiscountsAuditReport',
      component: function (resolve) {
        require(['@/components/reports/DiscountsAuditReport.vue'], resolve)
      },
      beforeEnter: guardRoute
    },
    {
      path: '/reports/audit/gratuity',
      name: 'GratuityAuditReport',
      component: function (resolve) {
        require(['@/components/reports/GratuityAuditReport.vue'], resolve)
      },
      beforeEnter: guardRoute
    },
    {
      path: '/reports/audit/delivery-time',
      name: 'DeliveryTimeAuditReport',
      component: function (resolve) {
        require(['@/components/reports/DeliveryTimeAuditReport.vue'], resolve)
      },
      beforeEnter: guardRoute
    },

    // Delivery Routes
    {
      path: '/delivery/dashboard',
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

