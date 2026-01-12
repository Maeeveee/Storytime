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
@media screen and (max-width: 768px) {
    .device {
        &__mobile {
            display: none;
        }
    }

    .not-found {
        &__container {
            display: flex;
            justify-content: center;
            align-items: center;
            grid-template-columns: 1fr 1fr;
            padding-top: 150px;
        }
    }
}

@media screen and (min-width: 768px) {
    .not-found {
        &__container {
            margin-top: 170px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding-top: 170px;
        }
    }
}
</style>