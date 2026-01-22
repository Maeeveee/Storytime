import { defineStore } from 'pinia'
import type { StoryListItem, StoryDetail, Category, StoryParams } from '~/types/api'

export const useStoryStore = defineStore('story', () => {
    const { $api } = useNuxtApp()

    const stories = ref<StoryListItem[]>([])
    const currentStory = ref<StoryDetail | null>(null)
    const categories = ref<Category[]>([])
    const isLoading = ref(false)
    const pagination = ref({
        currentPage: 1,
        lastPage: 1,
        total: 0,
        perPage: 10
    })

    const hasStories = computed(() => stories.value.length > 0)
    const hasMorePages = computed(() => pagination.value.currentPage < pagination.value.lastPage)

    async function fetchStories(params?: StoryParams) {
        isLoading.value = true
        try {
            const response = await $api.story.getStories(params)
            stories.value = response.data
            if (response.meta) {
                pagination.value = {
                    currentPage: response.meta.current_page,
                    lastPage: response.meta.last_page,
                    total: response.meta.total,
                    perPage: response.meta.per_page
                }
            }
        } catch (error) {
            console.error('Failed to fetch stories:', error)
            throw error
        } finally {
            isLoading.value = false
        }
    }

    async function fetchStoryBySlug(slug: string) {
        isLoading.value = true
        try {
            const response = await $api.story.getStory(slug)
            currentStory.value = response.data
            return response.data
        } catch (error) {
            console.error('Failed to fetch story:', error)
            throw error
        } finally {
            isLoading.value = false
        }
    }

    async function fetchCategories() {
        try {
            const response = await $api.category.getCategories()
            categories.value = response.data
        } catch (error) {
            console.error('Failed to fetch categories:', error)
            throw error
        }
    }

    function clearCurrentStory() {
        currentStory.value = null
    }

    function clearStories() {
        stories.value = []
        pagination.value = {
            currentPage: 1,
            lastPage: 1,
            total: 0,
            perPage: 10
        }
    }

    return {
        stories,
        currentStory,
        categories,
        isLoading,
        pagination,
        hasStories,
        hasMorePages,
        fetchStories,
        fetchStoryBySlug,
        fetchCategories,
        clearCurrentStory,
        clearStories
    }
})