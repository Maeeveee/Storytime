import AuthRepository from '~/repositories/modules/authRepository'
import StoryRepository from '~/repositories/storyRepository'
import CategoryRepository from '~/repositories/categoryRepository'
import UserRepository from '~/repositories/userRepository'

interface IApiInstance {
    auth: AuthRepository
    story: StoryRepository
    category: CategoryRepository
    user: UserRepository
}

declare module '#app' {
    interface NuxtApp {
        $api: IApiInstance
    }
}

declare module 'vue' {
    interface ComponentCustomProperties {
        $api: IApiInstance
    }
}

export { }