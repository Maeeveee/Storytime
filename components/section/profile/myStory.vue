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
                    <Button action="#" variant="primary">Write Story</Button>
                </div>
            </div>

            <div class="my-story__no-story-wrapper">
                <div class="my-story__no-story-header">
                    <h1 class="my-story__no-story-title">No Stories Yet</h1>
                    <h4 class="my-story__no-story-text">You haven't shared any stories yet. Start your fitness journey
                        today!</h4>
                </div>
                <img src="/img/NoStoryImage.webp" alt="no story yet" class="my-story__no-story-image" />
            </div>
            <!-- <div class="my-story__content-grid">
                <div v-for="article in filteredArticles" :key="article.id">
                    <StoryCard :article-item="article" :hide-category="hideCategory" />
                </div>
            </div> -->
        </div>
    </section>
</template>
<style scoped lang="scss">
.my-story {
    margin: 65px 110px 40px 110px;

    &__write-width {
        max-width: 390px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    &__title {
        font-weight: 700;
        font-size: 36px;
        line-height: 46px;
        color: var(--color-text);
    }

    &__quote {
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        color: var(--color-text);
        margin-top: 20px;
        margin-bottom: 30px;
    }

    &__write-content {
        width: 546px;
        height: 250px;
        border: 1px solid var(--color-border);
        padding: 80px 77px 110px 78px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: sticky;
        top: 120px;
    }

    &__content-wrapper {
        display: flex;
        gap: 30px;
        margin-top: 99px;
    }

    &__content-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 29px;
    }

    &__no-story-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        margin-left: 200px;
    }

    &__no-story-header {
        text-align: center;
        margin-bottom: 60px;
    }

    &__no-story-image {
        width: 529px;
        height: 546px;
    }

    &__no-story-title {
        font-family: var(--font-display);
        font-weight: 600;
        font-size: 44px;
        line-height: 58px;
        margin-bottom: 30px;
        color: var(--color-text);
    }

    &__no-story-text {
        font-weight: 400;
        font-size: 24px;
        line-height: 32px;
        color: var(--color-text);
    }
}
</style>