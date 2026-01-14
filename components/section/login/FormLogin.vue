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
        toast.success('Login successful!')
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
    width: 825px;
    margin-top: auto;
    margin-bottom: auto;
    border-radius: 8px;

    @include mobile {
        margin: 20px;
    }

    @include desktop {
        height: 910px;
        margin: 20px;
        padding: 2rem 4rem;
    }
}

.login {
    &__wrapper {
        max-width: 577px;
        display: flex;
        flex-direction: column;
        margin-left: auto;
        margin-top: 100px;
    }

    &__title {
        font-weight: 700;
        font-size: 44px;
        line-height: 58px;
        color: var(--color-text);
    }

    &__label {
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: var(--color-text-secondary);
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 20px;
    }

    &__navigate-register {
        font-weight: 700;
        text-decoration: none;
        color: var(--color-primary);
        margin-top: 30px;
    }

    &__navigate-text {
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: var(--color-text-secondary);
    }

    &__button {
        margin-top: 20px;
        margin-bottom: 20px;
        max-width: 120px;
        max-height: 60px;
    }

    &__logo {
        @include mobile {
            width: 150px;
            height: 30px;
            margin: auto;
        }

        @include desktop {
            width: 256px;
            height: 59px;
            margin-bottom: 50px;
        }
    }
}
</style>