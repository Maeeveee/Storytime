<script setup lang="ts">
import InputForm from '~/components/ui/InputForm.vue';
import LoginButton from '~/components/ui/LoginButton.vue';
</script>
<template>
    <div>
        <div class="register__form-section">
            <h2 class="register__title">Create Account</h2>
            <div>
                <span class="register__text">Name</span>
                <InputForm placeholder="Enter Your name" icon-name="formkit:eye" />
            </div>
            <div>
                <span class="register__text">Email</span>
                <InputForm placeholder="Enter Your Email"  />
            </div>
            <div>
                <span class="register__text">Password</span>
                <InputForm placeholder="Enter Your Chosen Password" />

            </div>
            <div>
                <span class="register__text">Confirm Password</span>
                <InputForm placeholder="Re-enter Your Chosen Password" />
            </div>

            <LoginButton class="register__button" />
            <div>
                <span class="register__text">Already have an account? <NuxtLink href="/Login"
                        class="register__navigate-login">Login</NuxtLink></span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
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
        margin-bottom: 50px;
    }

    &__navigate-login {
        font-weight: 700;
        text-decoration: none;
        color: #466543;
        margin-top: 30px;
    }
}
</style>