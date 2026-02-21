import { Users } from './generated/Users'
import { Gifts } from './generated/Gifts'

export const GiftsRequest = new Gifts({
  baseURL: 'https://127.0.0.1:8000',
  withCredentials: true,
})

export const UserRequest = new Users({
  baseURL: 'https://127.0.0.1:8000',
  withCredentials: true,
})
