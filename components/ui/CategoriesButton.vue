<script setup lang="ts">
defineProps<{ category?: string }>();
</script>

<template>
    <div class="categories">
        <NuxtLink to="/story/" class="categories__button">{{ category }}</NuxtLink>
    </div>
</template>

<style lang="scss" scoped>
.categories {
    &__button {
        color: var(--color-primary);
        background-color: var(--color-primary-light);
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        font-weight: 500;
        border-radius: fluid(12, 12);
        font-size: fluid(28, 28);
        width: fluid(135, 135);
        height: fluid(38, 38);
        padding: fluid(40, 60);
        margin: auto;

        @include tablet {
            font-size: fluid(20, 24);
            padding: fluid(30, 40);
        }

        &:hover {
            background-color: #D9E6D3;
            color: var(--color-text);
            cursor: pointer;
        }
    }
}
</style>