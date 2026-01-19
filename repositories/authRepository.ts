import type {
    ApiResponse,
    LoginPayload,
    RegisterPayload,
    AuthResponse
} from '~/types/api'
import HttpFactory from './factory'

class AuthRepository {
    private http: HttpFactory

    constructor(http: HttpFactory) {
        this.http = http
    }

    async register(payload: RegisterPayload) {
        return this.http.post<ApiResponse<AuthResponse>>('/auth/register', payload)
    }

    async login(payload: LoginPayload) {
        return this.http.post<ApiResponse<AuthResponse>>('/auth/login', payload)
    }

    async logout() {
        return this.http.delete<ApiResponse<null>>('/auth/logout')
    }
}

export default AuthRepository