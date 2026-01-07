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
        margin-top: 100px;
        display: flex;
        justify-content: space-between;
    }

    &__title {
        font-family: "Playfair Display", serif;
        font-size: 44px;
        font-weight: 600;
        line-height: 58px;
    }
}

hr {
    margin-top: 2rem;
    margin-bottom: 2rem;
    border: none;
    border-top: 1px solid #ccc;
}
</style>