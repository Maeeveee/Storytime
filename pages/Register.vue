<script setup lang="ts">
import ImageRegister from '~/components/section/register/ImageRegister.vue';
import FormRegister from '~/components/section/register/FormRegister.vue';

definePageMeta({
    layout: 'blank'
});
</script>

<template>
    <main class="auth-container">
        <ImageRegister class="device__mobile" />
        <FormRegister />
    </main>
</template>

<style scoped lang="scss">
.device {

    @media screen and (max-width: 768px) {
        &__mobile {
            display: none;
        }
    }

    @media screen and (min-width: 768px) {
        &__dekstop {
            display: block;
        }
    }
}
</style>