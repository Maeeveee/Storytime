import { defineNuxtPlugin } from '#app'
import HttpFactory from '~/repositories/factory'

import AuthRepository from '~/repositories/modules/authRepository'
import StoryRepository from '~/repositories/modules/storyRepository'
import CategoryRepository from '~/repositories/modules/categoryRepository'
import UserRepository from '~/repositories/modules/userRepository'
import type { $Fetch } from 'ofetch'

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()

    const fetcher = $fetch.create({
        baseURL: config.public.apiBase,
        onRequest({ request, options }) {
        }
    }) as $Fetch

    const modules = {
        auth: new AuthRepository(fetcher),
        story: new StoryRepository(fetcher),
        category: new CategoryRepository(fetcher),
        user: new UserRepository(fetcher)
    }

    return {
        provide: {
            api: modules,
        },
    }
})