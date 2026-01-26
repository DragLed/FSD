<script setup lang="ts">
import { useAuthStore } from '@/entities/auth'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

if (auth.isInitialized && !auth.isAuthenticated) {
  router.push('/login')
}

const user = computed(() => auth.user)
</script>

<template>
  <div v-if="auth.isInitialized && user">
    <h1>Профиль</h1>

    <p><strong>ID:</strong> {{ user.id }}</p>
    <p><strong>Username:</strong> {{ user.username }}</p>
    <p>
      <strong>Создан:</strong>
      {{ new Date(user.created_at).toLocaleDateString() }}
    </p>
  </div>
</template>
