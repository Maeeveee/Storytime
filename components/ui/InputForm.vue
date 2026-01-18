<script setup lang="ts">
defineProps<{ placeholder: string, iconName?: string, variant?: 'primary' | 'secondary' }>();
const model = defineModel<string>();
</script>

<template>
    <div class="input__wrapper">
        <input v-model="model" type="text" :placeholder="placeholder" class="input"
            :class="[`input--${variant ?? 'primary'}`, iconName ? 'input--with-icon' : '']" />
        <Icon class="input__icon" v-if="iconName" :name="iconName" />
    </div>
</template>

<style scoped lang="scss">
.input {
    border: 2px solid var(--color-border);
    width: 100%;
    height: 100%;
    font-family: var(--font-primary);
    border-radius: fluid(8, 8);
    padding: fluid(15, 24) fluid(15, 30);
    font-size: fluid(18, 24);
    line-height: fluid(20, 32);

    &--primary {
        max-height: fluid(23, 23);

        &:focus {
            border-color: var(--color-primary);
        }
    }

    &--secondary {
        max-height: fluid(32, 32);
    }

    &--with-icon {
        padding-right: fluid(50, 60);
    }

    &:focus {
        outline: none;
    }

    &__icon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        color: var(--color-text-secondary);
        font-size: fluid(25, 30);
        right: fluid(20, 20);
    }

    &__wrapper {
        position: relative;
        width: 100%;
        display: flex;
    }
}
</style>
