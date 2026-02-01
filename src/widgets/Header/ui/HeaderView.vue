<script setup lang="ts">
import './Header.css'

import { logout } from '@/features/auth/'
import { useAuthStore } from '@/entities/user/'
import router from '@/app/router'

const authStore = useAuthStore()

function logoutHandler() {
  logout()
  authStore.logout()
  router.push('/login')
}

function Go_to_profile(id: string) {
  router.push({ name: 'user', params: { id } })
}



</script>

<template>
  <header class="app-header">
    <div class="header-view">
      <div class="header-go-to-main">
        <router-link to="/" class="nav-link">На главную</router-link>
      </div>

      <div v-if="authStore.isAuthenticated" class="header-logout">
        <button @click="logoutHandler" class="nav-link">Выйти</button>
        <button @click="Go_to_profile(authStore.user.toString())" class="nav-link">Профиль</button>
      </div>

      <div v-else class="header-auth-links">
        <router-link to="/login" class="nav-link">Войти</router-link>
        <router-link to="/register" class="nav-link">Зарегистрироваться</router-link>
      </div>
    </div>
  </header>
</template>
