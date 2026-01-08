<script setup lang="ts">

</script>

<template>
    <div class="breadcrumb__wrapper">
    <NuxtLink to="/" class="breadcrumb__text">Home</NuxtLink> <span class="breadcrumb__text">/</span> <NuxtLink to="#" class="breadcrumb__text">title</NuxtLink>
    </div>
</template>

<style scoped lang="scss">
    .breadcrumb{
        &__wrapper{
            height: 82px;
            margin-top: 100px;
            background-color: var(--color-primary-light) ;
            display: flex;
            align-items: center;
            padding-inline: 40px;
        }

        &__text{
            font-weight: 500;
            font-size: 20px;
            line-height: 26px;
            color: var(--color-primary);
            text-decoration: none;
            margin-right: 16px;
        }
        
    }

</style>