import type { UserView } from '@/shared/api/'
import { UserRequest } from '@/shared/api/'

export async function logout(): Promise<UserView> {
  const response = await UserRequest.logoutUsersLogoutPost()

  return response.data
}

export async function me() {
  const response = await UserRequest.getMeUsersMeGet()

  return response.data
}

export async function getUser(id: string) {
  const response = await UserRequest.getUserUsersUserIdGet(id)

  return response.data
}
