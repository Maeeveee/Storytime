<script setup lang="ts">
import RegisterButton from '~/components/ui/RegisterButton.vue';
import LoginButton from '~/components/ui/LoginButton.vue';
</script>

<template>
    <div class="nav">
        <div>
            <img src="/img/Logo.webp" alt="Logo Storytime" class="nav__logo">
        </div>

        <div class="nav__button-container">
            <RegisterButton />
            <LoginButton />
        </div>
    </div>
</template>

<style scoped lang="scss">
.nav {
    display: flex;
    justify-content: space-between;
    padding: 20px 110px 20px 110px;
    min-width: 1700px;
    height: 60px;
    margin: auto;
    position: fixed;
    background-color: white;
    border-bottom: #f3f3f3 3px solid;

    &__button-container {
        display: flex;
        gap: 30px;
    }

    &__logo {
        height: 59px;
        width: 254;
    }
}
</style>