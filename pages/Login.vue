<script setup lang="ts">
import FormLogin from '~/components/section/login/FormLogin.vue';
import ImageLogin from '~/components/section/login/ImageLogin.vue';

definePageMeta({
    layout: 'blank'
});
</script>

<template>
    <main class="auth-container">
        <FormLogin />
        <ImageLogin class="device__mobile"/>
    </main>
</template>

<style scoped lang="scss">
.device {
    @media screen and (max-width:768px) {
        &__mobile {
            display: none;
        }
    }

    @media screen and (min-width:768px) {
        &__dekstop {
            display: block;
        }
    }

}
</style>