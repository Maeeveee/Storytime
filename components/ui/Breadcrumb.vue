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
@media screen and (max-width: 768px) {
    .breadcrumb {
        &__wrapper {
            height: 70px;
            background-color: var(--color-primary-light);
            display: flex;
            align-items: center;
            padding-inline: 20px;
        }

        &__text {
            font-weight: 500;
            font-size: 12px;
            line-height: 26px;
            color: var(--color-primary);
            text-decoration: none;
            margin-right: 16px;
        }
    }
}

@media screen and (min-width: 768px) {
    .breadcrumb {
        &__wrapper {
            height: 82px;
            background-color: var(--color-primary-light);
            display: flex;
            align-items: center;
            padding-inline: 110px;
        }

        &__text {
            font-weight: 500;
            font-size: 20px;
            line-height: 26px;
            color: var(--color-primary);
            text-decoration: none;
            margin-right: 16px;
        }
    }
}
</style>