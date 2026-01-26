import createClient from 'openapi-fetch'

import { backendBaseUrl } from '../config'
import type { paths } from './v1'

export const { GET, POST, PUT, DELETE } = createClient<paths>({
  baseUrl: backendBaseUrl,
  credentials: 'include',
})
