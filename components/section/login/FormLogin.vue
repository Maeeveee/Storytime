<script setup lang="ts">
import Button from '~/components/ui/Button.vue';
import InputForm from '~/components/ui/InputForm.vue';
import Logo from '~/components/ui/Logo.vue';
import type { LoginPayload } from '~/types/api';
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { toTypedSchema } from '@vee-validate/yup';

const schema = yup.object({
    email: yup.string().required('Email is required').email('Must be a valid email'),
    password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters')
})

const validationSchema = toTypedSchema(schema)

const { values, errors, defineField, handleSubmit, validate } = useForm({
    validationSchema
})

const userStore = useUserStore()

const [email, emailProps] = defineField('email')
const [password, passwordProps] = defineField('password')
const isLoading = ref(false)
const toast = useToast();
const { $api } = useNuxtApp();

const handleLogin = handleSubmit(async (formValues) => {
    isLoading.value = true
    
    try {
        const payload: LoginPayload = {
            email: formValues.email,
            password: formValues.password,
        };

        await $api.auth.csrf()
        const response = await $api.auth.login(payload);

        if (response.data.token) {
            userStore.setToken(response.data.token)
            userStore.setUser(response.data.user)
            toast.success('You have successfully logged in')
            navigateTo('/')
        }
    } catch (error: any) {
        const message = error.response?._data?.message || error.data?.message || error.message;

        if (message) {
            toast.error(message)
        } else {
            toast.error('Invalid credentials or server error')
        }
    } finally {
        isLoading.value = false
    }
})
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
                <span v-if="errors.email">{{ errors.email }}</span>
                <InputForm v-model="email" v-bind="emailProps" type="email" id="Email" placeholder="Enter Your Email"
                    variant="primary" />
            </label>
            <label for="Password" class="login__label">
                <span>Password</span>
                <span v-if="errors.password">{{ errors.password }}</span>
                <InputForm v-model="password" v-bind="passwordProps" type="password" id="Password"
                    placeholder="Enter Your Chosen Password" variant="primary" icon-name="formkit:eye" />
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
    border-radius: fluid(8, 8);
    width: fluid(825, 825);
    margin: fluid(20, 20);
    padding: fluid(16, 16) fluid(32, 32);

    @include desktop {
        height: vw(910);
    }

    @include tablet {
        width: 100%;
        max-width: 500px;
        margin: auto;
        padding: fluid(30, 40);
    }
}

.login {
    &__wrapper {
        display: flex;
        flex-direction: column;
        margin-left: auto;
        max-width: fluid(577, 577);
        margin-top: fluid(100, 100);

        @include tablet {
            max-width: 100%;
            margin-left: 0;
            margin-top: fluid(40, 60);
        }
    }

    &__title {
        font-weight: 700;
        color: var(--color-text);
        font-size: fluid(44, 44);
        line-height: fluid(58, 58);

        @include tablet {
            font-size: fluid(32, 40);
            text-align: center;
        }
    }

    &__label {
        font-weight: 400;
        color: var(--color-text-secondary);
        display: flex;
        flex-direction: column;
        font-size: fluid(18, 18);
        line-height: fluid(23, 23);
        gap: fluid(20, 20);
        margin-top: fluid(20, 20);
    }

    &__navigate-register {
        font-weight: 700;
        text-decoration: none;
        color: var(--color-primary);
        margin-top: fluid(30, 30);
    }

    &__navigate-text {
        font-weight: 400;
        color: var(--color-text-secondary);
        font-size: fluid(18, 18);
        line-height: fluid(23, 23);

        @include tablet {
            text-align: center;
            display: block;
        }
    }

    &__button {
        margin-top: fluid(20, 20);
        margin-bottom: fluid(20, 20);
        max-width: fluid(120, 120);
        max-height: fluid(60, 60);

        @include tablet {
            max-width: 100%;
        }
    }

    &__logo {
        width: fluid(150, 256);
        height: fluid(30, 59);
        margin-bottom: fluid(20, 50);

        @include tablet {
            margin: auto;
        }

        @include mobile {
            margin: auto;
        }
    }
}
</style>