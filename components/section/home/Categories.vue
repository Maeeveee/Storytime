<script setup lang="ts">
import CategoriesButton from '~/components/ui/CategoriesButton.vue';
import CategoriesSkeleton from '~/components/ui/skeleton/CategoriesSkeleton.vue';
import Divider from '~/components/ui/Divider.vue';

const storyStore = useStoryStore()
</script>

<template>
    <div class="more-categories__title">
        More Categories
    </div>

    <Divider />

    <div class="more-categories__display">
        <div v-if="storyStore.isLoading" v-for="i in 6">
            <CategoriesSkeleton />
        </div>

        <div v-else v-for="category in storyStore.categories.values()" :key="category.id">
            <CategoriesButton :category="category.name" :category-id="category.id" />
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
            display: grid;
            grid-template-columns: repeat(7, 1fr);
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