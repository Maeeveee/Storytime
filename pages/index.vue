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
    padding-top: fluid(100, 200);
    padding-bottom: fluid(40, 80);
    padding-inline: fluid(20, 40);
    max-width: fluid(375, 1700);
    margin-left: auto;
    margin-right: auto;

    @include mobile {
        margin-bottom: vw-mobile(50);
    }

    @include tablet {
        padding-top: fluid(80, 150);
    }

    &__title {
        font-family: var(--font-display);
        font-weight: 700;
        font-style: normal;
        letter-spacing: 0%;
        color: var(--color-text);
        text-shadow: 0 fluid(4, 4) fluid(4, 4) rgba(0, 0, 0, 0.25);
        font-size: fluid(42, 60);
        margin-bottom: fluid(25, 30);
        line-height: fluid(54, 74);
    }

    &__text-wrapper {
        margin: auto;
        display: flex;
        flex-direction: column;
        max-width: fluid(335, 1200);

        @include mobile {
            width: 100%;
        }

        @include tablet {
            max-width: 90%;
        }

        &__text {
            font-weight: 400;
            color: var(--color-text-secondary);
            margin: auto;
            max-width: fluid(335, 1000);
            margin-top: fluid(20, 25);
            margin-bottom: fluid(25, 30);
            font-size: fluid(16, 24);
            line-height: fluid(22, 32);

            @include tablet {
                max-width: 85%;
            }
        }
    }

    &__image {
        display: flex;
        margin: auto;
        width: fluid(90%, 45%);

        @include tablet {
            width: 70%;
        }
    }

    &__wrapper {
        margin-left: auto;
        margin-right: auto;
        max-width: fluid(335, 800);
        margin-top: fluid(30, 40);
        margin-bottom: fluid(20, 30);

        @include tablet {
            max-width: 70%;
        }
    }
}

.toast-wrapper {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
    animation: slideInCenter 0.3s ease-out;
    top: fluid(20, 20);
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