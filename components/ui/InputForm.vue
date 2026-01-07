<script setup lang="ts">
defineProps<{ placeholder: string, iconName?:string, variant?: 'primary' | 'secondary' }>();
const model = defineModel<string>();
</script>

<template>
    <div class="input__wrapper">
        <input v-model="model" type="text" :placeholder="placeholder" class="input" :class="[`input--${variant ?? 'primary'}`]" />
        <Icon class="input__icon" v-if="iconName" :name="iconName" />
    </div>
</template>

<style scoped lang="scss">
.input {
    border: 2px solid #CCCCCC;
    border-radius: 8px;
    padding: 24px 30px 24px 30px;
    font-size: 24px;
    line-height: 32px;
    width: 100%;
    height: 100%;
    
    &--primary{
        max-height: 23px;

        &:focus {
            border-color: #466543;
        }
    }

    &--secondary{
        max-height: 32px;
    }

    &:focus {
        outline: none;
    }

    &__icon {
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 30px;
        color: #4b4b4b;
    }

    &__wrapper{
        position: relative;
    }

}
</style>
