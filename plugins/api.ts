import { defineNuxtPlugin } from '#app'
import HttpFactory from '~/repositories/factory'
import AuthRepository from '~/repositories/authRepository'
import StoryRepository from '~/repositories/storyRepository'
import CategoryRepository from '~/repositories/categoryRepository'
import UserRepository from '~/repositories/userRepository'

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()

    const fetcher = $fetch.create({
        baseURL: config.public.apiBase,
        onRequest({ request, options }) {
        }
    })

    const httpFactory = new HttpFactory(fetcher as any)

    const modules = {
        auth: new AuthRepository(httpFactory),
        story: new StoryRepository(httpFactory),
        category: new CategoryRepository(httpFactory),
        user: new UserRepository(httpFactory)
    }

    return {
        provide: {
            api: modules,
        },
    }
})