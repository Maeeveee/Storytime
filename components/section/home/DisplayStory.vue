<script setup lang="ts">
import StoryCard from '~/components/ui/StoryCard.vue';
import StoryCardSkeleton from '~/components/ui/skeleton/StoryCardSkeleton.vue';
import NavigationButton from '~/components/ui/NavigationButton.vue';
import Divider from '~/components/ui/Divider.vue';
import type { StoryListItem } from '~/types/api';
import 'vue3-carousel/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

const carouselConfig = {
    itemsToShow: 3,
    wrapAround: true
}
interface Props {
    category?: string;
    title?: string;
    display?: 'bento' | 'flex' | 'carousel' | 'similar';
    limit?: number;
}

const props = withDefaults(defineProps<Props>(), {
    category: '',
    title: '',
    display: 'flex',
    limit: 6,
});

const route = useRoute();
const slug = computed(() => route.params.title as string)
const { $api } = useNuxtApp()
const stories = ref<StoryListItem[]>([])
const similarStories = ref<StoryListItem[]>([])
const isLoading = ref(true)

const fetchStories = async () => {
    isLoading.value = true
    try {
        const params: Record<string, string | number> = {
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

const fetchSimilarStory = async () => {
    isLoading.value = true
    if (!slug.value) return
    try {
        const response = await $api.story.getSimilarStory(slug.value)
        similarStories.value = response.data
    } catch (error) {
        console.error('Failed to fetch similar stories', error)
    } finally {
        isLoading.value = false
    }
}

onMounted(() => {
    if (props.display === 'similar') {
        fetchSimilarStory()
    } else {
        fetchStories()
    }
})

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

    <Divider />

    <div v-if="props.display === 'bento'">
        <div class="display__grid__desktop">
            <div v-if="isLoading" class="display__grid">
                <div class="display__grid__left">
                    <StoryCardSkeleton variant="large" />
                </div>
                <div class="display__grid__right">
                    <StoryCardSkeleton variant="small" />
                    <StoryCardSkeleton variant="small" />
                </div>
            </div>

            <div v-else class="display__grid">
                <div class="display__grid__left">
                    <StoryCard v-if="stories[0]" :article-item="stories[0]" variant="large" />
                </div>
                <div class="display__grid__right">
                    <StoryCard v-if="stories[1]" :article-item="stories[1]" variant="small" />
                    <StoryCard v-if="stories[2]" :article-item="stories[2]" variant="small" />
                </div>
            </div>
        </div>

        <div class="display__grid__mobile">
            <div v-if="isLoading" class="display__grid">
                <StoryCardSkeleton variant="small" />
                <StoryCardSkeleton variant="small" />
                <StoryCardSkeleton variant="small" />
                <StoryCardSkeleton variant="small" />
            </div>

            <div v-else class="display__grid">
                <StoryCard v-if="stories[0]" :article-item="stories[0]" variant="small" />
                <StoryCard v-if="stories[1]" :article-item="stories[1]" variant="small" />
                <StoryCard v-if="stories[2]" :article-item="stories[2]" variant="small" />
                <StoryCard v-if="stories[3]" :article-item="stories[3]" variant="small" />
            </div>
        </div>
    </div>

    <div v-if="props.display === 'flex'">
        <div v-if="isLoading" class="display__flex">
            <StoryCardSkeleton variant="small" />
            <StoryCardSkeleton variant="small" />
            <StoryCardSkeleton variant="small" />
        </div>
        <div v-else class="display__flex">
            <StoryCard v-if="stories[0]" :article-item="stories[0]" variant="small" />
            <StoryCard v-if="stories[1]" :article-item="stories[1]" variant="small" />
            <StoryCard v-if="stories[2]" :article-item="stories[2]" variant="small" />
        </div>
    </div>

    <div v-if="props.display === 'similar'" class="display__flex">
        <div v-if="isLoading" class="display__flex">
            <StoryCardSkeleton variant="small" />
            <StoryCardSkeleton variant="small" />
            <StoryCardSkeleton variant="small" />
        </div>
        <StoryCard v-else v-for="article in similarStories" :key="article.id" :article-item="article"
            variant="small" />
    </div>

    <div v-if="props.display === 'carousel'">
        <div v-if="isLoading" class="display__flex">
            <StoryCardSkeleton variant="default" />
            <StoryCardSkeleton variant="default" />
            <StoryCardSkeleton variant="default" />
        </div>
        <Carousel v-else v-bind="carouselConfig" :autoplay="2000" breakpoint-mode="carousel" :breakpoints="{
            100: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            300: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            900: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
            1440: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
        }">
            <Slide v-for="story in stories" :key="story.id">
                <StoryCard :article-item="story" variant="default" />
            </Slide>
        </Carousel>
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
            grid-template-columns: repeat(2, 1fr);
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