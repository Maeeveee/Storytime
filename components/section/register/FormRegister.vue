<script setup lang="ts">
import InputForm from '~/components/ui/InputForm.vue';
import Button from '~/components/ui/Button.vue';
import Logo from '~/components/ui/Logo.vue';

const toast = useToast();

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

function handleRegister() {
    if (name.value && email.value && password.value && confirmPassword.value === password.value) {
        toast.success('You have successfully registered')
        navigateTo('/')
    } else {
        toast.error('please fill form below correctly')
    }
}

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
                    <InputForm v-model="name" placeholder="Enter Your name" variant="primary" />
                </label>
                <label class="register__label">
                    <span class="register__text">Email</span>
                    <InputForm v-model="email" placeholder="Enter Your Email" variant="primary" />
                </label>
                <label class="register__label">
                    <span class="register__text">Password</span>
                    <InputForm v-model="password" placeholder="Enter Your Chosen Password" variant="primary"
                        icon-name="formkit:eye" />
                </label>
                <label class="register__label">
                    <span class="register__text">Confirm Password</span>
                    <InputForm v-model="confirmPassword" placeholder="Re-enter Your Chosen Password" variant="primary"
                        icon-name="formkit:eye" />
                </label>
            </div>
            <Button @click="handleRegister" variant="primary" class="register__button"> Create Account</Button>
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
        margin: fluid(20, 50);

        @include desktop {
            margin-right: auto;
            width: vw(825);
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
        max-width: fluid(577, 577);
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