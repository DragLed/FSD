import { Users } from './generated/Users'
import { Gifts } from './generated/Gifts'

export const GiftsRequest = new Gifts({
  baseURL: 'http://127.0.0.1:8000',
  withCredentials: true,
})

export const UserRequest = new Users({
  baseURL: 'http://127.0.0.1:8000',
  withCredentials: true,
})
