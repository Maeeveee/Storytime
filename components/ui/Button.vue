<script setup lang="ts">
defineProps<{ to?: string, variant?: 'primary' | 'secondary' }>()
</script>

<template>
    <NuxtLink v-if="to" :to="to" class="button" :class="[`button--${variant ?? 'primary'}`]">
        <slot />
    </NuxtLink>
    <button v-else class="button" :class="[`button--${variant ?? 'primary'}`]" v-bind="$attrs">
        <slot />
    </button>
</template>

<style scoped lang="scss">
.button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    text-decoration: none;
    cursor: pointer;

    @include mobile {
        padding: 10px 24px;
        font-size: 18px;
    }

    @include desktop {
        padding: 14px 30px;
        font-size: 24px;
    }

    &__navigation {
        height: 32px;
    }

    &--primary {
        background-color: var(--color-primary);
        border: 2px solid var(--color-primary);
        color: var(--color-white);

        &:hover {
            background-color: var(--color-primary-dark);
        }
    }

    &--secondary {
        background-color: transparent;
        border: 2px solid var(--color-primary);
        color: var(--color-primary);

        &:hover {
            border-color: var(--color-text);
            color: var(--color-text);
        }
    }
}
</style>