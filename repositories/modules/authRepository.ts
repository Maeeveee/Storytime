import type {
    ApiResponse,
    LoginPayload,
    RegisterPayload,
    AuthResponse
} from '~/types/api'
import HttpFactory from '../factory'

class AuthRepository extends HttpFactory{

    async register(payload: RegisterPayload) {
        return this.post<ApiResponse<AuthResponse>>('/auth/register', payload)
    }

    async login(payload: LoginPayload) {
        return this.post<ApiResponse<AuthResponse>>('/auth/login', payload)
    }

    async logout() {
        return this.delete<ApiResponse<null>>('/auth/logout')
    }
}

export default AuthRepository