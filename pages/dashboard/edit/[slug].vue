<script setup lang="ts">
import Form from '~/components/section/story/Form.vue';
import type { StoryDetail } from '~/types/api';

definePageMeta({
    middleware: 'auth'
})

const route = useRoute()
const { $api } = useNuxtApp()

const slug = route.params.slug as string
const story = ref<StoryDetail | null>(null)
const isLoading = ref(true)

const fetchStory = async () => {
    try {
        const response = await $api.story.getStory(slug)
        story.value = response.data
    } catch (error) {
        console.error('Failed to fetch story', error)
        navigateTo('/dashboard')
    } finally {
        isLoading.value = false
    }
}

onMounted(() => {
    fetchStory()
})
</script>
<template>
    <div v-if="isLoading" class="loading">
        <p>Loading story...</p>
    </div>
    <Form v-else-if="story" title="edit" :story="story" />
</template>
<style scoped lang="scss">
.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
    font-size: fluid(18, 24);
    color: var(--color-text-secondary);
}
</style>
