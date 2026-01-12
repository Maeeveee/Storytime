<script setup lang="ts">
import type { Article } from '~/types/article';
defineProps<{ articleItem: Article; }>()
</script>

<template>
    <section class="container">
        <div class="story-section__content-wrapper">
            <div class="story-section__image-wrapper">
                <img :src="articleItem.image" :alt="articleItem.title" class="story-section__image">
            </div>
            <div class="story-section__content-wrapper">
                <article class="story-section__article-text">
                    {{ articleItem.shortContent }}
                </article>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@media screen and (max-width: 768px) {
    .story-section {
        &__content-wrapper {
            padding-left: 16px;
            padding-right: 16px;
            gap: 40px;
            display: flex;
            flex-direction: column;
        }

        &__image {
            width: 310px;
            height: 350px;
            border-radius: 8px;
        }

        &__article-text {
            font-size: 18px;
            font-weight: 400;
            line-height: 27px;
            color: var(--color-text);
            text-align: justify;
        }
    }
}

@media screen and (min-width: 768px) {
    .story-section {
        &__content-wrapper {
            padding-left: 16px;
            padding-right: 16px;
            gap: 40px;
            display: flex;
        }

        &__image {
            width: 547px;
            height: 600px;
            border-radius: 8px;
        }

        &__article-text {
            font-size: 18px;
            font-weight: 400;
            line-height: 27px;
            color: var(--color-text);
        }
    }
}
</style>