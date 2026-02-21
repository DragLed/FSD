import type { UserView } from '@/shared/api/'
import { UserRequest } from '@/shared/api/'

export async function login(username: string, password: string): Promise<UserView> {
  const response = await UserRequest.loginUsersLoginPost({
    username,
    password,
  })

  return response.data
}

export async function register(username: string, password: string): Promise<UserView> {
  const response = await UserRequest.createUserUsersPost({
    username,
    password,
  })

  return response.data
}
