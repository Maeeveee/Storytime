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

    @include desktop {
        padding: vw(24) vw(30);
        font-size: vw(24);
        line-height: vw(32);
    }

    @include mobile {
        padding: vw-mobile(15);
        font-size: vw-mobile(18);
        line-height: vw-mobile(20);
    }

    &--primary {
        @include desktop {
            max-height: vw(23);
        }

        @include mobile {
            max-height: vw-mobile(23);
        }


        &:focus {
            border-color: var(--color-primary);
        }
    }

    &--secondary {
        @include desktop {
            max-height: vw(32);
        }

        @include mobile {
            max-height: vw-mobile(32);
        }
    }

    &--with-icon {
        @include desktop {
            padding-right: vw(60);
        }

        @include mobile {
            padding-right: vw-mobile(50);
        }
    }

    &:focus {
        outline: none;
    }

    &__icon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        color: var(--color-text-secondary);

        @include desktop {
            font-size: vw(30);
            right: vw(20);
        }

        @include mobile {
            font-size: vw-mobile(25);
            right: vw-mobile(20);
        }
    }

    &__wrapper {
        position: relative;
        width: 100%;
        display: flex;
    }
}
</style>
