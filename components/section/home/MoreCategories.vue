<script setup lang="ts">
import CategoriesButton from '~/components/ui/CategoriesButton.vue';
</script>

<template>
    <div class="title">
        More Categories
    </div>

    <hr>

    <div class="CategoriesDisplay">
        <CategoriesButton category="Adventure" />
        <CategoriesButton category="Fiction" />
        <CategoriesButton category="Fantasy" />
        <CategoriesButton category="Drama" />
        <CategoriesButton category="Heartfelt" />
        <CategoriesButton category="Mystery" />
    </div>

</template>

<style>
.title {
    font-size: xx-large;
    font-weight: bold;
}

hr {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    border: none;
    border-top: 1px solid #ccc;
}

.CategoriesDisplay {
    display: flex;
    gap: 1rem;
}
</style>