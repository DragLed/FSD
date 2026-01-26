import { POST } from '@/shared/api'

export async function logout() {
  await POST('/users/logout')
}
