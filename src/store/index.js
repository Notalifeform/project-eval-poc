import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    message: ''
  },
  mutations: {
    increment (state) {
      state.count++
    },
    status (state, msg) {
      state.message = msg
    }
  }
})
