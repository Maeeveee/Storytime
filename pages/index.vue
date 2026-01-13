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

    @include mobile {
        padding-block: 80px;
        margin-bottom: 170px;
    }

    @include desktop {
        padding: 170px;
    }

    &__title {
        font-family: var(--font-display);
        font-weight: 700;
        font-style: normal;
        letter-spacing: 0%;
        color: var(--color-text);
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        @include mobile {
            font-size: 42px;
            margin-bottom: 25px;
            line-height: 54px;
        }

        @include desktop {
            font-size: 60px;
            margin-bottom: 30px;
            line-height: 74px;
        }
    }

    &__text-wrapper {
        margin: auto;
        display: flex;
        flex-direction: column;

        @include mobile {
            max-width: 700px;
            width: 100%;
        }

        @include desktop {
            max-width: 1412px;
        }

        &__text {
            font-weight: 400;
            color: var(--color-text-secondary);
            max-width: 1412px;
            margin: auto;
            margin-top: 25px;
            margin-bottom: 30px;

            @include mobile {
                font-size: 18px;
                line-height: 24px;
            }

            @include desktop {
                font-size: 24px;
                line-height: 32px;
            }
        }
    }

    &__image {
        display: flex;
        margin: auto;

        @include mobile {
            width: 90%;
        }

        @include desktop {
            width: 45%;
        }
    }

    &__wrapper {
        margin-top: 40px;
        margin-bottom: 30px;
        margin-left: auto;
        margin-right: auto;

        @include desktop {
            max-width: 1002px;
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