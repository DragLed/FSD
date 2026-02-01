<script setup lang="ts">
import { ref } from 'vue'
import { register, login } from '@/features/auth'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/entities/user'

const authStore = useAuthStore()
const router = useRouter()

const username = ref('')
const password = ref('')
const error = ref<string | null>(null)
const loading = ref(false)

async function onRegister() {
  try {
    loading.value = true
    const response = await register(username.value, password.value)
    console.log(response)
    const loginResponse = await login(username.value, password.value)
    console.log(loginResponse)
    await authStore.setUser(loginResponse.id)
    router.push('/')
  } catch (e) {
    if (e.status === 409) {
      console.error(e)
      error.value = 'login already exists'
      return
    }
    error.value = 'error registering'
    console.error(e)
  } finally {
    loading.value = false
  }
}
</script>
<template>
  <div class="auth-page">
    <h1 class="title">Sign up</h1>

    <form class="form" @submit.prevent="onRegister">
      <input v-model="username" class="input" type="text" placeholder="Login" required />

      <input v-model="password" class="input" type="password" placeholder="Password" required />
      <ul v-if="error" class="error-messages">
        <li>{{ error }}</li>
      </ul>

      <button class="btn btn-lg btn-primary pull-xs-right">
        {{ loading ? 'Loading...' : 'Sign up' }}
      </button>
      <p>Already have an account? <router-link to="/login">Sign in</router-link></p>
    </form>
  </div>
</template>
