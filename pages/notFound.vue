<script setup lang="ts">
    
</script>

<template >
    <div class="not-found__container">
        <SectionNotFoundImageSection />
        <SectionNotFoundContentSection />
    </div>
</template>

<style scoped lang="scss">
    .not-found{
        &__container{
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding-top: 170px;
        }
    }
</style>