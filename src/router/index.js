import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Layout from '@/views/Layout'
import UserList from '@/views/User'

Vue.use(Router)

const router = new Router({
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
router.beforeEach((to, from, next) => {
  console.log('守卫启动')
  if (to.path === '/login') {
    return next()
  }
  // 验证登录状态
  const token = window.localStorage.getItem('token')
  if (!token) {
    return next('/login')
  }
  next()
})

export default router
