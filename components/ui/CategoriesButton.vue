<script setup lang="ts">
defineProps<{ category?: string }>();
</script>

<template>
    <div>
        <NuxtLink href="" class="categories__button">{{ category }}</NuxtLink>
    </div>
</template>

<style lang="scss" scoped>
.categories {
    &__button {
        color: #466543;
        width: 135px;
        height: 38px;
        padding: 60px;
        background-color: #F0F5ED;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 12px;

        font-size: 28px;
        font-weight: 500;
        &:hover {
            background-color: #D9E6D3;
            color: black;
            cursor: pointer;
        }
    }
}
</style>