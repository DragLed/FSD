<script setup lang="ts">
import { ref } from "vue"
import { login } from "@/features/auth"
import { useRouter } from 'vue-router'

const router = useRouter()

const username = ref("")
const password = ref("")
const error = ref<string | null>(null)
const loading = ref(false)

async function onLogin() {
  try {
    loading.value = true
    const response = await login(username.value, password.value)
    console.log(response)
  } catch (e) {
    error.value = "error logging in"
    console.error(e)
  }
  finally {
    loading.value = false
    router.push("/")
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

          <form @submit.prevent="onLogin">
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
                {{ loading ? 'Loading...' : 'Sign in' }}
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
