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
    border-radius: 8px;
    width: 100%;
    height: 100%;

    @include mobile {
        padding: 15px;
        font-size: 18px;
        line-height: 20px;
    }

    @include desktop {
        padding: 24px 30px;
        font-size: 24px;
        line-height: 32px;
    }

    &--primary {
        max-height: 23px;

        &:focus {
            border-color: var(--color-primary);
        }
    }

    &--secondary {
        max-height: 32px;
    }

    &--with-icon {
        @include mobile {
            padding-right: 50px;
        }

        @include desktop {
            padding-right: 60px;
        }
    }

    &:focus {
        outline: none;
    }

    &__icon {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        color: var(--color-text-secondary);

        @include mobile {
            font-size: 25px;
        }

        @include desktop {
            font-size: 30px;
        }
    }

    &__wrapper {
        position: relative;
        width: 100%;
        display: flex;
    }
}
</style>
