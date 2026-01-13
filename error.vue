<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
</script>

<template>
    <NuxtLayout>
        <main class="not-found__container">
            <SectionNotFoundImageSection class="device__mobile" />
            <SectionNotFoundContentSection :status-code="error.statusCode" />
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
            padding-top: 150px;
        }

        @include desktop {
            margin-top: 170px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding-top: 170px;
        }
    }
}
</style>