import { useAuthStore } from '@/entities/user/'
import { me } from '@/features/auth'

export async function getMe() {
  const authStore = useAuthStore()
  const meResponse = await me()
  if (meResponse) {
    authStore.setUser(meResponse.id)
  }
}
