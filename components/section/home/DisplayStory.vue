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
        result = articles.filter(article => article.category === props.category).slice(0, 3);
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

    <div v-if="props.display === 'bento'" class="display__grid">
        <div class="display__grid__left">
            <StoryCard v-if="filteredArticles[0]" :article-item="filteredArticles[0]" variant="large" />
        </div>
        <div class="display__grid__right">
            <StoryCard v-if="filteredArticles[1]" :article-item="filteredArticles[1]" variant="small" />
            <StoryCard v-if="filteredArticles[2]" :article-item="filteredArticles[2]" variant="small" />
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
        margin-top: 160px;
        display: flex;
        justify-content: space-between;
    }

    &__title {
        font-family: "Playfair Display", serif;
        font-size: 44px;
        font-weight: 600;
        line-height: 58px;
    }

    &__grid {
        display: flex;
        gap: 30px;

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
        gap: 29px;
    }


    &__carousel {
        display: flex;
        gap: 20px;

        overflow-x: auto;
        overscroll-behavior-x: contain;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;

        padding-bottom: 16px;

        > * {
            scroll-snap-align: start;
            flex-shrink: 0;
        }

    }

}
</style>