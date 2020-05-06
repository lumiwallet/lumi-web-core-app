const namespaced = true

const state = () => {
  return {
    error: null
  }
}

const mutations = {
  SET_ERROR (state, error) {
    state.error = error
  },
  DEL_ERROR (state) {
    state.error = null
  }
}

const actions = {
  errorHandler ({commit, rootState}, error) {
    let msg = error.message || error
    commit('SET_ERROR', msg)
    rootState.loading = false
    console.error(msg)
  }
}

export default {
  namespaced,
  state,
  actions,
  mutations
}
