<script setup lang="ts">
import { articles } from '~/data/articles';
import StoryCard from '~/components/ui/StoryCard.vue';
import Button from '~/components/ui/Button.vue';
interface Props {
    category?: string;
    title?: string;
    hideCategory?: boolean;
    limit?: number;
}

const props = withDefaults(defineProps<Props>(), {
    category: '',
    title: '',
    hideCategory: false,
    limit: 4
})

const filteredArticles = computed(() => {
    let result = [...articles];

    if (props.category) {
        result = result.filter(article => article.category === props.category);
    }

    if (props.limit > 0) {
        result = result.slice(0, props.limit);
    }

    return result;
});
</script>

<template>
    <section class="my-story">
        <h2 class="my-story__title">My Story</h2>

        <div class="my-story__content-wrapper">
            <div class="my-story__write-content">
                <div class="my-story__write-width">
                    <h2 class="my-story__title">Write your story</h2>
                    <p class="my-story__quote">Share your unique voice with the world – start writing your story today!
                    </p>
                    <Button to="/dashboard/create" variant="primary">Write Story</Button>
                </div>
            </div>
            <!-- <div class="my-story__no-story-wrapper">
                <div class="my-story__no-story-header">
                    <h1 class="my-story__no-story-title">No Stories Yet</h1>
                    <h4 class="my-story__no-story-text">You haven't shared any stories yet. Start your fitness journey
                        today!</h4>
                </div>
                <img src="/img/NoStoryImage.webp" alt="no story yet" class="my-story__no-story-image" />
            </div> -->
            <div class="my-story__content-grid">
                <div v-for="article in filteredArticles" :key="article.id">
                    <StoryCard :article-item="article" :hide-category="hideCategory" variant="small" :is-edit="true" />
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped lang="scss">
.my-story {
    @include desktop {
        margin-block: vw(65) vw(40);
        margin-inline: vw(110);
    }

    @include mobile {
        margin-block: vw-mobile(30);
        margin-inline: vw-mobile(20);
    }

    &__write-content {
        border: 1px solid var(--color-border);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @include desktop {
            width: 546px vw(546);
            height: 250px vw(250);
            padding: vw(80) vw(77) vw(110) vw(78);
            position: sticky;
            top: vw(120);
        }

        @include mobile {
            width: vw-mobile(200);
            height: vw-mobile(50);
            padding: vw-mobile(80) vw-mobile(77) vw-mobile(70) vw-mobile(78);
        }
    }

    &__write-width {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        @include desktop {
            max-width: vw(390);
        }

        @include mobile {
            max-width: vw-mobile(300);
        }
    }

    &__title {
        font-weight: 700;
        color: var(--color-text);

        @include desktop {
            font-size: vw(36);
            line-height: vw(46);
        }

        @include mobile {
            font-size: vw-mobile(24);
            line-height: vw-mobile(20);
        }
    }

    &__quote {
        font-weight: 400;
        color: var(--color-text);

        @include desktop {
            font-size: vw(18);
            line-height: vw(27);
            margin-bottom: vw(30);
            margin-top: vw(20);
        }

        @include mobile {
            font-size: vw-mobile(14);
            line-height: vw-mobile(20);
            margin-bottom: vw-mobile(10);
            margin-top: vw-mobile(20);
        }
    }

    &__content-wrapper {
        display: flex;

        @include desktop {
            gap: vw(30);
            margin-top: vw(99);
        }

        @include mobile {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: vw-mobile(30);
            margin-top: vw-mobile(30);
        }
    }

    &__content-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        @include desktop {
            gap: vw(29);
        }

        @include mobile {
            gap: vw-mobile(29);
        }
    }

    &__no-story-wrapper {
        display: flex;
        flex-direction: column;

        @include desktop {
            gap: vw(20);
            align-items: center;
            margin-left: vw(200);
        }

        @include mobile {
            gap: vw-mobile(20);

        }
    }

    &__no-story-header {
        text-align: center;

        @include desktop {
            margin-bottom: vw(60);
        }
    }

    &__no-story-image {

        @include desktop {
            width: vw(529);
            height: vw(546);

        }

        @include mobile {
            width: vw-mobile(529);
            height: vw-mobile(546);
            display: none;
        }
    }

    &__no-story-title {
        font-family: var(--font-display);
        font-weight: 600;
        color: var(--color-text);
        
        @include desktop {
            font-size: vw(44);
            line-height: vw(58);
            margin-bottom: vw(30);
        }
        
        @include mobile {
            font-size: vw-mobile(22);
            line-height: vw-mobile(29);
            margin-bottom: vw-mobile(30);
        }
    }

    &__no-story-text {
        font-weight: 400;
        color: var(--color-text);

        @include desktop {
            font-size: vw(24);
            line-height: vw(32);
        }

        @include mobile {
            font-size: vw-mobile(16);
            line-height: vw-mobile(18);
        }
    }
}
</style>