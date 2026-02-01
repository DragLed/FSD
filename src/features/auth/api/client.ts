import { Users } from '@/shared/api/generated/Users'
import type { UserView } from '@/shared/api/'

const UserAuth = new Users({
  baseURL: 'http://127.0.0.1:8000',
  withCredentials: true,
})

export async function login(username: string, password: string): Promise<UserView> {
  const response = await UserAuth.verifyPasswordUsersVerifyPasswordPost({
    username,
    password,
  })

  return response.data
}

export async function register(username: string, password: string): Promise<UserView> {
  const response = await UserAuth.createUserUsersPost({
    username,
    password,
  })

  return response.data
}

export async function logout(): Promise<UserView> {
  const response = await UserAuth.logoutUsersLogoutPost()

  return response.data
}

export async function me() {
  const response = await UserAuth.getMeUsersMeGet()

  return response.data
}

export async function getUser(id: string) {
  const response = await UserAuth.getUserUsersUserIdGet(id)

  return response.data
}
