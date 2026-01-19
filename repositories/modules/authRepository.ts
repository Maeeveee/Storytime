import type {
    ApiResponse,
    LoginPayload,
    RegisterPayload,
    AuthResponse
} from '~/types/api'
import HttpFactory from '../factory'

class AuthRepository extends HttpFactory{

    async register(payload: RegisterPayload) {
        return this.post<ApiResponse<AuthResponse>>('/register', payload)
    }

    async login(payload: LoginPayload) {
        return this.post<ApiResponse<AuthResponse>>('/login', payload)
    }

    async logout() {
        return this.delete<ApiResponse<null>>('/logout')
    }
}

export default AuthRepository