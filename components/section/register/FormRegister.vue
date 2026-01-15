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
    }
}

.register {
    &__form-section {
        margin-top: auto;
        margin-bottom: auto;
        border-radius: 8px;

        @include desktop {
            margin-right: auto;
            width: vw(825);
            margin-top: vw(77.5);
            margin-left: vw(50);
        }

        @include mobile {
            margin: vw-mobile(20);
        }
    }

    &__title {
        font-family: var(--font-primary);
        font-weight: 700;

        @include desktop {
            margin-bottom: vw(50);
            line-height: vw(58);
            font-size: vw(44);
        }

        @include mobile {
            margin-block: vw-mobile(30);
            line-height: vw-mobile(58);
            font-size: vw-mobile(44);
        }
    }

    &__text {
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
            margin-top: vw(50);
            margin-bottom: vw(43);
            max-width: vw(238);
            max-height: vw(60);
        }

        @include mobile {
            margin-top: vw-mobile(50);
            margin-bottom: vw-mobile(43);
            max-width: vw-mobile(238);
            max-height: vw-mobile(60);
        }
    }

    &__navigate-login {
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

    &__label {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        @include desktop {
            margin-top: vw(20);
            max-height: vw(144);
            max-width: vw(577);
            gap: vw(20);
        }

        @include mobile {
            margin-top: vw-mobile(20);
            max-height: vw-mobile(144);
            max-width: vw-mobile(577);
            gap: vw-mobile(10);
        }
    }

    &__logo {
        @include mobile {
            width: vw-mobile(150);
            height: vw-mobile(30);
            margin-left: vw-mobile(100);
            margin: auto;
        }
    }
}
</style>