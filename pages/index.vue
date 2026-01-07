<template>
    <div class="container">
        <div class="hero">
            <div class="hero__text-wrapper">
                <span class="hero__title">Welcome to Storytime</span>
                <p class="hero__text-wrapper__text">The world's most-loved social storytelling platform. Story time
                    connects a global
                    community of 90 million
                    readers and writers through the power of story.</p>
            </div>
            <div class="hero__wrapper">
                <UiInputForm placeholder="Search Story" variant="secondary" icon-name="formkit:search" />
            </div>
            <img src="/img/HeroSection.webp" alt="hero section image" class="hero__image">
        </div>

        <SectionHomeHighlightedStoryCarousel />
        <SectionHomeHighlightedStoryBento category="comedy"/>
        <SectionHomeHighlightedStoryCarousel category="romance" hide-category/>
        <SectionHomeMoreCategories />
    </div>
</template>

<style lang="scss" scoped>
.hero {
    text-align: center;
    padding-top: 170px;

    &__title {
        font-family: "Playfair Display", serif;
        font-weight: 700;
        font-style: normal;
        font-size: 60px;
        line-height: 74px;
        letter-spacing: 0%;
        color: #222222;
        margin-bottom: 25px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    &__text-wrapper {
        max-width: 1412px;
        margin: auto;
        display: flex;
        flex-direction: column;


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
    }


    &__image {
        width: 45%;
        display: flex;
        margin: auto;
    }

    &__wrapper {
        max-width: 1002px;
        margin-top: 40px;
        margin-bottom: 30px;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>