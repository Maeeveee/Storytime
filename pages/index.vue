<script setup lang="ts">
import DisplayStory from '~/components/section/home/DisplayStory.vue';
import ConfirmToast from '~/components/ui/toast/ConfirmToast.vue';
import Categories from '~/components/section/home/Categories.vue';
import InputForm from '~/components/ui/InputForm.vue';

const route = useRoute()
const router = useRouter()
const showLoginToast = ref(false)

onMounted(() => {
    if (route.query.login === 'success') {
        showLoginToast.value = true
        router.replace({ query: {} })
        setTimeout(() => {
            showLoginToast.value = false
        }, 3000)
    }
})



</script>

<template>
    <main class="container">
        <Teleport to="body">
            <div v-if="showLoginToast" class="toast-wrapper">
                <ConfirmToast text="Login Successful!" />
            </div>
        </Teleport>

        <div class="hero">
            <div class="hero__text-wrapper">
                <span class="hero__title">Hi, Rizal <br> Welcome to Storytime</span>
                <p class="hero__text-wrapper__text">The world's most-loved social storytelling platform. Story time
                    connects a global
                    community of 90 million
                    readers and writers through the power of story.</p>
            </div>
            <div class="hero__wrapper">
                <InputForm placeholder="Search Story" variant="secondary" icon-name="formkit:search" />
            </div>
            <img src="/img/HeroSection.webp" alt="hero section image" class="hero__image">
        </div>

        <DisplayStory display="carousel" title="Latest Story" />
        <DisplayStory category="comedy" display="bento" />
        <DisplayStory category="romance" display="flex" />
        <DisplayStory category="horror" display="bento" />
        <Categories />
    </main>
</template>

<style lang="scss" scoped>
.hero {
    text-align: center;

    @include desktop {
        padding: vw(170);
    }

    @include mobile {
        padding-block: vw-mobile(80);
        margin-bottom: vw-mobile(170);
    }


    &__title {
        font-family: var(--font-display);
        font-weight: 700;
        font-style: normal;
        letter-spacing: 0%;
        color: var(--color-text);
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        @include desktop {
            font-size: vw(60);
            margin-bottom: vw(30);
            line-height: vw(74);
        }

        @include mobile {
            font-size: vw-mobile(42);
            margin-bottom: vw-mobile(25);
            line-height: vw-mobile(54);
        }
    }

    &__text-wrapper {
        margin: auto;
        display: flex;
        flex-direction: column;

        @include desktop {
            max-width: vw(1412);
        }

        @include mobile {
            max-width: vw-mobile(700);
            width: 100%;
        }

        &__text {
            font-weight: 400;
            color: var(--color-text-secondary);
            margin: auto;

            @include desktop {
                max-width: vw(1412);
                margin-top: vw(25);
                margin-bottom: vw(30);
                font-size: vw(24);
                line-height: vw(32);
            }

            @include mobile {
                max-width: vw-mobile(1412);
                margin-top: vw-mobile(25);
                margin-bottom: vw-mobile(30);
                font-size: vw-mobile(18);
                line-height: vw-mobile(24);
            }
        }
    }

    &__image {
        display: flex;
        margin: auto;

        @include desktop {
            width: 45%;
        }

        @include mobile {
            width: 90%;
        }
    }

    &__wrapper {
        margin-left: auto;
        margin-right: auto;

        @include desktop {
            max-width: vw(1002);
            margin-top: vw(40);
            margin-bottom: vw(30);
        }

        @include mobile {
            max-width: vw-mobile(1002);
            margin-top: vw-mobile(40);
            margin-bottom: vw-mobile(30);
        }
    }
}

.toast-wrapper {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
    animation: slideInCenter 0.3s ease-out;
}

@keyframes slideInCenter {
    from {
        opacity: 0;
        transform: translate(-50%, -20px);
    }

    to {
        opacity: 1;
        transform: translate(-50%, 0);
    }
}
</style>