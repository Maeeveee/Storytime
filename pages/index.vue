<script setup lang="ts">
import StoryCarousel from '~/components/section/home/HighlightedStoryCarousel.vue'
import MoreCategories from '~/components/section/home/MoreCategories.vue'
import HighlightedStoryMasonry from '~/components/section/home/HighlightedStoryMasonry.vue'
</script>

<template>
    <div class="container">
        <div class="hero">
            <h1>Welcome to Storytime</h1>
            <p>The world's most-loved social storytelling platform. Story time connects a global community of 90 million
                readers and writers through the power of story.</p>
            <div>
                <input type="text" placeholder="Search Story" class="search">
            </div>
        </div>

            <img src="/img/HeroSection.webp" alt="hero section image">

        <StoryCarousel />
        <HighlightedStoryMasonry />
        <MoreCategories />
    </div>
</template>

<style>
.search {
    border: 2px solid #878585;
    width: 1062px;
    height: 80px;
    border-radius: 10px;
    padding-left: 20px;
}

img {
    width: 45%;
    display: flex;
    margin: auto;
}
</style>