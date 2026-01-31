<script setup lang="ts">
import './GiftForm.css'

import { ref } from 'vue'
import { useAuthStore } from '@/entities/user/'
import { useGiftStore } from '@/entities/gift/'

const giftStore = useGiftStore()
const authStore = useAuthStore()
const name = ref('')
const description = ref('')
const price = ref(0)
const photo = ref('')

async function submit() {
  if (!name.value || !description.value || !price.value) {
    giftStore.error = { message: 'Заполните все поля!' }
    return
  }
  await giftStore.addGift({
    name: name.value,
    description: description.value,
    price: price.value,
    photo: photo.value,
  })
  name.value = (parseInt(name.value) + 1).toString()
  description.value = (parseInt(description.value) + 1).toString()
  price.value = price.value + 1
  photo.value = ''
}
</script>
<template>
  <div v-if="authStore.isAuthenticated" class="gift-form">
    <h1><span class="title" style="font-size: 25px">Добавить подарок</span> 🎁</h1>
    <input type="text" v-model="name" placeholder="Название подарка" class="input" />
    <input type="text" v-model="description" placeholder="Описание" class="input" />
    <input type="number" v-model="price" placeholder="Цена" class="input" />
    <input type="text" v-model="photo" placeholder="Ссылка/фото" class="input" />
    <button @click="submit" class="btn">Добавить подарок</button>
    <p
      v-if="giftStore.error && giftStore.error.message != 'Подарки пользователя не найдены'"
      class="error"
    >
      {{ giftStore.error.message }}
    </p>
  </div>
  <p v-else-if="!authStore.isAuthenticated" class="error">Вы не авторизованы</p>
</template>
