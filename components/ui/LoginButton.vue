<template>
    <div>
        <a href="" class="login__button">Login</a>
    </div>
</template>

<style scoped lang="scss">
.login {
    &__button {
        width: 120px;
        height: 60px;
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