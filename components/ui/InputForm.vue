<script setup lang="ts">
defineProps<{ placeholder: string, iconName?:string }>();
const model = defineModel<string>();
</script>

<template>
    <div class="input__wrapper">
        <input v-model="model" type="text" :placeholder="placeholder" class="input" :class="{'input--with-icon': iconName}" />
        <Icon class="input__icon" v-if="iconName" :name="iconName" />
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

    &--with-icon {
        padding-right: 60px;
    }

    &:focus {
        outline: none;
    }

    &__icon {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 30px;
        color: #4b4b4b;
    }

    &__wrapper{
        width: fit-content;
        position: relative;
    }

}
</style>