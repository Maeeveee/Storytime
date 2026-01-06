<script setup lang="ts">
import RegisterButton from '~/components/ui/RegisterButton.vue';

</script>

<template>
    <div class="nav">
        <div>
            <img src="/img/Logo.webp" alt="Logo Storytime">
        </div>

        <div class="button-container">
            <RegisterButton/>
            <LoginButton />
        </div>
    </div>
</template>

<style scoped lang="scss">
.nav {
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
    padding-left: 80px;
    padding-right: 80px;
    height: 100px;
}

.title {
    font-size: large;
    font-weight: bold;
}

.button-container {
    display: flex;
    gap: 10px;
}

img {
    height: 60px;
    width: auto;
}
</style>