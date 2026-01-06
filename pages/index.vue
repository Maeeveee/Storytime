<script setup lang="ts">
import StoryCarousel from '~/components/section/home/HighlightedStoryCarousel.vue'
import MoreCategories from '~/components/section/home/MoreCategories.vue'
import HighlightedStoryBento from '~/components/section/home/HighlightedStoryBento.vue'
</script>

<template>
    <div class="container">
        <div class="hero">
            <span class="hero__title">Welcome to Storytime</span>
            <p class="hero__text">The world's most-loved social storytelling platform. Story time connects a global
                community of 90 million
                readers and writers through the power of story.</p>
            <div>
                <input type="text" placeholder="Search Story" class="hero__search">
            </div>
            <img src="/img/HeroSection.webp" alt="hero section image" class="hero__image">
        </div>


        <StoryCarousel />
        <HighlightedStoryBento />
        <MoreCategories />
    </div>
</template>

<style lang="scss" scoped>
.hero {
    text-align: center;
    padding-top: 170px;
    margin-bottom: 40px;

    &__title {
        font-family: "Playfair", serif;
        font-weight: 700;
        font-style: normal;
        font-size: 60px;
        line-height: 74px;
        letter-spacing: 0%;
        color: #222222;
        margin-bottom: 25px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    &__text {
        font-size: 24px;
        margin-top: 25px;
        margin-bottom: 30px;
        line-height: 32px;
        font-weight: 400;
        color: #4B4B4B;
        max-width: 1412px;
        margin: auto;
    }

    &__search {
        border: 2px solid #CCCCCC;
        width: 1002px;
        height: 32px;
        border-radius: 10px;
        padding: 24px 30px 24px 30px;
        margin-top: 40px;
        margin-bottom: 30px;
        font-size: 24px;
        line-height: 32px;
        background-image: url('/icon/formkit--search.svg');
        background-repeat: no-repeat;
        background-position: right 20px center;
        background-size: 30px;
        &:focus {
            outline: none;
        }

    }


    &__image {
        width: 45%;
        display: flex;
        margin: auto;
        
    }
}
</style>