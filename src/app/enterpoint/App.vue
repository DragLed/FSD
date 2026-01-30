<script setup>
import HeaderView from '@/widgets/Header/'
import FooterView from '@/widgets/Footer/'

import '../assets/appmain.css'
</script>

<template>
  <header>
    <HeaderView />
  </header>
  <main class="app-content">
    <router-view />
  </main>
  <footer>
    <FooterView />
  </footer>
</template>

<style scoped></style>
