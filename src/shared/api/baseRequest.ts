import { Users } from './generated/Users'
import { Gifts } from './generated/Gifts'

export const GiftsRequest = new Gifts({
  baseURL: 'https://api.dragledwl.ru',
  withCredentials: true,
})

export const UserRequest = new Users({
  baseURL: 'https://api.dragledwl.ru',
  withCredentials: true,
})
