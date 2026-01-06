<script setup lang="ts">
defineProps<{ category: string }>();
</script>

<template>
    <div class="categories__button">
        <a href="" class="categories__text">{{ category }}</a>
    </div>
</template>

<style lang="scss" scoped>
.categories {
    &__text {
        text-decoration: none;
        color: #466543;

        &:hover {
            color: black;

        }
    }

    &__button {
        width: 255px;
        height: 158px;
        background-color: #F0F5ED;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 12px;

        &:hover {
            background-color: #D9E6D3;

        }
    }
}
</style>