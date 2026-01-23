import HttpFactory from '../factory'
import type {
    ApiResponse,
    LoginPayload,
    RegisterPayload,
    AuthResponse
} from '~/types/api'

class AuthRepository extends HttpFactory {

    async csrf() {
        return Promise.resolve()
    }

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