import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Layout from '@/views/Layout'
import UserList from '@/views/User'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/login', component: Login },
    { path: '/',
      component: Layout,
      children: [
        { path: '', component: Home },
        { path: '/users', component: UserList }
      ]
    }
  ]
})
