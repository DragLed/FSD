<script setup lang="ts">
import { logout } from '@/features/auth/';
import './.css'
</script>

<template>
  <div class="header-view">
    <div class="header-go-to-main">
      <router-link to="/" class="nav-link">На главную</router-link>
    </div>
    <div v-if="true" class="header-logout">
      <button @click="logout" class="nav-link">Выйти</button>
      <router-link to="/user" class="nav-link">Профиль</router-link>
    </div>
    <div v-else class="header-auth-links">
      <router-link to="/login" class="nav-link">Войти</router-link>
      <router-link to="/register" class="nav-link">Зарегестрироваться</router-link>
    </div>
  </div>
</template>
