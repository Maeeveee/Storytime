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

        @include desktop {
            height: vw(82);
            padding-inline: vw(110);
        }

        @include mobile {
            height: vw-mobile(70);
            padding-inline: vw-mobile(20);
        }
    }

    &__text {
        font-weight: 500;
        color: var(--color-primary);
        text-decoration: none;

        @include desktop {
            margin-right: vw(16);
            line-height: vw(26);
            font-size: vw(20);

            &:hover {
                text-decoration: underline;
                text-decoration-thickness: vw(3);
                text-underline-offset: vw(10);
            }
        }

        @include mobile {
            margin-right: vw-mobile(16);
            line-height: vw-mobile(26);
            font-size: vw-mobile(16);
        }
    }
}
</style>