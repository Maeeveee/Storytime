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

        @include mobile {
            height: 70px;
            padding-inline: 20px;
        }

        @include desktop {
            height: 82px;
            padding-inline: 110px;
        }
    }

    &__text {
        font-weight: 500;
        line-height: 26px;
        color: var(--color-primary);
        text-decoration: none;
        margin-right: 16px;

        @include mobile {
            font-size: 12px;
        }

        @include desktop {
            font-size: 20px;
        }
    }
}
</style>