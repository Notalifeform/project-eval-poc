<template>
  <div id="app">
    <div id="header" v-if="showHeader">
      <router-link v-bind:to="'/about'">About</router-link>
      <router-link v-bind:to="'/'">Home</router-link>
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
      // fixme - thi should be possible using router (now we ser it in router.beforeEach)
      return store.state.showHeader
    }
  }
}

</script>

<style>
#header {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
