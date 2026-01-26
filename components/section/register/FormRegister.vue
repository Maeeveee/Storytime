<script setup lang="ts">
import InputForm from '~/components/ui/InputForm.vue';
import Button from '~/components/ui/Button.vue';
import Logo from '~/components/ui/Logo.vue';
import type { RegisterPayload } from '~/types/api';

import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { toTypedSchema } from '@vee-validate/yup';

const passwordLowerCase = /(?=.*[a-z])/;
const passwordUpperCase = /(?=.*[A-Z])/
const passwordNumber = /(?=.*[0-9])/
const passwordSpecialChar = /(?=.*?[!@#$%^&*?])/
const whiteSpaceChecker = /^\S+$/

const schema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().required('Email is required').email('Must be a valid email'),
    password: yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .matches(passwordLowerCase, { message: 'Password must have at least 1 lowercase letter' })
        .matches(passwordUpperCase, { message: 'Password must have at least 1 uppercase letter' })
        .matches(passwordNumber, { message: 'Password must have at least 1 number' })
        .matches(passwordSpecialChar, { message: 'Password must have at least 1 special character (!@#$%^&*?)' })
        .matches(whiteSpaceChecker, { message: 'Password must not contain whitespace' }),
    confirmPassword: yup.string().required('Please confirm your password').oneOf([yup.ref('password')], 'Passwords must match'),
})

const validationSchema = toTypedSchema(schema)

const { values, errors, defineField, handleSubmit } = useForm({
    validationSchema
})

const userStore = useUserStore()

const toast = useToast();
const [name, nameProps] = defineField('name')
const [email, emailProps] = defineField('email')
const [password, passwordProps] = defineField('password')
const [confirmPassword, confirmPasswordProps] = defineField('confirmPassword')
const { $api } = useNuxtApp();
const isLoading = ref(false)

const handleRegister = handleSubmit(async (formValues) => {
    isLoading.value = true
    
    try {
        const payload: RegisterPayload = {
            name: formValues.name,
            email: formValues.email,
            password: formValues.password,
            password_confirmation: formValues.confirmPassword
        }

        await $api.auth.csrf()
        const response = await $api.auth.register(payload);

        if (response.data.token) {
            userStore.setToken(response.data.token)
            userStore.setUser(response.data.user)
            toast.success('You have successfully registered')
            await navigateTo('/')
        } else {
            toast.success('Registration successful, please login')
            await navigateTo('/login')
        }
    } catch (error: any) {
        const message = error.response?._data?.message || error.data?.message || error.message
        toast.error(message || 'Registration failed. Please try again.')
    } finally {
        isLoading.value = false
    }
})

</script>
<template>
    <div>
        <div class="register__form-section">
            <div class="register__logo device__desktop">
                <Logo />
            </div>
            <h2 class="register__title">Create Account</h2>
            <div>
                <label class="register__label">
                    <span class="register__text">Name</span>
                    <span class="register__error-message">{{ errors.name }}</span>
                    <InputForm v-model="name" v-bind="nameProps" placeholder="Enter Your name" variant="primary" />
                </label>
                <label class="register__label">
                    <span class="register__text">Email</span>
                    <span v-if="errors.email" class="register__error-message">{{ errors.email }}</span>
                    <InputForm v-model="email" v-bind="emailProps" placeholder="Enter Your Email" variant="primary" />
                </label>
                <label class="register__label">
                    <span class="register__text">Password</span>
                    <span v-if="errors.password" class="register__error-message">{{ errors.password }}</span>
                    <InputForm v-model="password" v-bind="passwordProps" type="password" placeholder="Enter Your Chosen Password"
                        variant="primary" />
                </label>
                <label class="register__label">
                    <span class="register__text">Confirm Password</span>
                    <span v-if="errors.confirmPassword" class="register__error-message">{{ errors.confirmPassword
                    }}</span>
                    <InputForm v-model="confirmPassword" v-bind="confirmPasswordProps" type="password"
                        placeholder="Re-enter Your Chosen Password" variant="primary" />
                </label>
            </div>
            <Button :disabled="isLoading" @click="handleRegister" variant="primary" class="register__button">
                {{ isLoading ? 'Creating...' : 'Create Account' }}
            </Button>
            <div>
                <span class="register__text">Already have an account? <NuxtLink href="/Login"
                        class="register__navigate-login">Login</NuxtLink></span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.device {
    &__mobile {
        display: block;
    }

    &__desktop {
        @include desktop {
            display: none;
        }

        @include tablet {
            display: block;
        }
    }
}

.register {
    &__form-section {
        margin-top: auto;
        margin-bottom: auto;
        border-radius: fluid(8, 8);
        margin: fluid(10, 50);
        @include desktop {
            margin-right: auto;
            max-width: vw(825);
            width: 100%;
            margin-top: vw(77.5);
        }
        
        @include tablet {
            width: 100%;
            max-width: 500px;
            margin: auto;
            padding: fluid(30, 50);
        }


    }

    &__title {
        font-family: var(--font-primary);
        font-weight: 700;
        margin-bottom: fluid(30, 50);
        line-height: fluid(58, 58);
        font-size: fluid(44, 44);

        @include tablet {
            font-size: fluid(32, 40);
            text-align: center;
        }

        @include mobile {
            margin-block: vw-mobile(30);
        }
    }

    &__error-message {
        color: red;
    }

    &__text {
        font-weight: 400;
        color: var(--color-text-secondary);
        font-size: fluid(18, 18);
        line-height: fluid(23, 23);
    }

    &__button {
        margin-top: fluid(50, 50);
        margin-bottom: fluid(43, 43);
        max-width: fluid(238, 238);
        max-height: fluid(60, 60);

        @include tablet {
            max-width: 100%;
        }
    }

    &__navigate-login {
        font-weight: 700;
        text-decoration: none;
        color: var(--color-primary);
        margin-top: fluid(30, 30);
    }

    &__label {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        margin-top: fluid(20, 20);
        max-height: fluid(144, 144);
        max-width: fluid(207, 577);
        gap: fluid(10, 20);

        @include tablet {
            max-width: 100%;
        }
    }

    &__logo {
        @include tablet {
            display: flex;
            justify-content: center;
            margin-bottom: fluid(20, 30);
        }

        @include mobile {
            width: vw-mobile(150);
            height: vw-mobile(30);
            margin-left: vw-mobile(100);
            margin: auto;
        }
    }
}
</style>