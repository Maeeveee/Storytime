<template>
    <div class="login__image-section">
        <h1 class="login__title">Welcome Back to Storytime!</h1>
        <p class="login__text">Dive back into captivating stories, follow your favorite authors, and continue sharing
            your own tales.</p>
        <img src="/img/LoginImage.webp" alt="Login Image" class="login__image">
    </div>
</template>

<style scoped lang="scss">
.login {
    &__image-section {
        height: 910px;
        width: 825px;
        background-color: #F0F5ED;
        margin-top: 20px;
        padding: 2rem 4rem 2rem 4rem;
    }

    &__title {
        font-family: "Playfair Display", serif;
        font-weight: 700;
        font-style: normal;
        font-size: 60px;
        line-height: 74px;
        color: #222222;
        width: 686px;
        height: 264px;
        margin-bottom: 30px;
        margin-top: 50px;
    }

    &__image {
        width: 917px;
        height: 600px;
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