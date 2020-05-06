import Vue    from 'vue'
import Vuex   from 'vuex'
import router from '@/router'
import errors from '@/store/errors'
import Wallet from 'lumi-web-core'

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
			return await state.WALLET.getChildNodes(data)
		},
		async makeRawBtcTx ({state}, data) {
			state.WALLET = new Wallet()
			
			return state.WALLET.makeRawBtcTx(data)
		},
		async makeRawEthTx ({state}, data) {
			state.WALLET = new Wallet()
			
			return state.WALLET.makeRawEthTx(data)
		}
	},
	getters: {},
	modules: {
		errors
	}
})
