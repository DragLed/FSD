import { GET } from '@/shared/api'

interface MeResponse {
  username: string
}

export async function getMe(): Promise<MeResponse | null> {
  const { data, error } = await GET('/users/me')

  if (error) {
    return null
  }

  return data as MeResponse
}
