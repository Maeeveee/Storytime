import type { $Fetch } from 'ofetch'

export class ApiError extends Error {
    statusCode: number
    data: any

    constructor(message: string, statusCode: number, data?: any) {
        super(message)
        this.name = 'ApiError'
        this.statusCode = statusCode
        this.data = data
    }

    get isUnauthorized() {
        return this.statusCode === 401
    }

    get isNotFound() {
        return this.statusCode === 404
    }

    get isValidationError() {
        return this.statusCode === 422
    }

    get isServerError() {
        return this.statusCode >= 500
    }
}

export default class HttpFactory {
    private $fetch: $Fetch

    constructor(fetcher: $Fetch) {
        this.$fetch = fetcher
    }

    private handleError(error: any): never {
        const statusCode = error.response?.status || error.statusCode || 0
        const message = error.response?._data?.message || error.data?.message || error.message || 'Network error'
        const data = error.response?._data || error.data

        throw new ApiError(message, statusCode, data)
    }

    async get<T>(url: string, params?: Record<string, any>): Promise<T> {
        try {
            return await this.$fetch<T>(url, {
                method: 'GET',
                params
            })
        } catch (error) {
            this.handleError(error)
        }
    }

    async post<T>(url: string, body?: Record<string, any>): Promise<T> {
        try {
            return await this.$fetch<T>(url, {
                method: 'POST',
                body
            })
        } catch (error) {
            this.handleError(error)
        }
    }

    async put<T>(url: string, body?: Record<string, any>): Promise<T> {
        try {
            return await this.$fetch<T>(url, {
                method: 'PUT',
                body
            })
        } catch (error) {
            this.handleError(error)
        }
    }

    async patch<T>(url: string, body?: Record<string, any>): Promise<T> {
        try {
            return await this.$fetch<T>(url, {
                method: 'PATCH',
                body
            })
        } catch (error) {
            this.handleError(error)
        }
    }

    async delete<T>(url: string): Promise<T> {
        try {
            return await this.$fetch<T>(url, {
                method: 'DELETE'
            })
        } catch (error) {
            this.handleError(error)
        }
    }
}