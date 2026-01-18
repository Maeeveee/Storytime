<script setup lang="ts">
defineProps<{ title?: string }>();
</script>

<template>
    <div class="breadcrumb__wrapper">
        <NuxtLink to="/" class="breadcrumb__text">Home</NuxtLink> <span class="breadcrumb__text">/</span>
        <NuxtLink to="#" class="breadcrumb__text">{{ title || "All Story" }}</NuxtLink>
    </div>
</template>

<style scoped lang="scss">
.breadcrumb {
    &__wrapper {
        background-color: var(--color-primary-light);
        display: flex;
        align-items: center;
        height: fluid(70, 82);
        padding-inline: fluid(20, 110);

        @include tablet {
            padding-inline: fluid(20, 40);
        }
    }

    &__text {
        font-weight: 500;
        color: var(--color-primary);
        text-decoration: none;
        margin-right: fluid(16, 16);
        line-height: fluid(26, 26);
        font-size: fluid(16, 20);

        &:hover {
            text-decoration: underline;
            text-decoration-thickness: fluid(3, 3);
            text-underline-offset: fluid(10, 10);
        }
    }
}
</style>