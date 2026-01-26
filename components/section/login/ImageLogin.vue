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
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        border-radius: fluid(8, 8);
        margin: fluid(20, 20);
        max-width: fluid(960, 960);
        max-height: fluid(980, 980);

        @include tablet {
            display: none;
        }
    }

    &__image-header {
        display: flex;
        gap: fluid(30, 30);
        margin-left: auto;
        margin-right: auto;
        max-width: fluid(686, 686);
        flex-direction: column;
        padding-block: fluid(32, 32) 0;
        padding-inline: fluid(32, 32);
    }

    &__image-title {
        max-width: fluid(549, 549);
        font-family: "Playfair Display", serif;
        font-weight: 700;
        font-size: fluid(60, 60);
        line-height: fluid(74, 74);
        color: var(--color-text);
    }

    &__image-subtitle {
        font-weight: 400;
        font-size: fluid(28, 28);
        line-height: fluid(38, 38);
        color: var(--color-text-secondary);
    }

    &__image {
        width: fluid(452, 752);
        height: fluid(547, 547);
        margin: fluid(32, 32);
        display: flex;
        justify-content: left;
        align-items: start;
    }
}
</style>