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
    &__mobile {
        @include tablet {
            display: none;
        }

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