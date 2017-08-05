import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import * as signedInStates from '../signed-in-states.js'

export default new Vuex.Store({
  state: {
    count: 0,
    message: '',
    signedInState: signedInStates.CHECKING,
    projectData: null
  },
  mutations: {
    increment (state) {
      state.count++
    },
    signedInState (state, msg) {
      state.signedInState = msg
    },
    projectData (state, data) {
      state.projectData = data
    }
  }
})
