<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import './Profilepage.css'
import { getUser } from '@/entities/user'

const route = useRoute()
const userId = route.params.id as string
const user = ref([])
const loading = ref(false)
const error = ref('loading...')

async function getProfile(Id: string) {
  try {
    const result = await getUser(Id)
    user.value = result
    error.value = ''
  } catch (e) {
    if (e.status === 404) {
      console.error(e)
      error.value = '404: Page not found'
      return
    }
    error.value = 'unknown error'
    console.error(e)
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  getProfile(userId ? userId : '0')
})
</script>
<template>
  <h1 v-if="error" class="title">{{ error }}</h1>
  <div v-else-if="!error">
    <h1 class="title">Profile ID: {{ user.id }}</h1>
    <p class="title">Username: {{ user.username }}</p>
  </div>
</template>
