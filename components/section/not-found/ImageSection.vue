<template>
    <section class="image-section">
        <img src="/img/404.webp" alt="not found image" class="image-section__image" />
    </section>
</template>
<style scoped lang="scss">
.image-section {
    display: flex;
    justify-content: center;
    align-items: center;

    @include tablet {
        display: none;
    }

    &__image {
        max-width: fluid(400, 832);
        max-height: fluid(256, 512);
    }
}
</style>