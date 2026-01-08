<script setup lang="ts">
import CategoriesButton from '~/components/ui/CategoriesButton.vue';
</script>

<template>
    <div class="more-categories__title">
        More Categories
    </div>

    <UiDivider />

    <div class="more-categories__display">
        <CategoriesButton category="Adventure" />
        <CategoriesButton category="Fiction" />
        <CategoriesButton category="Fantasy" />
        <CategoriesButton category="Drama" />
        <CategoriesButton category="Heartfelt" />
        <CategoriesButton category="Mystery" />
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