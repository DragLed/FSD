import { GET } from '@/shared/api'
import type { User } from '../model/types'

export async function fetchMe(): Promise<User | null> {
  const { data, error } = await GET('/users/me')

  if (error) {
    return null
  }

  return data as User
}
