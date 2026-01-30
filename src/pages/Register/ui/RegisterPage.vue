<script setup lang="ts">
import { ref } from 'vue'
import { register, login } from '@/features/auth'
import { useRouter } from 'vue-router'

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
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>

          <ul v-if="error" class="error-messages">
            <li>{{ error }}</li>
          </ul>

          <form @submit.prevent="onRegister">
            <fieldset :disabled="loading">
              <fieldset class="form-group">
                <input
                  v-model="username"
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="login"
                  required
                />
              </fieldset>

              <fieldset class="form-group">
                <input
                  v-model="password"
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  required
                />
              </fieldset>

              <button class="btn btn-lg btn-primary pull-xs-right">
                {{ loading ? 'Loading...' : 'Sign up' }}
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
