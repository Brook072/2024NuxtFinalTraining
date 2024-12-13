import { $fetch } from 'ofetch'

export const useAuthStore = defineStore('auth', () => {
    type User = { address: {
      zipcode: number
      detail: string
      city: string
      county: string
    }
    _id: string
    name: string
    email: string
    phone: string
    birthday: string
    createdAt: string
    updatedAt: string
    id: string
    }
    const user = ref<User | null>(null)

    function login({ email, password }: { email: string, password: string }) {
      return $fetch('/api/v1/user/login', {
        method: 'POST',
        body: {
          email,
          password,
        },
      })
    }

    return {
      login,
    }
})
