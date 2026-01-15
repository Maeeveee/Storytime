<script setup lang="ts">
import type { NuxtError } from '#app'
import ContentSection from './components/section/notFound/ContentSection.vue';
import ImageSection from './components/section/notFound/ImageSection.vue';
const props = defineProps<{ error: NuxtError }>()
</script>

<template>
    <NuxtLayout>
        <main class="not-found__container">
            <ImageSection class="device__mobile" />
            <ContentSection :status-code="error.statusCode" />
        </main>
    </NuxtLayout>
</template>

<style scoped lang="scss">
.device {
    &__mobile {
        @include mobile {
            display: none;
        }
    }
}

.not-found {
    &__container {
        display: flex;
        justify-content: center;
        align-items: center;

        @include mobile {
            padding-top: vw-mobile(150);
        }

        @include desktop {
            display: grid;
            margin-top: vw(170);
            padding-top: vw(170);
            grid-template-columns: 1fr 1fr;
        }
    }
}
</style>