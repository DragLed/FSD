import { POST } from '@/shared/api'
import type { UseRegisterResponse } from '@/shared/api'

interface RegisterParams {
  username: string
  password: string
}

export async function register(params: RegisterParams): Promise<string> {
  const { data, error, response } = await POST('/users/', {
    body: params,
  })

  if (error) {
    throw new Error(`HTTP ${response.status}`)
  }

  return (data as UseRegisterResponse).message
}
