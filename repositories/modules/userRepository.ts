import HttpFactory from '../factory'
import type {
    ApiResponse,
    User,
    UpdateProfilePayload,
    ChangePasswordPayload
} from '~/types/api'

class UserRepository extends HttpFactory {

    async me() {
        return this.get<ApiResponse<User>>('/users/me')
    }

    async updateProfile(payload: UpdateProfilePayload) {
        return this.put<ApiResponse<User>>('/users/profile', payload)
    }

    async changePassword(payload: ChangePasswordPayload) {
        return this.put<ApiResponse<null>>('/users/password', payload)
    }
}

export default UserRepository