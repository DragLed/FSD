import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home'
import LoginPage from '@/pages/Login'
import RegisterPage from '@/pages/Register'
import GiftPage from '@/pages/Gift'
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/gifts/:id', component: GiftPage, name: 'gift' },
  // { path: "/user/:id", component: UserPage, id: "user" },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
