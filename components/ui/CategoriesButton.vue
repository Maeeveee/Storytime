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
        border-radius: 12px;
        text-decoration: none;
        font-size: 28px;
        font-weight: 500;

        @include mobile {
            padding-inline: 20px;
            padding-block: 40px;
        }

        @include desktop {
            width: 135px;
            height: 38px;
            padding: 60px;
        }

        &:hover {
            background-color: #D9E6D3;
            color: var(--color-text);
            cursor: pointer;
        }
    }
}
</style>