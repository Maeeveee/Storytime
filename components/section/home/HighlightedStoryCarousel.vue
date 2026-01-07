<script setup lang="ts">
import StoryCard from '~/components/ui/StoryCard.vue';
import { articles } from '~/data/articles';
</script>

<template>
    <div class="carouselHeader">
        <h2 class="title">Latest story</h2>
        <UiExploreMoreButton />
    </div>

    <hr>

    <div class="carousel-container">
        <div v-for="article in articles" :key="article.id">
            <StoryCard :-article-item="article" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.carouselHeader {
    margin-top: 150px;
    display: flex;
    justify-content: space-between;
}

.title {
    font-family: "Playfair Display", serif;
    font-size: 44px;
    font-weight: 600;
    line-height: 58px;
}

.carousel-container {
    display: flex;
    justify-content: start;
    align-items: start;
    gap: 20px;

    overflow-x: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: mandatory;
    scroll-behavior: smooth;

}

hr {
    margin-top: 2rem;
    margin-bottom: 2rem;
    border: none;
    border-top: 1px solid #ccc;
}
</style>