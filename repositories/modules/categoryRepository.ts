import HttpFactory from '../factory'
import type { ApiResponse, Category } from '~/types/api'

class CategoryRepository extends HttpFactory {

    async getCategories() {
        return this.get<ApiResponse<Category[]>>('/categories')
    }
}

export default CategoryRepository