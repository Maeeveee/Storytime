import HttpFactory from './factory'
import type { ApiResponse, Category } from '~/types/api'

class CategoryRepository {
    private http: HttpFactory

    constructor(http: HttpFactory) {
        this.http = http
    }

    async getCategories() {
        return this.http.get<ApiResponse<Category[]>>('/categories')
    }
}

export default CategoryRepository