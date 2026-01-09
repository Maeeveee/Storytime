<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
</script>

<template>
    <NuxtLayout>
        <main class="not-found__container">
            <SectionNotFoundImageSection />
            <SectionNotFoundContentSection :status-code="error.statusCode" />
        </main>
    </NuxtLayout>
</template>

<style scoped lang="scss">
.not-found {
    &__container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding-top: 170px;
    }
}
</style>