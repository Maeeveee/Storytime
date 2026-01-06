<template>
    <div>
        <a href="" class="register__button">Register</a>
    </div>
</template>

<style scoped lang="scss">
.register {
    &__button {
        width: 151px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: #466543 2px solid;
        border-radius: 8px;
        color: #466543;
        text-decoration: none;
        font-size: x-large;
        &:hover {
            border: #000000 2px solid;
            cursor: pointer;
            color: #000000;
        }
    }
}
</style>