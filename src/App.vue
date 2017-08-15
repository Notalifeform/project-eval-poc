<template>
  <div id="app">
    <div id="header" class="homebar" v-if="showHeader">
     <!-- <router-link v-bind:to="'/'">Home</router-link> -->
      <div class="apptitle"><p>Sping Project Evaluation Report Creator</p><img class="logo" src="../static/css/images/sping-logo.svg"></div>
      <login/>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import store from './store'

export default {
  name: 'app',
  computed: {
    msg () {
      return store.state.message
    },
    showHeader () {
      // fixme - this should be possible using router (now we set it in router.beforeEach)
      return store.state.showHeader
    }
  }
}

</script>

