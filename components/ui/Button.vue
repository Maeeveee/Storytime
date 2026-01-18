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
    text-decoration: none;
    cursor: pointer;
    font-family: var(--font-primary);
    border-radius: fluid(8, 8);
    padding: fluid(10, 14) fluid(24, 30);
    font-size: fluid(18, 24);

    @include tablet {
        padding: fluid(10, 12) fluid(20, 24);
        font-size: fluid(16, 20);
    }

    &__navigation {
        height: fluid(32, 32);
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