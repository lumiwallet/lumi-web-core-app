import Vue    from 'vue'
import Router from 'vue-router'

import Home   from '@/components/pages/home'
import Create from '@/components/pages/create'
import Import from '@/components/pages/import'
import About  from '@/components/pages/about'
import Info   from '@/components/pages/info'
import txBTC  from '@/components/pages/tx-btc'
import txETH  from '@/components/pages/tx-eth'
import txBCH  from '@/components/pages/tx-bch'
import txDOGE from '@/components/pages/tx-doge'
import txLTC  from '@/components/pages/tx-ltc'
import txBNB  from '@/components/pages/tx-bnb'
import txBTCV from '@/components/pages/tx-btcv'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    {
      path: '/import',
      name: 'import',
      component: Import
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/info',
      name: 'info',
      component: Info,
      meta: {
        auth: true
      }
    },
    {
      path: '/tx-btc',
      name: 'tx-btc',
      component: txBTC
    },
    {
      path: '/tx-eth',
      name: 'tx-eth',
      component: txETH
    },
    {
      path: '/tx-bch',
      name: 'tx-bch',
      component: txBCH
    },
    {
      path: '/tx-doge',
      name: 'tx-doge',
      component: txDOGE
    },
    {
      path: '/tx-btcv',
      name: 'tx-btcv',
      component: txBTCV
    },
    {
      path: '/tx-ltc',
      name: 'tx-ltc',
      component: txLTC
    },
    {
      path: '/tx-bnb',
      name: 'tx-bnb',
      component: txBNB
    }
  ]
})
