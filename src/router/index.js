import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
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
      path: '/render/',
      name: 'Render',
      component: Render
    }
  ],
  mode: 'history',
  base: process.env.environment === 'development' ? '/' : '/project-eval-poc/'
})
