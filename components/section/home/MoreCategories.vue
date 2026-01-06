<script setup lang="ts">
import CategoriesButton from '~/components/ui/CategoriesButton.vue';
</script>

<template>
    <div class="more-categories__title">
        More Categories
    </div>

    <hr>

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
        font-family: "Playfair Display", serif;
        font-size: xx-large;
        font-weight: bold;
    }

    &__display {
        display: flex;
        gap: 1rem;
    }
}

hr {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    border: none;
    border-top: 1px solid #ccc;
}
</style>