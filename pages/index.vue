<script setup lang="ts">
import StoryCarousel from '~/components/section/home/HighlightedStoryCarousel.vue'
import MoreCategories from '~/components/section/home/MoreCategories.vue'
import HighlightedStoryBento from '~/components/section/home/HighlightedStoryBento.vue'
</script>

<template>
    <div class="container">
        <div class="hero">
            <h1 class="hero__title">Welcome to Storytime</h1>
            <p class="hero__text">The world's most-loved social storytelling platform. Story time connects a global
                community of 90 million
                readers and writers through the power of story.</p>
            <div>
                <input type="text" placeholder="Search Story" class="hero__search">
            </div>
        </div>

        <img src="/img/HeroSection.webp" alt="hero section image" class="hero__image">

        <StoryCarousel />
        <HighlightedStoryBento />
        <MoreCategories />
    </div>
</template>

<style lang="scss" scoped>

.hero {
    text-align: center;
    padding-top: 20px;

    &__title {
        font-family: "Playfair", serif;
        font-optical-sizing: auto;
        font-weight: bold;
        font-style: normal;
        font-variation-settings: "wdth" 150;
        font-size: 60px;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.75);
        letter-spacing: 0px;
    }

    &__text {
        font-size: x-large;
        margin-top: 20px;
        margin-bottom: 20px;
        color: #4B4B4B;
        max-width: 1412px;
        margin: auto;
    }

    &__search {
        border: 2px solid #878585;
        width: 1062px;
        height: 80px;
        border-radius: 10px;
        padding-left: 20px;
        margin-top: 20px;
        margin-bottom: 40px
    }

    &__image {
        width: 45%;
        display: flex;
        margin: auto;
    }
}
</style>