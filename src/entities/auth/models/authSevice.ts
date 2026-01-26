import { login } from '../api/login'
import { register } from '../api/register'

interface AuthPayload {
  username: string
  password: string
}

export async function registerAndLogin(payload: AuthPayload): Promise<string> {
  const registered = await register(payload)

  if (!registered) {
    return 'Registration failed'
  }

  return login(payload)
}
