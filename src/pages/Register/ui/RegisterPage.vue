<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { registerAndLogin, getMe, useAuthStore } from '@/entities/auth'

const authStore = useAuthStore()
const router = useRouter()

const username = ref('')
const password = ref('')
const loading = ref(false)
const error = ref<string | null>(null)

const submit = async () => {
  error.value = null
  loading.value = true

  try {
    const success = await registerAndLogin({
      username: username.value,
      password: password.value,
    })

    if (!success) {
      error.value = 'uncorrected login or password'
      return
    }

    console.log('Successful registration')
    const user = await getMe()
    authStore.setUser(user!)
    router.push('/')
  } catch {
    error.value = 'Ошибка сервера'
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
          <h1 class="text-xs-center">Sign in</h1>

          <ul v-if="error" class="error-messages">
            <li>{{ error }}</li>
          </ul>

          <form @submit.prevent="submit">
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
