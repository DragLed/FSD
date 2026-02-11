<script setup lang="ts">
import './Login.css'

import { ref } from 'vue'
import { login } from '@/features/auth'
import { useRouter } from 'vue-router'
import { useAuthStore, me } from '@/entities/user'

const authStore = useAuthStore()
const router = useRouter()

const username = ref('')
const password = ref('')
const error = ref<string | null>(null)
const loading = ref(false)

async function onLogin() {
  try {
    loading.value = true
    const response = await login(username.value, password.value)
    console.log(response)
    const meResponse = await me()
    authStore.setUser(meResponse.id)
    router.push('/')
  } catch (e) {
    if (e.status === 401) {
      console.error(e)
      error.value = 'invalid login or password'
      return
    }
    error.value = 'something went wrong'
    console.error(e)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="auth-page">
    <h1 class="title">Sign in</h1>

    <form class="form" @submit.prevent="onLogin">
      <input v-model="username" class="input" type="text" placeholder="Login" required />

      <input v-model="password" class="input" type="password" placeholder="Password" required />
      <ul v-if="error" class="error-messages">
        <li>{{ error }}</li>
      </ul>
      <!-- <p><input type="checkbox" id="remember-me" class="remember-me"><label for="remember-me" class="remember-me">Remember me</label><router-link to="/register">Forgot password?</router-link></p> -->
      <button class="btn btn-lg btn-primary pull-xs-right">
        {{ loading ? 'Loading...' : 'Sign in' }}
      </button>
      <p>Not a member <router-link to="/register">Sing up</router-link></p>
    </form>
  </div>
</template>
