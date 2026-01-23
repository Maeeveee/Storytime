import HttpFactory from '../factory'
import type {
    ApiResponse,
    LoginPayload,
    RegisterPayload,
    AuthResponse
} from '~/types/api'

class AuthRepository extends HttpFactory {

    async csrf() {
        const config = useRuntimeConfig()
        const baseUrl = config.public.apiBase?.replace(/\/api\/?$/, '') || ''
        return $fetch(`${baseUrl}/sanctum/csrf-cookie`, {
            credentials: 'include'
        })
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