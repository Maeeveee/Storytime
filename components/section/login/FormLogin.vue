<script setup lang="ts">
import LoginButton from '~/components/ui/LoginButton.vue';
import InputForm from '~/components/ui/InputForm.vue';
</script>

<template>
    <div class="login__form-section">
        <img src="/img/logo.webp" alt="Image Login">
        <h2 class="login__title">Login</h2>
        <div class="login__form">
            <div>
                <span class="login__text">Email</span>
                <InputForm placeholder="Enter your email" />
            </div>
            <div>
                <span class="login__text">Password</span>
                <InputForm placeholder="Enter your chosen password" />
            </div>
        </div>
        <LoginButton />
        <div>
            <span class="login__text">Don't have an account? <NuxtLink class="login__navigate-login" to="/register">Register</NuxtLink></span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.login {
    &__form-section {
        height: 950px;
        max-width: 825px;
        padding: 2rem 4rem 2rem 4rem;
    }
    
    &__form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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