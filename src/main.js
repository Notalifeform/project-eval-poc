// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import checkgapi from './gapi.js'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log(`${to.path}`)
  // check if the path user is going to is our param path
  // if (to.path === '/about') {
  //   bla.handleClientLoad()
  //   // check if the user item is already set
  //   if (localStorage.getItem('user') === null) {
  //     // prompt for username
  //     var user = prompt('please enter your username')
  //     // prompt for password
  //     var pass = prompt('please enter your password')
  //     // check if th username and password given equals our preset details
  //     if (user === 'username' && pass === 'password') {
  //       // set the user item
  //       localStorage.setItem('user', user)
  //       // move to the route
  //       next()
  //     } else {
  //       // alert the username and pass is wrong
  //       alert('Wrong username and password, you do not have permission to access that route')
  //       // return, do not move to the route
  //       return
  //     }
  //   }
  // }
  next()
})

/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
var mainapp = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  mounted: function onmount () {
    store.commit('status', 'checking login..')
    console.log('checking login...')
    checkgapi(this)
  }
})
