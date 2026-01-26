import { POST } from '@/shared/api'
import type { VerifyPasswordResponse } from '@/shared/api'

interface LoginParams {
  username: string
  password: string
}

export async function login(params: LoginParams): Promise<string> {
  const { data, error, response } = await POST('/users/verify_password', {
    body: params,
  })

  if (error) {
    throw new Error(`HTTP ${response.status}`)
  }

  return (data as VerifyPasswordResponse).message
}
