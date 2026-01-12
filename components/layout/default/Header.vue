<script setup lang="ts">
import Logo from '~/components/ui/Logo.vue';
import Button from '~/components/ui/Button.vue';
</script>
<template>
    <div class="nav">
        <Logo class="nav__logo" />


        <Icon name="formkit:open" class="nav__hamburger" />
        <div class="nav__button-container">
            <Button to="/register" variant="secondary">Register</Button>
            <Button to="/login" variant="primary">Login</Button>
        </div>
    </div>
</template>

<style scoped lang="scss">
@media screen and (max-width:768px) {
    .nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 60px;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        background-color: white;
        border-bottom: #f3f3f3 3px solid;
        padding: 20px;

        &__button-container {
            display: none;
        }

        &__logo {
            width: 200px;
            height: 50px;
        }

        &__hamburger {
            display: block;
            font-size: 30px;
        }
    }
}

@media screen and (min-width: 768px) {
    .nav {
        display: flex;
        justify-content: space-between;
        padding: 23px 110px 23px 110px;
        max-width: 1700px;
        height: 60px;
        margin: auto;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        background-color: white;
        border-bottom: #f3f3f3 3px solid;

        &__button-container {
            display: flex;
            gap: 30px;
        }

        &__logo {
            width: 254px;
            height: 59px;
        }

        &__hamburger {
            display: none;
        }

    }

}
</style>