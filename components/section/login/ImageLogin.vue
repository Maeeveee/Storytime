<template>
    <section class="login__image-wrapper">
        <div class="login__image-header">
            <h2 class="login__image-title">
                Welcome Back to Story Time!
            </h2>
            <p class="login__image-subtitle">
                Dive back into captivating stories, follow your favorite authors, and continue sharing your own tales.
            </p>
        </div>
        <img src="/img/LoginImage.webp" alt="Login Image" class="login__image">
    </section>
</template>

<style scoped lang="scss">
.login {
    &__image-wrapper {
        background-color: #F0F5ED;
        margin: 20px;
        border-radius: 8px;
        max-width: 960px;
        width: 100%;
        max-height: 980px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    &__image-header {
        max-width: 686px;
        padding: 4rem 4rem 0rem 4rem;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    &__image-title {
        max-width: 549px;
        font-family: "Playfair Display", serif;
        font-weight: 700;
        font-size: 60px;
        line-height: 74px;
        color: #222222;
    }

    &__image-subtitle {
        font-weight: 400;
        font-size: 28px;
        line-height: 38px;
        color: #4B4B4B;
    }

    &__image {
        width: 752px;
        height: 547px;
        margin: 4rem 4rem 4rem 4rem;
        display: flex;
        justify-content: left;
        align-items: start;
    }

}
</style>