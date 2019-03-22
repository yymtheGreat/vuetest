import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/Login'
import Login2 from '@/views/Login2'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Login },
    { path: '/login', component: Login2 }
  ]
})
