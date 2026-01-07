<script setup lang="ts">
</script>
<template>
    <div>
        <div class="register__form-section">
            <h2 class="register__title">Create Account</h2>
            <div>
                <label class="register__label">
                    <span class="register__text">Name</span>
                    <UiInputForm placeholder="Enter Your name" variant="primary" />
                </label>
                <label class="register__label">
                    <span class="register__text">Email</span>
                    <UiInputForm placeholder="Enter Your Email" variant="primary"/>
                </label>
                <label class="register__label">
                    <span class="register__text">Password</span>
                    <UiInputForm placeholder="Enter Your Chosen Password" variant="primary" icon-name="formkit:eye"/>
                </label>
                <label class="register__label">
                    <span class="register__text">Confirm Password</span>
                    <UiInputForm placeholder="Re-enter Your Chosen Password" variant="primary" icon-name="formkit:eye"/>
                </label>
            </div>
            <UiAuthButton to="/register" variant="primary" class="register__button"> Create Account</UiAuthButton>
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
        margin-bottom: 43px;
        max-width: 178px;
        width: 100%;
        max-height: 32px;
        height: 100%;
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
</style>