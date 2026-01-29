import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home'
import LoginPage from '@/pages/Login'
import RegisterPage from '@/pages/Register'
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
