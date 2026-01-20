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
        return this.patch<ApiResponse<User>>('/me', payload)
    }

    async changePassword(payload: ChangePasswordPayload) {
        return this.post<ApiResponse<null>>('/me/change-password', payload)
    }

    async updateProfileImage(payload: ChangePasswordPayload) {
        return this.post<ApiResponse<null>>('/me/profile-image', payload)
    }
}

export default UserRepository