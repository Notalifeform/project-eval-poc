import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import About from '@/components/About'
import Render from '@/components/Render'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home/',
      name: 'Home',
      component: Main
    },
    {
      path: '/about/',
      name: 'About',
      component: About
    },
    {
      path: '/render/',
      name: 'Render',
      component: Render
    }
  ],
  mode: 'history'
})