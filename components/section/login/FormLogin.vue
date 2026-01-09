<script setup lang="ts">
import Button from '~/components/ui/Button.vue';
import InputForm from '~/components/ui/InputForm.vue';
</script>
<template>
    <section class="section-wrapper">
        <div class="login__logo">
            <UiLogo />
        </div>
        <div class="login__wrapper">
            <h2 class="login__title">Login</h2>
            <label for="Email" class="login__label">
                <span>Email</span>
                <InputForm id="Email" placeholder="Enter Your Email" variant="primary" />
            </label>
            <label for="Password" class="login__label">
                <span>Password</span>
                <InputForm id="Password" placeholder="Enter Your Chosen Password" variant="primary" icon-name="formkit:eye" />
            </label>
            <Button action="#" variant="primary" class="login__button"> Login</Button>
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
    height: 910px;
    margin: 20px 20px 20px 20px;
    padding: 2rem 4rem 2rem 4rem;
    border-radius: 8px;
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
        color: #222222;
    }

    &__label {
        font-weight: 400px;
        font-size: 18px;
        line-height: 23px;
        color: #4B4B4B;
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 20px;
    }

    &__navigate-register {
        font-weight: 700;
        text-decoration: none;
        color: #466543;
        margin-top: 30px;
    }

    &__navigate-text {
        font-weight: 400px;
        font-size: 18px;
        line-height: 23px;
        color: #4B4B4B;
    }

    &__button {
        margin-top: 20px;
        margin-bottom: 20px;
        max-width: 120px;
        max-height: 60px;
    }

    &__logo {
        width: 256px;
        height: 59px;
        margin-bottom: 50px;
    }
}
</style>