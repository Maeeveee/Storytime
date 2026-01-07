<script setup lang="ts">
</script>

<template>
    <div class="bento__header">
        <h2 class="bento__title">Comedy</h2>
        <UiExploreMoreButton />
    </div>

    <hr>

    <div>
        content
    </div>
</template>

<style lang="scss" scoped>
.bento {
    &__header {
        display: flex;
        justify-content: space-between;
    }

    &__title {
        font-family: "Playfair Display", serif;
        font-size: xx-large;
        font-weight: bold;

    }
}

hr {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    border: none;
    border-top: 1px solid #ccc;
}
</style>