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
        font-weight: 500;

        @include desktop {
            font-size: vw(28);
            width: vw(135);
            height: vw(38);
            padding: vw(60);
        }

        @include mobile {
            font-size: vw-mobile(28);
            padding-inline: vw-mobile(20);
            padding-block: vw-mobile(40);
        }

        &:hover {
            background-color: #D9E6D3;
            color: var(--color-text);
            cursor: pointer;
        }
    }
}
</style>