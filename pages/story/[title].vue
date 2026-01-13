<script setup lang="ts">
import { articles } from '~/data/articles';
import StorySection from '~/components/section/storyDetail/StorySection.vue';
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
</template>

<style scoped lang="scss">
.story-detail {
    &__container {
        max-width: 1700px;
        margin: auto;

        @include mobile {
            padding-inline: 8px;
        }
    }

    &__story-content {
        margin-bottom: 60px;
    }

    &__breadcrumb {
        @include desktop {
            margin-top: 100px;
        }
    }

    &__header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @include mobile {
            margin-block: 30px;
            gap: 20px;
        }

        @include desktop {
            margin-top: 30px;
            gap: 50px;
            margin-bottom: 30px;
        }

        &__sub {
            display: flex;
            align-items: center;
            gap: 20px;
        }
    }

    &__date {
        font-weight: 400;
        color: var(--color-text-secondary);

        @include mobile {
            font-size: 12px;
            line-height: 26px;
        }

        @include desktop {
            font-size: 24px;
            line-height: 32px;
        }
    }

    &__title {
        font-family: var(--font-display);
        font-weight: 700;
        color: var(--color-text);

        @include mobile {
            font-size: 24px;
            line-height: 30px;
            text-align: center;
        }

        @include desktop {
            font-size: 60px;
            line-height: 74px;
        }
    }

    &__author-info {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    &__author-name {
        font-weight: 500;

        @include mobile {
            font-size: 16px;
            line-height: 20px;
        }

        @include desktop {
            font-size: 20px;
            line-height: 26px;
        }
    }

    &__author-avatar {
        border-radius: 50%;

        @include mobile {
            height: 30px;
            width: 30px;
        }

        @include desktop {
            height: 50px;
            width: 50px;
        }
    }

    &__carousel-width {
        max-width: 1700px;
        margin: auto;
    }

    &__genre-badge {
        background-color: var(--color-primary-light);
        border-radius: 8px;
        display: inline-block;
        font-weight: 400;
        color: var(--color-primary);

        @include mobile {
            padding: 4px 8px;
            font-size: 12px;
            line-height: 23px;
        }

        @include desktop {
            padding: 8px 12px;
            font-size: 18px;
            line-height: 23px;
        }
    }
}
</style>