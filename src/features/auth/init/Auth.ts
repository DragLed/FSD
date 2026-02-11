import { useAuthStore, me } from '@/entities/user/'

export async function getMe() {
  const authStore = useAuthStore()
  const meResponse = await me()
  if (meResponse) {
    authStore.setUser(meResponse.id)
  }
}
