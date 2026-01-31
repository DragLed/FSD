<script setup lang="ts">
import { useRoute } from 'vue-router'
import { GiftView } from '@/shared/api'
import { getGift, editGift } from '@/features/gifts'
import { ref, onMounted } from 'vue'
import './GiftPage.css'

const name = ref('')
const description = ref('')
const price = ref(0)
const photo = ref('')
const route = useRoute()
const error = ref<string | null>(null)
const loading = ref(false)
const isEditing = ref(false)

const giftId = parseInt(route.params.id as string) | 0
const gift = ref<GiftView | null>(null)

async function getData(id: number) {
  gift.value = await getGift(id)
  name.value = gift.value?.name || 'err'
  description.value = gift.value?.description || 'err'
  price.value = gift.value?.price || 0
  photo.value = gift.value?.photo || 'err'
}

async function upGift(id: number, GiftView: GiftView) {
  if (!isEditing.value) {
    isEditing.value = true
    return
  }
  try {
    loading.value = true
    editGift(id, GiftView)
    isEditing.value = false
    error.value = 'Подарок успешно изменен'
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

onMounted(async () => {
  await getData(giftId)
})
</script>
<template>
  <div class="form">
    <h1 class="title">Страница подарка</h1>
    <div v-if="gift" class="gift-form">
      <div class="edit" v-if="isEditing">
        <h1><span class="title" style="font-size: 25px">Изменить подарок</span></h1>
        <input type="text" v-model="name" placeholder="Название подарка" class="input" />
        <input type="text" v-model="description" placeholder="Описание" class="input" />
        <input type="number" v-model="price" placeholder="Цена" class="input" />
        <input type="text" v-model="photo" placeholder="Ссылка/фото" class="input" />
      </div>
      <div v-else class="gift-details">
        <p class="gift-title">
          <span class="gift-text">Название: {{ name }}</span>
        </p>
        <p class="gift-title">
          <span class="gift-text">Описание: {{ description }}</span>
        </p>
        <p class="gift-title">
          <span class="gift-text">Цена: {{ price }}</span>
        </p>
        <p class="gift-title">
          <span class="gift-text"
            >Ссылка: <a :href="photo" target="_blank">{{ photo }}</a></span
          >
        </p>
      </div>
      <button v-if="!isEditing" class="btn" @click="isEditing = !isEditing">
        {{ loading ? 'Loading...' : 'Редактировать' }}
      </button>
      <button v-else class="btn" @click="upGift(giftId, { name, description, price, photo })">
        {{ loading ? 'Loading...' : 'Готово' }}
      </button>
      <button class="btn" @click="$router.go(-1)">Назад</button>
      <p v-if="error === 'Подарок успешно изменен'" class="success">{{ error }}</p>
      <p v-else-if="error" class="error">{{ error }}</p>
    </div>
    <p v-else-if="!gift">Подарок не найден</p>
  </div>
</template>
