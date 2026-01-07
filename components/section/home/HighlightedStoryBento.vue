<script setup lang="ts">
import { articles } from '~/data/articles';

interface Props {
    category: string;
    title?: string;
}

const props = withDefaults(defineProps<Props>(), {
    title: ''
});

const filteredArticles = computed(() =>
    articles.filter(article => article.category === props.category).slice(0, 3));

const displayTitle = computed(() => {
    if (props.title) return props.title;
    return props.category.charAt(0).toUpperCase() + props.category.slice(1);
});
</script>

<template>
    <div class="bento__header">
        <h2 class="bento__title">{{ displayTitle }}</h2>
        <UiExploreMoreButton />
    </div>

    <UiDivider />

    <div class="bento__grid">
        <div class="bento__left">
            <UiStoryCard v-if="filteredArticles[0]" :article-item="filteredArticles[0]" variant="large" hide-category />
        </div>
        <div class="bento__right">
            <UiStoryCard v-if="filteredArticles[1]" :article-item="filteredArticles[1]" variant="small" hide-category />
            <UiStoryCard v-if="filteredArticles[2]" :article-item="filteredArticles[2]" variant="small" hide-category />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bento {
    &__header {
        margin-top: 100px;
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
</style>