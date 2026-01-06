<template>
    <div>
        <div class="register__image-section">
            <img src="/img/Logo.webp" alt="Logo" class="register__image">
            <h1 class="register__title">Join the World’s Most-Loved Social Storytelling Platform!</h1>
            <p class="register__text">Create an account to explore interesting articles, connect with like-minded
                people, and share your own stories. </p>
            <img src="/img/RegisterImage.webp" alt="Register Image">
        </div>
    </div>
</template>

<style scoped lang="scss">
.register {
    &__image-section {
        height: 950px;
        max-width: 825px;
        margin-left: auto;
        background-color: #F0F5ED;
        padding: 2rem 4rem 2rem 4rem;
    }

    &__image {
        margin-bottom: 50px;
    }

    &__title {
        font-family: "Playfair Display", serif;
        font-weight: 700;
        font-style: normal;
        font-size: 60px;
        line-height: 74px;
        color: #222222;
        width: 835px;
        margin-bottom: 30px;
    }

    &__text {
        font-family: "DM Sans", serif;
        font-weight: 400;
        font-style: normal;
        font-size: 28px;
        line-height: 38px;
        color: #4B4B4B;
        margin-bottom: 30px;
    }
}
</style>