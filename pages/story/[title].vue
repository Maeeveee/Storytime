<script setup lang="ts">
import { articles } from '~/data/articles';
import StorySection from '~/components/section/storyDetail/storySection.vue';
import DisplayStory from '~/components/section/home/DisplayStory.vue';
const route = useRoute();
const title = route.params.title;

const article = computed(() => {
    return articles.find(article => article.title === title);
});
</script>

<template>
    <main>
        <UiBreadcrumb class="story-detail__breadcrumb" :title="article?.title" />
        <div class="story-detail__container">
            <div class="story-detail__header">
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
            </div>
            <StorySection v-if="article" :article-item="article" />
            <DisplayStory :category="article?.category" display="flex" title="Similar Story" />
        </div>
    </main>
</template>

<style scoped lang="scss">
.story-detail {
    &__container {
        max-width: 1700px;
        margin: auto;
    }

    &__breadcrumb {
        margin-top: 100px;
    }

    &__header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
        gap: 50px;
        margin-bottom: 30px;

        &__sub {
            display: flex;
            gap: 20px;
        }
    }

    &__date {
        font-weight: 400;
        font-size: 24px;
        line-height: 32px;
        color: var(--color-text-secondary);
    }

    &__title {
        font-family: var(--font-display);
        font-weight: 700;
        font-size: 60px;
        line-height: 74px;
        color: var(--color-text);
    }

    &__author-info {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    &__author-name {
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
    }

    &__author-avatar {
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }

    &__carousel-width {
        max-width: 1700px;
        margin: auto;
    }

    &__genre-badge {
        background-color: #F0F5ED;
        border-radius: 8px;
        padding: 8px 12px;
        display: inline-block;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: #466543;
    }
}
</style>