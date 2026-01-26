import Home from '@/pages/Home'
import LoginPage from '@/pages/Login/'
import RegisterPage from '@/pages/Register/'
import ProfilePage from '@/pages/user/'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/user', component: ProfilePage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
