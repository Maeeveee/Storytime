<template>
    <div class="nav">
        <div>
            <img src="/img/Logo.webp" alt="Logo Storytime" class="nav__logo">
        </div>

        <div class="nav__button-container">
            <UiAuthButton to="/register" variant="secondary">Register</UiAuthButton>
            <UiAuthButton to="/login" variant="primary">Login</UiAuthButton>
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
        height: 59px;
        width: 254px;
    }
}
</style>