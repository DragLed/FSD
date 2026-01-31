import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as null | number,
    isInitialized: false,
  }),

  getters: {
    isAuthenticated: (state) => Boolean(state.user),
  },

  actions: {
    setUser(id: number) {
      this.user = id
    },

    logout() {
      this.user = null
    },
  },
})
