import type { $Fetch } from 'ofetch'

export default class HttpFactory {
    private $fetch: $Fetch

    constructor(fetcher: $Fetch) {
        this.$fetch = fetcher
    }

    async get<T>(url: string, params?: Record<string, any>): Promise<T> {
        return this.$fetch<T>(url, {
            method: 'GET',
            params
        })
    }

    async post<T>(url: string, body?: Record<string, any>): Promise<T> {
        return this.$fetch<T>(url, {
            method: 'POST',
            body
        })
    }

    async put<T>(url: string, body?: Record<string, any>): Promise<T> {
        return this.$fetch<T>(url, {
            method: 'PUT',
            body
        })
    }

    async patch<T>(url: string, body?: Record<string, any>): Promise<T> {
        return this.$fetch<T>(url, {
            method: 'PATCH',
            body
        })
    }

    async delete<T>(url: string): Promise<T> {
        return this.$fetch<T>(url, {
            method: 'DELETE'
        })
    }


}