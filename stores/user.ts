import { defineStore } from 'pinia'
import type { User } from '~/types/api'

export const useUserStore = defineStore('user', () => {
    const { $api } = useNuxtApp()

    const user = ref<User | null>(null)
    const isLoading = ref(false)

    const tokenCookie = useCookie<string | null>('token', {
        maxAge: 60 * 60 * 24 * 7,
        sameSite: 'lax'
    })

    const token = computed(() => tokenCookie.value)
    const isLoggedIn = computed(() => !!tokenCookie.value)

    const userName = computed(() => user.value?.name ?? 'User')
    const userProfileImage = computed(() => user.value?.profile_image ?? '/img/user.webp')
    const userEmail = computed(() => user.value?.email ?? 'user@mail.com')
    const userAbout = computed(() => user.value?.about ?? 'my bio')

    async function fetchUser() {
        isLoading.value = true
        try {
            const response = await $api.user.me()
            user.value = response.data
        } catch (error) {
            console.error('Failed to fetch user:', error)
            throw error
        } finally {
            isLoading.value = false
        }
    }

    function setToken(newToken: string | null) {
        tokenCookie.value = newToken
    }

    function setUser(newUser: User) {
        user.value = newUser
    }

    function logout() {
        user.value = null
        tokenCookie.value = null
    }

    function updateProfile(updatedUser: Partial<User>) {
        if (user.value) {
            user.value = { ...user.value, ...updatedUser }
        }
    }

    return {
        user,
        token,
        isLoading,
        isLoggedIn,
        userName,
        userProfileImage,
        userEmail,
        userAbout,
        fetchUser,
        setToken,
        setUser,
        logout,
        updateProfile
    }
})

