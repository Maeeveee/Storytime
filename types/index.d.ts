import AuthRepository from '~/repositories/modules/authRepository'
import StoryRepository from '~/repositories/modules/storyRepository'
import CategoryRepository from '~/repositories/modules/categoryRepository'
import UserRepository from '~/repositories/modules/userRepository'

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