<script setup lang="ts">
import InputForm from '~/components/ui/InputForm.vue';
import Button from '~/components/ui/Button.vue';
import Logo from '~/components/ui/Logo.vue';
</script>
<template>
    <div>
        <div class="register__form-section">
            <div class="register__logo device__dekstop">
                <Logo />
            </div>
            <h2 class="register__title">Create Account</h2>
            <div>
                <label class="register__label">
                    <span class="register__text">Name</span>
                    <InputForm placeholder="Enter Your name" variant="primary" />
                </label>
                <label class="register__label">
                    <span class="register__text">Email</span>
                    <InputForm placeholder="Enter Your Email" variant="primary" />
                </label>
                <label class="register__label">
                    <span class="register__text">Password</span>
                    <InputForm placeholder="Enter Your Chosen Password" variant="primary" icon-name="formkit:eye" />
                </label>
                <label class="register__label">
                    <span class="register__text">Confirm Password</span>
                    <InputForm placeholder="Re-enter Your Chosen Password" variant="primary" icon-name="formkit:eye" />
                </label>
            </div>
            <Button action="#" variant="primary" class="register__button"> Create Account</Button>
            <div>
                <span class="register__text">Already have an account? <NuxtLink href="/Login"
                        class="register__navigate-login">Login</NuxtLink></span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 768px) {
    .device {
        &__mobile {
            display: block;
        }
    }

    .register {
        &__form-section {
            margin-top: auto;
            margin-bottom: auto;
            margin: 20px;
            border-radius: 8px;
        }

        &__title {
            font-family: "DM Sans", serif;
            font-size: 44px;
            font-weight: 700;
            line-height: 58px;
            margin-block: 30px;
        }

        &__text {
            font-size: 18px;
            line-height: 23px;
            font-weight: 400;
            color: #4B4B4B;
        }

        &__button {
            margin-top: 50px;
            margin-bottom: 43px;
            max-width: 238px;
            max-height: 60px;
        }

        &__navigate-login {
            font-weight: 700;
            text-decoration: none;
            color: #466543;
            margin-top: 30px;
        }

        &__label {
            max-width: 577px;
            width: 100%;
            max-height: 144px;
            height: 100%;
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 20px;
        }

        &__logo {
            width: 150px;
            height: 30px;
            margin: auto;
            margin-left: 100px;
        }
    }
}

@media screen and (min-width: 768px) {
    .device {
        &__mobile {
            display: block;
        }

        &__dekstop {
            display: none;
        }
    }

    .register {
        &__form-section {
            width: 825px;
            margin-right: auto;
            margin-top: 77.5px;
            margin-left: 50px;
        }

        &__title {
            font-family: "DM Sans", serif;
            font-size: 44px;
            font-weight: 700;
            line-height: 58px;
            margin-bottom: 50px;
        }

        &__text {
            font-size: 18px;
            line-height: 23px;
            font-weight: 400;
            color: #4B4B4B;
        }

        &__button {
            margin-top: 50px;
            margin-bottom: 43px;
            max-width: 238px;
            max-height: 60px;
        }

        &__navigate-login {
            font-weight: 700;
            text-decoration: none;
            color: #466543;
            margin-top: 30px;
        }

        &__label {
            max-width: 577px;
            width: 100%;
            max-height: 144px;
            height: 100%;
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-top: 20px;
        }
    }
}
</style>