<script setup lang="ts">
import { articles } from '~/data/articles';
import StoryCard from '~/components/ui/StoryCard.vue';
import ExploreMoreButton from '~/components/ui/ExploreMoreButton.vue';
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

const filteredArticles = computed(() => {
    let result = [...articles];

    if (props.display === 'carousel') {
        if (props.category) {
            result = result.filter(article => article.category === props.category);
        }

        if (props.limit > 0) {
            result = result.slice(0, props.limit);
        }

    } else {
        result = articles.filter(article => article.category === props.category).slice(0, 4);
    }

    return result;
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
        <ExploreMoreButton />
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

        @include desktop {
            margin-top: 160px;
        }
    }

    &__title {
        font-family: var(--font-display);
        font-weight: 600;

        @include mobile {
            font-size: 30px;
            line-height: 50px;
        }

        @include desktop {
            font-size: 44px;
            line-height: 58px;
        }
    }

    &__grid {
        display: grid;

        @include mobile {
            max-width: 400px;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }

        @include desktop {
            display: flex;
            gap: 30px;
        }

        &__desktop {
            @include mobile {
                display: none;
            }
        }

        &__mobile {
            @include desktop {
                display: none;
            }
        }

        &__left {
            flex-shrink: 0;
        }

        &__right {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 46px;
        }
    }

    &__flex {
        display: flex;
        overflow-x: auto;
        overscroll-behavior-x: contain;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        padding-bottom: 16px;

        @include mobile {
            gap: 20px;
        }

        @include desktop {
            gap: 29px;
            overflow-x: visible;
        }

        >* {
            scroll-snap-align: start;
            flex-shrink: 0;
        }
    }

    &__carousel {
        display: flex;
        gap: 20px;
        overflow-x: auto;
        overscroll-behavior-x: contain;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        padding-bottom: 16px;

        >* {
            scroll-snap-align: start;
            flex-shrink: 0;
        }
    }
}
</style>