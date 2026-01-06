<script setup lang="ts">
import ImageLogin from '~/components/section/login/ImageLogin.vue';
import FormLogin from '~/components/section/login/FormLogin.vue';

definePageMeta({
    layout: 'blank'
});
</script>

<template>
    <div class="auth-container">
        <FormLogin />
        <ImageLogin />
    </div>
</template>