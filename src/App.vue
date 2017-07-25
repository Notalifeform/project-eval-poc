<template>
  <div id="app">
    <router-link v-bind:to="'/about'">About</router-link>
    <router-link v-bind:to="'/login'">About</router-link>
    <router-link v-bind:to="'/'">Home</router-link>
    msg: {{ msg }}
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
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
