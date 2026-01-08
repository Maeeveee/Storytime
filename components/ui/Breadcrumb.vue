<script setup lang="ts">
import { articles } from '~/data/articles';


const route = useRoute();
const id = route.params.id;

const article = computed(() => {
    return articles.find(article => article.id === Number(id));
});
</script>

<template>
    <div class="breadcrumb__wrapper">
        <NuxtLink to="/" class="breadcrumb__text">Home</NuxtLink> <span class="breadcrumb__text">/</span>
        <NuxtLink to="#" class="breadcrumb__text">{{ article?.title || "All Story" }}</NuxtLink>
    </div>
</template>

<style scoped lang="scss">
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
</style>