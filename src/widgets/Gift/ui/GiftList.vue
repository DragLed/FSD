<script setup lang="ts">
import './GiftList.css'

import { ref, onMounted } from 'vue'
import { useGiftStore } from '@/entities/gift/'
import { useAuthStore } from '@/entities/user/'
import router from '@/app/router'

const authStore = useAuthStore()
const giftStore = useGiftStore()

const loading = ref(false)

async function DelGift(id: number) {
  await giftStore.deleteGift(id)
}

function Go_to_gift(id) {
  router.push({ name: 'gift', params: { id } })
}

onMounted(() => {
  giftStore.fetchGifts()
})
</script>
<template>
  <div class="gift" v-if="authStore.isAuthenticated">
    <h1>🎁 <span class="title">Мои подарки</span></h1>

    <div class="gift-list">
      <div v-for="(item, index) in giftStore.gifts" :key="index" class="gift-card">
        <h2 class="gift-name">📦 {{ item.name }}</h2>
        <p class="gift-price">💰 {{ item.price }} ₽</p>
        <p class="gift-desc"><span>📝</span> {{ item.description }}</p>
        <p v-if="item.photo">
          <a :href="item.photo" target="_blank">Ссылочка</a>
        </p>
        <button @click="DelGift(item.id)" class="btn">❌</button>
        <button @click="Go_to_gift(item.id)" class="btn">✏️</button>
      </div>
    </div>
  </div>

  <p v-if="loading" class="loading">Загрузка подарков...</p>
  <p
    v-else-if="giftStore.error && giftStore.error.code === 404 && authStore.isAuthenticated"
    class="error"
  >
    У вас пока нет подарков
  </p>
</template>
