import Vue          from 'vue'
import Vuex         from 'vuex'
import router       from '@/router'
import errors       from '@/store/errors'
import Wallet       from 'lumi-web-core'
import * as bchaddr from 'bchaddrjs'

const toCashAddress = bchaddr.toCashAddress

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    WALLET: {},
    CORE: {},
    isSaved: false,
    loading: false
  },
  mutations: {},
  actions: {
    async createCore ({state}, obj = {}) {
      let {type, data} = obj
      
      state.loading = true
      state.WALLET = new Wallet()
      
      switch (type) {
        case 'new':
          state.CORE = await state.WALLET.createNew(data)
          break
        case 'mnemonic':
          state.CORE = await state.WALLET.createByMnemonic(data)
          break
        case 'key':
          state.CORE = await state.WALLET.createByKey(data)
          break
      }
      
      state.isSaved = true
      
      router.push({
        name: 'info'
      })
      
      state.loading = false
    },
    async getChildNodes ({state}, data) {
      const res = await state.WALLET.getChildNodes(data)
			
			res.list = res.list.map(item => {
				item.bchAddress = toCashAddress(item.btcAddress)
				
				return item
			})
			return res
    },
    async makeRawBtcTx ({state}, data) {
      state.WALLET = new Wallet()
      
      return state.WALLET.makeRawBtcTx(data)
    },
    async makeRawEthTx ({state}, data) {
      state.WALLET = new Wallet()
      
      return state.WALLET.makeRawEthTx(data)
    },
    async makeRawBchTx ({state}, data) {
      state.WALLET = new Wallet()
      
      return state.WALLET.makeRawBchTx(data)
    }
  },
  getters: {},
  modules: {
    errors
  }
})
