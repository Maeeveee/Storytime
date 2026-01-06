<template>
    <div>
        <NuxtLink href="/login" class="login__button">Login</NuxtLink>
        
    </div>
</template>

<style scoped lang="scss">
.login {
    &__button {
        width: 60px;
        height: 32px;
        padding: 14px 30px 14px 30px;
        background-color: #466543;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        border: #466543 2px solid;
        color: white;
        text-decoration: none;
        font-size: x-large;

        &:hover {
            background-color: #3b5338;
            cursor: pointer;
        }
    }
}
</style>