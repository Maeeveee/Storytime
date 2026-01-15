<script setup lang="ts">

</script>

<template>
    <section class="image-section">
        <img src="/img/404.webp" alt="not found image" class="image-section__image" />
    </section>
</template>
<style scoped lang="scss">
    .image-section{
        display: flex;
        justify-content: center;
        align-items: center;

        &__image{
            @include desktop{
                max-width: vw(832);
                max-height: vw(512);
            }
        }
    }
</style>