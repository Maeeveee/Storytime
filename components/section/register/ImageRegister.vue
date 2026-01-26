<template>
    <div>
        <div class="register__image-section">
            <div class="register__logo">
                <UiLogo />
            </div>
            <h1 class="register__title">Join the World’s Most-Loved Social Storytelling Platform!</h1>
            <p class="register__text">Create an account to explore interesting articles, connect with like-minded
                people, and share your own stories. </p>
            <img src="/img/RegisterImage.webp" alt="Register Image" class="register__image">
        </div>
    </div>
</template>

<style scoped lang="scss">
.register {
    &__image-section {
        background-color: #F0F5ED;
        border-radius: fluid(8, 8);
        height: fluid(910, 910);
        max-width: fluid(205, 805);
        margin: fluid(20, 20);
        padding-block: fluid(16, 16);
        padding-inline: fluid(32, 32);

        @include tablet {
            display: none;
        }
    }

    &__image {
        width: fluid(352, 752);
        height: fluid(247, 547);
    }

    &__title {
        font-family: "Playfair Display", serif;
        font-weight: 700;
        font-style: normal;
        color: var(--color-text);
        font-size: fluid(30, 60);
        line-height: fluid(34, 74);
        width: fluid(235, 835);
        margin-bottom: fluid(30, 30);
    }

    &__text {
        font-family: "DM Sans", serif;
        font-weight: 400;
        font-style: normal;
        color: var(--color-text-secondary);
        font-size: fluid(14, 28);
        line-height: fluid(19, 38);
        margin-bottom: fluid(30, 30);
    }

    &__logo {
        width: fluid(256, 256);
        height: fluid(59, 59);
        margin-bottom: fluid(50, 50);
    }
}
</style>