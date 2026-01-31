<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()

const giftId = parseInt(route.params.id)
</script>
<template>
  <div class="form">
    <h1 class="title">Страница подарка {{ giftId }}</h1>
    <button class="btn" @click="$router.go(-1)">Назад</button>
    <button class="btn">Редактировать</button>
  </div>
</template>
