<script setup lang="ts">
defineProps<{ placeholder: string, iconUrl: string }>();
</script>

<template>
    <div>
        <input type="text" :placeholder="placeholder" class="input" />
    </div>
</template>

<style scoped lang="scss">
.input {
    border: 2px solid #CCCCCC;
    width: 517px;
    height: 23px;
    border-radius: 10px;
    padding: 24px 30px 24px 30px;
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 24px;
    line-height: 32px;
    background-image: url();
    background-repeat: no-repeat;
    background-position: right 20px center;
    background-size: 30px;

    &:focus {
        outline: none;
    }

}
</style>