<script setup lang="ts">
import StoryCard from '~/components/ui/StoryCard.vue';
import Button from '~/components/ui/Button.vue';
import type { StoryListItem } from '~/types/api';

interface Props {
    category?: string;
    title?: string;
    hideCategory?: boolean;
    limit?: number;
}

const { $api } = useNuxtApp()
const stories = ref<StoryListItem[]>([])
const isLoading = ref(true)

const props = withDefaults(defineProps<Props>(), {
    category: '',
    title: '',
    hideCategory: false,
    limit: 4
})

const fetchStories = async () => {
    try {
        isLoading.value = true
        const params: Record<string, string | number> = {
            limit: props.limit
        }

        if (props.category) {
            params.search = props.category
        }

        const response = await $api.story.getMyStories(params)
        stories.value = response.data
    } catch (error) {
        console.error('failed to fetch stories', error)
    } finally {
        isLoading.value = false
    }
}

onMounted(() => {
    fetchStories()
})


const hasStories = computed(() => stories.value.length > 0)
</script>

<template>
    <section class="my-story">
        <h2 class="my-story__title">My Story</h2>

        <div class="my-story__content-wrapper">
            <div class="my-story__write-content">
                <div class="my-story__write-width">
                    <h2 class="my-story__title">Write your story</h2>
                    <p class="my-story__quote">Share your unique voice with the world – start writing your story today!
                    </p>
                    <Button to="/dashboard/create" variant="primary">Write Story</Button>
                </div>
            </div>
            
            <template v-if="isLoading">
                <div class="my-story__loading">Loading stories...</div>
            </template>
            <template v-else-if="hasStories">
                <div class="my-story__content-grid">
                    <div v-for="article in stories" :key="article.id">
                        <StoryCard :article-item="article" :hide-category="hideCategory" variant="small" :is-edit="true" />
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="my-story__no-story-wrapper">
                    <div class="my-story__no-story-header">
                        <h1 class="my-story__no-story-title">No Stories Yet</h1>
                        <h4 class="my-story__no-story-text">You haven't shared any stories yet. Start your journey today!</h4>
                    </div>
                    <img src="/img/NoStoryImage.webp" alt="no story yet" class="my-story__no-story-image" />
                </div>
            </template>
        </div>
    </section>
</template>
<style scoped lang="scss">
.my-story {
    margin-block: fluid(30, 65) fluid(30, 40);
    margin-inline: auto;
    padding-inline: fluid(20, 40);
    max-width: fluid(375, 1700);

    &__write-content {
        border: 1px solid var(--color-border);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: fluid(8, 8);
        width: fluid(200, 546);
        height: fluid(50, 250);
        padding: fluid(80, 80) fluid(77, 77) fluid(70, 110) fluid(78, 78);

        @include desktop {
            position: sticky;
            top: vw(120);
        }

        @include tablet {
            width: 100%;
            height: auto;
            padding: fluid(40, 60);
        }
    }

    &__write-width {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        max-width: fluid(300, 390);

        @include tablet {
            max-width: 100%;
        }
    }

    &__title {
        font-weight: 700;
        color: var(--color-text);
        font-size: fluid(24, 36);
        line-height: fluid(20, 46);
    }

    &__quote {
        font-weight: 400;
        color: var(--color-text);
        font-size: fluid(14, 18);
        line-height: fluid(20, 27);
        margin-bottom: fluid(10, 30);
        margin-top: fluid(20, 20);
    }

    &__content-wrapper {
        display: flex;
        gap: fluid(30, 30);
        margin-top: fluid(30, 99);

        @include tablet {
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        @include mobile {
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

    &__content-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: fluid(29, 29);

        @include tablet {
            grid-template-columns: repeat(2, 1fr);
            width: 100%;
        }

        @include mobile {
            grid-template-columns: 1fr;
        }
    }

    &__no-story-wrapper {
        display: flex;
        flex-direction: column;
        gap: fluid(20, 20);

        @include desktop {
            align-items: center;
            margin-left: vw(200);
        }

        @include tablet {
            align-items: center;
            margin-left: 0;
        }
    }

    &__no-story-header {
        text-align: center;
        margin-bottom: fluid(30, 60);
    }

    &__no-story-image {
        width: fluid(529, 529);
        height: fluid(546, 546);

        @include tablet {
            width: 100%;
            max-width: 400px;
            height: auto;
        }

        @include mobile {
            display: none;
        }
    }

    &__no-story-title {
        font-family: var(--font-display);
        font-weight: 600;
        color: var(--color-text);
        font-size: fluid(22, 44);
        line-height: fluid(29, 58);
        margin-bottom: fluid(30, 30);
    }

    &__no-story-text {
        font-weight: 400;
        color: var(--color-text);
        font-size: fluid(16, 24);
        line-height: fluid(18, 32);
    }
}
</style>