<script setup lang="ts">
import { useAuthStore } from '@/entities/auth/'
import { useRouter } from 'vue-router'
import { logout } from '@/entities/auth'

const auth = useAuthStore()
const router = useRouter()

const onLogout = async () => {
  await logout()
  auth.clear()
  router.push('/login')
}
</script>

<template>
  <div>
    <router-link to="/" class="nav-link">На главную</router-link>
  </div>
  <div v-if="auth.isAuthenticated">
    <button @click="onLogout" class="nav-link">Выйти</button>
    <router-link to="/user" class="nav-link">Профиль</router-link>
  </div>
  <div v-else>
    <router-link to="/login" class="nav-link">Войти</router-link>
    <router-link to="/register" class="nav-link">Зарегестрироваться</router-link>
  </div>
</template>
