<script setup lang="ts">

</script>

<template>
    <main class="not-found__container">
        <SectionNotFoundImageSection />
        <SectionNotFoundContentSection />
    </main>
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