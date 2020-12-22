import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShow: true,
    loginShow: true,
    userShow: false
  },
  mutations: {
    changeShow(state){
      state.loginShow = false
      state.userShow = true
    }
  },
  actions: {
  },
  modules: {
  }
})
