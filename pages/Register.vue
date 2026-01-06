<script setup lang="ts">
import ImageRegister from '~/components/section/register/ImageRegister.vue';
import FormRegister from '~/components/section/register/FormRegister.vue';

definePageMeta({
    layout: 'blank'
});
</script>

<template>
    <div class="auth-container">
        <ImageRegister />
        <FormRegister />
    </div>
</template>