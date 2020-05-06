import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/main.scss'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.hasOwnProperty('auth')) {
    if (store.state.isSaved) {
      next()
    } else {
      next({name: 'home'})
    }
  } else {
    next()
  }
})

Vue.config.errorHandler = (error, vm) => {
  vm.$store.dispatch('errors/errorHandler', error)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
