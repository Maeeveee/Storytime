import HttpFactory from '../factory'
import type {
    ApiResponse,
    User,
    UpdateProfilePayload,
    ChangePasswordPayload
} from '~/types/api'

class UserRepository extends HttpFactory {

    async me() {
        return this.get<ApiResponse<User>>('/me')
    }

    async updateProfile(payload: UpdateProfilePayload) {
        return this.put<ApiResponse<User>>('/me', payload)
    }

    async changePassword(payload: ChangePasswordPayload) {
        return this.put<ApiResponse<null>>('/me/change-password', payload)
    }
}

export default UserRepository