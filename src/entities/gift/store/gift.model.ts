import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getAllGift, postGift, delGift } from '@/features/gifts'
import { GiftView } from '@/shared/api'

type AppError = {
  message: string
  code?: number
}

export const useGiftStore = defineStore('gift', () => {
  const gifts = ref<[] | null>(null)
  const loading = ref(false)
  const error = ref<AppError | null>(null)

  function setError(e: unknown) {
    if (e && typeof e === 'object' && 'response' in e) {
      const err = e as { response?: { data?: { detail?: string }; status?: number } }
      error.value = {
        message: err.response?.data?.detail ?? 'Ошибка сервера',
        code: err.response?.status,
      }
    } else {
      error.value = { message: 'Неизвестная ошибка' }
    }
  }

  function clearError() {
    error.value = null
  }

  async function fetchGifts() {
    try {
      loading.value = true
      clearError()
      gifts.value = await getAllGift()
    } catch (e) {
      if (
        e &&
        typeof e === 'object' &&
        'status' in e &&
        (e as { status?: number }).status === 404
      ) {
        gifts.value = null
      } else {
        setError(e)
      }
    } finally {
      loading.value = false
    }
  }

  async function addGift(GiftView: GiftView) {
    try {
      loading.value = true
      clearError()
      await postGift(GiftView.name, GiftView.description, GiftView.price, GiftView.photo)
      await fetchGifts()
    } catch (e) {
      setError(e)
      throw e // важно
    } finally {
      loading.value = false
    }
  }

  async function deleteGift(id: number) {
    try {
      loading.value = true
      clearError()
      await delGift(id)
      await fetchGifts()
    } catch (e) {
      setError(e)
      throw e
    } finally {
      loading.value = false
    }
  }

  return {
    gifts,
    loading,
    error,
    fetchGifts,
    addGift,
    clearError,
    deleteGift,
  }
})
