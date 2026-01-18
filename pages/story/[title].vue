<script setup lang="ts">
import { articles } from '~/data/articles';
import StorySection from '~/components/section/story-detail/StorySection.vue';
import DisplayStory from '~/components/section/home/DisplayStory.vue';
const route = useRoute();
const title = route.params.title;

const article = computed(() => {
    return articles.find(article => article.title === title);
});
</script>

<template>
    <ClientOnly>
        <main>
            <UiBreadcrumb class="story-detail__breadcrumb" :title="article?.title" />
            <div class="story-detail__container">
                <div class="story-detail__header">
                    <div class="story-detail__header__sub">
                        <h4 class="story-detail__date">{{ article?.createdDate }}</h4>
                        <span class="story-detail__genre-badge">{{ article?.category }}</span>
                    </div>
                    <h1 class="story-detail__title">{{ article?.title }}</h1>
                    <div class="story-detail__author-info">
                        <img :src="article?.authorAvatar" alt="author avatar" class="story-detail__author-avatar">
                        <span class="story-detail__author-name">{{ article?.authorName }}</span>
                    </div>
                </div>
                <StorySection v-if="article" :article-item="article" class="story-detail__story-content" />
                <DisplayStory :category="article?.category" display="flex" title="Similar Story" />
            </div>
        </main>
    </ClientOnly>
</template>

<style scoped lang="scss">
.story-detail {
    &__container {
        margin: auto;
        max-width: fluid(375, 1700);
        padding-inline: fluid(16, 40);
    }

    &__story-content {
        margin-bottom: fluid(60, 60);
    }

    &__breadcrumb {
        margin-top: fluid(20, 100);

        @include tablet {
            margin-top: fluid(40, 80);
        }
    }

    &__header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: fluid(30, 30);
        gap: fluid(20, 50);
        margin-bottom: fluid(30, 30);

        @include tablet {
            gap: fluid(15, 30);
        }

        &__sub {
            display: flex;
            align-items: center;
            gap: fluid(20, 20);
        }
    }

    &__date {
        font-weight: 400;
        color: var(--color-text-secondary);
        font-size: fluid(12, 24);
        line-height: fluid(26, 32);
    }

    &__title {
        font-family: var(--font-display);
        font-weight: 700;
        color: var(--color-text);
        font-size: fluid(24, 60);
        line-height: fluid(30, 74);

        @include tablet {
            text-align: center;
            font-size: fluid(28, 44);
        }

        @include mobile {
            text-align: center;
        }
    }

    &__author-info {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: fluid(10, 10);
    }

    &__author-name {
        font-weight: 500;
        font-size: fluid(16, 20);
        line-height: fluid(20, 26);
    }

    &__author-avatar {
        border-radius: 50%;
        height: fluid(30, 50);
        width: fluid(30, 50);

        @include tablet {
            height: 40px;
            width: 40px;
        }
    }

    &__carousel-width {
        margin: auto;
        max-width: fluid(375, 1700);
    }

    &__genre-badge {
        background-color: var(--color-primary-light);
        display: inline-block;
        font-weight: 400;
        color: var(--color-primary);
        border-radius: fluid(8, 8);
        padding: fluid(4, 8) fluid(8, 12);
        font-size: fluid(12, 18);
        line-height: fluid(23, 23);
    }
}
</style>