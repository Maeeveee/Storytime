<script setup lang="ts">
import { articles } from '~/data/articles';

const comedyArticles = computed(() =>
    articles.filter(article => article.category === 'comedy').slice(0, 3));
</script>

<template>
    <div class="bento__header">
        <h2 class="bento__title">Comedy</h2>
        <UiExploreMoreButton />
    </div>

    <UiDivider />

    <div class="bento__grid">
        <div class="bento__left">
            <UiStoryCard v-if="comedyArticles[0]" :article-item="comedyArticles[0]" variant="large" hide-category />
        </div>
        <div class="bento__right">
            <UiStoryCard v-if="comedyArticles[1]" :article-item="comedyArticles[1]" variant="small" hide-category/>
            <UiStoryCard v-if="comedyArticles[2]" :article-item="comedyArticles[2]" variant="small" hide-category/>
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

    &__grid{
        display: flex;
        gap: 30px;
    }

    &__left{
        flex-shrink: 0;
    }

    &__right{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 46px;
    }
}

</style>