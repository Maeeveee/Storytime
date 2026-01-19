<script setup lang="ts">
import StoryCard from '~/components/ui/StoryCard.vue';
import NavigationButton from '~/components/ui/NavigationButton.vue';
import type { StoryListItem } from '~/types/api';

interface Props {
    category?: string;
    title?: string;
    display: 'bento' | 'flex' | 'carousel';
    limit?: number;
}

const props = withDefaults(defineProps<Props>(), {
    category: '',
    title: '',
    display: 'flex',
    limit: 6
});

const { $api } = useNuxtApp()
const stories = ref<StoryListItem[]>([])
const isLoading = ref(false)

const fetchStories = async () => {
    isLoading.value = true
    try {
        const params: any = {
            limit: props.limit
        }

        if (props.category) {

            params.search = props.category 
        }

        const response = await $api.story.getStories(params)
        stories.value = response.data
    } catch (error) {
        console.error('Failed to fetch stories', error)
    } finally {
        isLoading.value = false
    }
}

onMounted(() => {
    fetchStories()
})


const filteredArticles = computed(() => {
    return stories.value
});

const displayTitle = computed(() => {
    if (props.title) return props.title;
    if (props.category) {
        return props.category.charAt(0).toUpperCase() + props.category.slice(1);
    }
    return 'Similar Story'
});
</script>

<template>
    <div class="display__header">
        <h2 class="display__title">{{ displayTitle }}</h2>
        <NavigationButton />
    </div>

    <UiDivider />

    <div v-if="props.display === 'bento'">
        <div class="display__grid__desktop">
            <div class="display__grid">
                <div class="display__grid__left">
                    <StoryCard v-if="filteredArticles[0]" :article-item="filteredArticles[0]" variant="large" />
                </div>
                <div class="display__grid__left">
                    <StoryCard v-if="filteredArticles[1]" :article-item="filteredArticles[1]" variant="small" />
                    <StoryCard v-if="filteredArticles[2]" :article-item="filteredArticles[2]" variant="small" />
                </div>
            </div>
        </div>

        <div class="display__grid__mobile">
            <div class="display__grid">
                <StoryCard v-if="filteredArticles[0]" :article-item="filteredArticles[0]" variant="small" />
                <StoryCard v-if="filteredArticles[1]" :article-item="filteredArticles[1]" variant="small" />
                <StoryCard v-if="filteredArticles[2]" :article-item="filteredArticles[2]" variant="small" />
                <StoryCard v-if="filteredArticles[3]" :article-item="filteredArticles[3]" variant="small" />
            </div>
        </div>
    </div>

    <div v-if="props.display === 'flex'" class="display__flex">
        <StoryCard v-if="filteredArticles[0]" :article-item="filteredArticles[0]" variant="default" />
        <StoryCard v-if="filteredArticles[1]" :article-item="filteredArticles[1]" variant="default" />
        <StoryCard v-if="filteredArticles[2]" :article-item="filteredArticles[2]" variant="default" />
    </div>

    <div v-if="props.display === 'carousel'" class="display__carousel">
        <StoryCard v-for="article in filteredArticles" :key="article.id" :article-item="article" variant="default" />
    </div>

</template>

<style lang="scss" scoped>
.display {
    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: fluid(80, 160);

        @include tablet {
            margin-top: fluid(60, 100);
        }
    }

    &__title {
        font-family: var(--font-display);
        font-weight: 600;
        font-size: fluid(30, 44);
        line-height: fluid(50, 58);
    }

    &__grid {
        display: grid;
        gap: fluid(15, 30);

        @include desktop {
            display: flex;
        }

        @include tablet {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }

        @include mobile {
            max-width: vw-mobile(400);
            grid-template-columns: 1fr 1fr;
        }

        &__desktop {
            @include mobile {
                display: none;
            }

            @include tablet {
                display: none;
            }
        }

        &__mobile {
            display: none;

            @include mobile {
                display: block;
            }

            @include tablet {
                display: block;
            }
        }

        &__left {
            flex-shrink: 0;
        }

        &__right {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: fluid(46, 46);
        }
    }

    &__flex {
        display: flex;
        overflow-x: auto;
        overscroll-behavior-x: contain;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        padding-bottom: fluid(16, 16);
        gap: fluid(20, 29);

        @include desktop {
            overflow-x: visible;
        }

        @include tablet {
            overflow-x: auto;
        }

        >* {
            scroll-snap-align: start;
            flex-shrink: 0;
        }
    }

    &__carousel {
        display: flex;
        overflow-x: auto;
        overscroll-behavior-x: contain;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        gap: fluid(20, 20);
        padding-bottom: fluid(16, 16);

        >* {
            scroll-snap-align: start;
            flex-shrink: 0;
        }
    }
}
</style>