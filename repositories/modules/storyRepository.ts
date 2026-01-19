import HttpFactory from '../factory'
import type {
    ApiResponse,
    PaginatedResponse,
    StoryListItem,
    StoryDetail,
    StoryParams,
    CreateStoryPayload,
    UpdateStoryPayload
} from '~/types/api'

class StoryRepository extends HttpFactory {

    async getStories(params?: StoryParams) {
        return this.get<PaginatedResponse<StoryListItem>>('/stories', params)
    }

    async getStory(slug: string) {
        return this.get<ApiResponse<StoryDetail>>(`/stories/${slug}`)
    }

    async createStory(payload: CreateStoryPayload) {
        return this.post<ApiResponse<StoryDetail>>('/stories', payload)
    }
    async updateStory(id: number | string, payload: UpdateStoryPayload) {
        return this.put<ApiResponse<StoryDetail>>(`/stories/${id}`, payload)
    }

    async deleteStory(id: number | string) {
        return this.delete<ApiResponse<null>>(`/stories/${id}`)
    }
    async uploadCover(file: File) {
        const formData = new FormData()
        formData.append('cover', file)
        
        return this.post<ApiResponse<{ url: string }>>('/stories/upload-cover', formData as any)
    }
}

export default StoryRepository