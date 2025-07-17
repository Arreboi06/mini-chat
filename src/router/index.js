import { createRouter, createWebHistory } from 'vue-router'
import Chat from '@/views/ChatPage.vue'
import Login from '@/views/LoginPage.vue'
import ws from '@/utils/ws.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/chat', // 🔴 一般登录页就是这样配置
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat,
    },
  ],
})

router.beforeEach((to, from, next) => {
  let token = window.localStorage.getItem('x-token')
  if (token) ws.connect(token)
  if (!token && to.path !== '/login') {
    next({ path: '/login' })
    return
  }
  if ((token && to.path === '/login') || !to.matched.length) {
    next({ path: '/' })
    return
  }
  next()
})

export default router
