<script setup lang="ts">
import type { NuxtError } from '#app'
import ContentSection from './components/section/not-found/ContentSection.vue';
import ImageSection from './components/section/not-found/ImageSection.vue';
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
        @include tablet {
            display: none;
        }

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
        margin-top: fluid(100, 170);
        padding-top: fluid(100, 170);
        padding-inline: fluid(20, 40);
        max-width: fluid(375, 1700);
        margin-left: auto;
        margin-right: auto;

        @include desktop {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        @include tablet {
            flex-direction: column;
            margin-top: fluid(60, 100);
            padding-top: fluid(60, 100);
        }
    }
}
</style>