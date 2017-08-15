<template>
  <div class="login">
    <div class="loginlabel">Login status:</div>
    <div class="loginstatus" v-if="showSignOut">signed in</div>
    <button v-if="showSignOut" v-on:click="signout">Sign out</button>
    <div v-if="showSpinner" class="loader"></div>
    <div class="loginstatus" v-if="showSignIn">signed out</div>
    <button v-if="showSignIn" v-on:click="signin">Sign in</button>
  </div>
</template>

<script>
import store from '../store'
import { signIn, signOut } from '../gapihandler'
import * as signedInStates from '../signed-in-states.js'

export default {
  name: 'hello',
  computed: {
    showSignOut () {
      return store.state.signedInState === signedInStates.SIGNED_IN
    },
    showSignIn () {
      return store.state.signedInState === signedInStates.NOT_SIGNED_IN
    },
    showSpinner () {
      return store.state.signedInState === signedInStates.CHECKING
    }
  },
  methods: {
    signout: function (event) {
      signOut()
    },
    signin: function (event) {
      signIn()
    }
  }

  // data () {
  //   return {
  //     msg: 'Login here...'
  //   }
  // }
}
</script>


