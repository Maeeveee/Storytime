<script setup lang="ts">
    import ExploreMoreButton from '~/components/ui/ExploreMoreButton.vue';
</script>

<template>
    <div class="MasonryHeader">
        <h2 class="title">Comedy</h2>
        <ExploreMoreButton/>
    </div>

    <hr>

    <div>
        content
    </div>
</template>

<style lang="scss" scoped>
.MasonryHeader {
    display: flex;
    justify-content: space-between;
}

.title {
    font-size: xx-large;
    font-weight: bold;
}

hr {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    border: none;
    border-top: 1px solid #ccc;
}
</style>