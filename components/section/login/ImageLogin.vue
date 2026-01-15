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
        border-radius: 8px;
        margin: vw(20);
        max-width: vw(960);
        max-height: vw(980);
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    &__image-header {
        display: flex;
        gap: vw(30);
        margin-left: auto;
        margin-right: auto;
        max-width: vw(686);
        flex-direction: column;
        padding-block: vw(32) vw(0);
        padding-inline: vw(32);
    }

    &__image-title {
        max-width: vw(549);
        font-family: "Playfair Display", serif;
        font-weight: 700;
        font-size: vw(60);
        line-height: vw(74);
        color: var(--color-text);
    }

    &__image-subtitle {
        font-weight: 400;
        font-size: vw(28);
        line-height: vw(38);
        color: var(--color-text-secondary);
    }

    &__image {
        width: vw(752);
        height: vw(547);
        margin: vw(32);
        display: flex;
        justify-content: left;
        align-items: start;
    }
}
</style>