import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
})

export default router
