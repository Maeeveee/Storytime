<script setup lang="ts">
import RegisterButton from '~/components/ui/RegisterButton.vue';
import LoginButton from '~/components/ui/LoginButton.vue';
</script>

<template>
    <div class="nav">
        <div>
            <img src="/img/Logo.webp" alt="Logo Storytime">
        </div>

        <div class="button-container">
            <RegisterButton/>
            <LoginButton/>
        </div>
    </div>
    <div class="sparator">
    
    </div>
</template>

<style scoped lang="scss">
.nav {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    padding-left: 110px;
    padding-right: 110px;
    height: 80px;
    width: 1700px;
}

.title {
    font-size: large;
    font-weight: bold;
}

.button-container {
    display: flex;
    gap: 30px;
}

img {
    height: 60px;
    width: auto;
}

.sparator {
    border-bottom: #f3f3f3 3px solid;
}
</style>