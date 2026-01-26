import { defineStore } from 'pinia'
import type { User } from '../../user/model/types'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    isInitialized: false,
  }),

  getters: {
    isAuthenticated: (state) => Boolean(state.user),
  },

  actions: {
    setUser(user: User) {
      this.user = user
    },

    clear() {
      this.user = null
    },

    finishInit() {
      this.isInitialized = true
    },
  },
})
