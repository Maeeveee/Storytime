<script setup lang="ts">
import Button from '~/components/ui/Button.vue';
import InputForm from '~/components/ui/InputForm.vue';
import Logo from '~/components/ui/Logo.vue';

const email = ref('')
const password = ref('')
const isLoading = ref(false)
const toast = useToast();

const handleLogin = async () => {
    isLoading.value = true
    await new Promise(resolve => setTimeout(resolve, 800))

    if (email.value === 'user@test.com' && password.value === 'password') {
        toast.success('You have successfully logged in')
        navigateTo('/')
    } else {
        toast.error('Invalid credentials. Try: user@test.com / password')
    }
    isLoading.value = false
}
</script>
<template>
    <section class="section-wrapper">
        <div class="login__logo">
            <Logo />
        </div>
        <div class="login__wrapper">
            <h2 class="login__title">Login</h2>
            <label for="Email" class="login__label">
                <span>Email</span>
                <InputForm v-model="email" id="Email" placeholder="Enter Your Email" variant="primary" />
            </label>
            <label for="Password" class="login__label">
                <span>Password</span>
                <InputForm v-model="password" type="password" id="Password" placeholder="Enter Your Chosen Password"
                    variant="primary" icon-name="formkit:eye" />
            </label>
            <Button :disabled="isLoading" @click="handleLogin" variant="primary" class="login__button">
                {{ isLoading ? 'Loading...' : 'Login' }}
            </Button>
            <span class="login__navigate-text">Don't have an account? <NuxtLink href="/register"
                    class="login__navigate-register">Register
                </NuxtLink></span>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.section-wrapper {
    margin-top: auto;
    margin-bottom: auto;
    border-radius: 8px;

    @include desktop {
        width: vw(825);
        height: vw(910);
        margin: vw(20);
        padding: vw(16) vw(32);
    }

    @include mobile {
        width: vw-mobile(825);
        margin: vw-mobile(20);
    }
}

.login {
    &__wrapper {
        display: flex;
        flex-direction: column;
        margin-left: auto;

        @include desktop {
            max-width: vw(577);
            margin-top: vw(100);
        }

        @include mobile {
            max-width: vw-mobile(577);
            margin-top: vw-mobile(100);
        }
    }

    &__title {
        font-weight: 700;
        color: var(--color-text);

        @include desktop {
            font-size: vw(44);
            line-height: vw(58);
        }

        @include mobile {
            font-size: vw-mobile(44);
            line-height: vw-mobile(58);
        }
    }

    &__label {
        font-weight: 400;
        color: var(--color-text-secondary);
        display: flex;
        flex-direction: column;


        @include desktop {
            font-size: vw(18);
            line-height: vw(23);
            gap: vw(20);
            margin-top: vw(20);
        }

        @include mobile {
            font-size: vw-mobile(18);
            line-height: vw-mobile(23);
            gap: vw-mobile(20);
            margin-top: vw-mobile(20);
        }
    }

    &__navigate-register {
        font-weight: 700;
        text-decoration: none;
        color: var(--color-primary);


        @include desktop {
            margin-top: vw(30);
        }

        @include mobile {
            margin-top: vw-mobile(30);
        }
    }

    &__navigate-text {
        font-weight: 400;
        color: var(--color-text-secondary);

        @include desktop {
            font-size: vw(18);
            line-height: vw(23);
        }

        @include mobile {
            font-size: vw-mobile(18);
            line-height: vw-mobile(23);
        }
    }

    &__button {
        @include desktop {
            margin-top: vw(20);
            margin-bottom: vw(20);
            max-width: vw(120);
            max-height: vw(60);
        }

        @include mobile {
            margin-top: vw-mobile(20);
            margin-bottom: vw-mobile(20);
            max-width: vw-mobile(120);
            max-height: vw-mobile(60);
        }
    }

    &__logo {
        @include desktop {
            width: vw(256);
            height: vw(59);
            margin-bottom: vw(50);
        }

        @include mobile {
            height: vw-mobile(30);
            margin: auto;
        }
    }
}
</style>