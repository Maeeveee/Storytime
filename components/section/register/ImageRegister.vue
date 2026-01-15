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
        border-radius: 8px;

        @include desktop {
            height: vw(910);
            max-width: vw(805);
            margin: vw(20);
            padding-block: vw(16);
            padding-inline: vw(32);
        }

        @include mobile {
            height: vw-mobile(910);
            max-width: vw-mobile(805);
            margin: vw-mobile(20);
            padding-block: vw(16);
            padding-inline: vw(32);
        }
    }

    &__image {
        @include desktop {
            width: vw(752);
            height: vw(547);
        }

        @include mobile {
            width: vw-mobile(752);
            height: vw-mobile(547);
        }
    }

    &__title {
        font-family: "Playfair Display", serif;
        font-weight: 700;
        font-style: normal;
        color: var(--color-text);

        @include desktop {
            font-size: vw(60);
            line-height: vw(74);
            width: vw(835);
            margin-bottom: vw(30);
        }

        @include mobile {
            font-size: vw-mobile(60);
            line-height: vw-mobile(74);
            width: vw-mobile(835);
            margin-bottom: vw-mobile(30);
        }
    }

    &__text {
        font-family: "DM Sans", serif;
        font-weight: 400;
        font-style: normal;
        color: var(--color-text-secondary);

        @include desktop {
            font-size: vw(28);
            line-height: vw(38);
            margin-bottom: vw(30);
        }

        @include mobile {
            font-size: vw-mobile(28);
            line-height: vw-mobile(38);
            margin-bottom: vw-mobile(30);
        }
    }

    &__logo {
        @include desktop {
            width: vw(256);
            height: vw(59);
            margin-bottom: vw(50);
        }

        @include mobile {
            width: vw-mobile(256);
            height: vw-mobile(59);
            margin-bottom: vw-mobile(50);
        }
    }
}
</style>