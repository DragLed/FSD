<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import './ProfilePage.css'
import { getMe, getUser } from '@/features/auth'


const route = useRoute()
const userId = route.params.id as string 
const user = ref([])

function getProfile(Id: string) { 
    console.log(Id)

    if (Id == '0') {
    user.value = getMe()   
    console.log(user.value)
    }
    else {
    user.value = getUser(Id)
    console.log(user.value)
    }

}

onMounted(async () => {
    getProfile(userId? userId : '0')
})

</script>
<template>
    <h1 v-if="userId == '0' "class="title">Profile ID: Ваш</h1>
    <h1  v-else class="title">Profile ID: {{ userId }}</h1>
</template>