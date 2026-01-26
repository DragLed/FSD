import { fetchMe } from '@/entities/user'
import { useAuthStore } from '@/entities/auth'

export async function initAuth() {
  const authStore = useAuthStore()

  const user = await fetchMe()

  if (user) {
    authStore.setUser(user)
  } else {
    authStore.clear()
  }

  authStore.finishInit()
}
