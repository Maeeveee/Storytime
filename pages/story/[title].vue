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

        @include desktop {
            max-width: vw(1700);

        }

        @include mobile {
            max-width: vw-mobile(1700);
            padding-inline: vw-mobile(8);
        }
    }

    &__story-content {
        @include desktop {
            margin-bottom: vw(60);
        }

        @include mobile {
            margin-bottom: vw-mobile(60);
        }

    }

    &__breadcrumb {
        @include desktop {
            margin-top: vw(100);
        }
    }

    &__header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @include desktop {
            margin-top: vw(30);
            gap: vw(50);
            margin-bottom: vw(30);
        }

        @include mobile {
            margin-block: vw-mobile(30);
            gap: vw-mobile(20);
        }

        &__sub {
            display: flex;
            align-items: center;

            @include desktop {
                gap: vw(20);
            }

            @include mobile {
                gap: vw-mobile(20);
            }
        }
    }

    &__date {
        font-weight: 400;
        color: var(--color-text-secondary);

        @include desktop {
            font-size: vw(24);
            line-height: vw(32);
        }

        @include mobile {
            font-size: vw-mobile(12);
            line-height: vw-mobile(26);
        }
    }

    &__title {
        font-family: var(--font-display);
        font-weight: 700;
        color: var(--color-text);

        @include desktop {
            font-size: vw(60);
            line-height: vw(74);
        }

        @include mobile {
            font-size: vw-mobile(24);
            line-height: vw-mobile(30);
            text-align: center;
        }
    }

    &__author-info {
        display: flex;
        align-items: center;
        justify-content: center;

        @include desktop {
            gap: vw(10);
        }

        @include mobile {
            gap: vw-mobile(10);
        }
    }

    &__author-name {
        font-weight: 500;

        @include desktop {
            font-size: vw(20);
            line-height: vw(26);
        }

        @include mobile {
            font-size: vw-mobile(16);
            line-height: vw-mobile(20);
        }
    }

    &__author-avatar {
        border-radius: 50%;

        @include desktop {
            height: vw(50);
            width: vw(50);
        }

        @include mobile {
            height: vw-mobile(30);
            width: vw-mobile(30);
        }
    }

    &__carousel-width {
        margin: auto;

        @include desktop {
            max-width: vw(1700);
        }

        @include mobile {
            max-width: vw-mobile(1700);
        }
    }

    &__genre-badge {
        background-color: var(--color-primary-light);
        border-radius: 8px;
        display: inline-block;
        font-weight: 400;
        color: var(--color-primary);

        @include desktop {
            padding: vw(8) vw(12);
            font-size: vw(18);
            line-height: vw(23);
        }

        @include mobile {
            padding: vw-mobile(4) vw-mobile(8);
            font-size: vw-mobile(12);
            line-height: vw-mobile(23);
        }
    }
}
</style>