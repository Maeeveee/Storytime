import HttpFactory from './factory'
import type {
    ApiResponse,
    User,
    UpdateProfilePayload,
    ChangePasswordPayload
} from '~/types/api'

class UserRepository {
    private http: HttpFactory

    constructor(http: HttpFactory) {
        this.http = http
    }

    async me() {
        return this.http.get<ApiResponse<User>>('/users/me')
    }

    async updateProfile(payload: UpdateProfilePayload) {
        return this.http.put<ApiResponse<User>>('/users/profile', payload)
    }

    async changePassword(payload: ChangePasswordPayload) {
        return this.http.put<ApiResponse<null>>('/users/password', payload)
    }
}

export default UserRepository