<script setup lang="ts">
defineProps<{ category: string }>();
</script>

<template>
    <div class="categories-button">
        <a href="" class="categories-text">{{ category }}</a>
    </div>
</template>

<style lang="scss" scoped>
.categories-text {
    text-decoration: none;
    color: #466543;
}

.categories-text:hover {
    color: black;
}

.categories-button {
    width: 255px;
    height: 158px;
    background-color: #F0F5ED;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
}

.categories-button:hover{
    background-color: #D9E6D3;
}
</style>