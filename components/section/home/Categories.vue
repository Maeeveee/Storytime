<script setup lang="ts">
import { articles } from '~/data/articles';
import CategoriesButton from '~/components/ui/CategoriesButton.vue';

const categories = computed(() => {
    const uniqueCategories = Array.from(new Set(articles.map(article => article.category)));
    return uniqueCategories.map(category => ({ category }));
})

</script>

<template>
    <div class="more-categories__title">
        More Categories
    </div>

    <UiDivider />

    <div class="more-categories__display">
        <div v-for="category in categories" :key="category.category">
            <CategoriesButton :category="category.category" />
        </div>
    </div>

</template>

<style lang="scss" scoped>
.more-categories {
    &__title {
        margin-top: 100px;
        font-family: "Playfair Display", serif;
        font-size: 44px;
        font-weight: 600;
        line-height: 58px;
    }

    &__display {
        display: flex;
        gap: 8px;
    }
}

hr {
    margin-top: 2rem;
    margin-bottom: 2rem;
    border: none;
    border-top: 1px solid #ccc;
}
</style>