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

        @include desktop {
            font-size: vw(44);
            line-height: vw(58);
            margin-top: vw(100);
        }

        @include mobile {
            font-size: vw-mobile(30);
            line-height: vw-mobile(50);
            margin-top: vw-mobile(100);
        }
    }

    &__display {
        grid-template-columns: 1fr 1fr;
        
        @include desktop {
            display: flex;
            gap: vw(8);
        }
        
        @include mobile {
            display: grid;
            gap: vw-mobile(8);
        }
    }
}

hr {
    border: none;
    border-top: 1px solid #ccc;
    margin-top: 2rem;
    margin-bottom: 2rem;
}
</style>