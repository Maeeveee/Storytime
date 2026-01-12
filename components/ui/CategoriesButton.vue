<script setup lang="ts">
defineProps<{ category?: string }>();
</script>

<template>
    <div class="categories">
        <NuxtLink to="/story/" class="categories__button">{{ category }}</NuxtLink>
    </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
    .categories {
        &__button {
            color: #466543;
            padding-inline: 20px;
            padding-block: 40px;
            background-color: #F0F5ED;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 12px;
            text-decoration: none;
            font-size: 28px;
            font-weight: 500;

            &:hover {
                background-color: #D9E6D3;
                color: black;
                cursor: pointer;
            }

        }
    }
}

@media screen and (min-width: 768px) {
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
            text-decoration: none;
            font-size: 28px;
            font-weight: 500;

            &:hover {
                background-color: #D9E6D3;
                color: black;
                cursor: pointer;
            }

        }
    }
}
</style>