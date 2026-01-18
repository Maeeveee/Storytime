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
        font-family: "Playfair Display", serif;
        font-weight: 600;
        font-size: fluid(30, 44);
        line-height: fluid(50, 58);
        margin-top: fluid(100, 100);

        @include tablet {
            margin-top: fluid(60, 80);
        }
    }

    &__display {
        grid-template-columns: 1fr 1fr;
        gap: fluid(8, 8);

        @include desktop {
            display: flex;
        }

        @include tablet {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }

        @include mobile {
            display: grid;
        }
    }
}

hr {
    border: none;
    border-top: 1px solid #ccc;
    margin-top: fluid(16, 16);
    margin-bottom: fluid(16, 16);
}
</style>