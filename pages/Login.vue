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
        <ImageLogin class="device__mobile" />
    </main>
</template>

<style scoped lang="scss">
.device {
    &__mobile {
        @include mobile {
            display: none;
        }
    }

    &__desktop {
        @include desktop {
            display: block;
        }
    }
}
</style>