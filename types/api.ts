export interface ApiResponse<T> {
    message: string | null
    data: T
    meta: number | null
}

export interface PaginatedResponse<T> {
    message?: string | null
    data: T[]
    meta: PaginationMeta
}

export interface PaginationMeta {
    current_page: number
    last_page: number
    total: number
    per_page: number
}

export interface LoginPayload {
    email: string
    password: string
}

export interface RegisterPayload {
    name: string
    email: string
    password: string
    password_confirmation: string
}

export interface AuthResponse {
    user: User
    token: string
}

export interface User {
    id: number
    name: string
    email: string
    profile_image: string | null
    about: string | null
    created_at: string
    updated_at: string
}

export interface Author {
    id: number | string
    name: string
    profile_image: string | null
}

export interface UpdateProfilePayload {
    name?: string
    about?: string
}

export interface ChangePasswordPayload {
    old_password: string
    new_password: string
    new_password_confirmation: string
}

export interface StoryListItem {
    id: number | string
    slug: string
    title: string
    cover_image: string
    created_at: string
    content_preview: string
    author: Author
    category: Category
}

export interface StoryDetail {
    id: number
    title: string
    slug: string
    content: string
    cover_image: string
    created_at: string
    updated_at: string
    author: Author
    category: Category
}

export interface StoryParams {
    page?: number
    limit?: number
    category_id?: number
    search?: string
}

export interface CreateStoryPayload {
    title: string
    content: string
    category_id: number
}

export interface UpdateStoryPayload {
    title?: string
    content?: string
    category_id?: number
    cover_image?: string
}

export interface UploadCoverPayload {
    cover: File
}

export interface Category {
    id: number | string
    name: string
    slug: string
    created_at?: string
    updated_at?: string
}