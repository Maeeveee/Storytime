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

    @include desktop {
        padding: vw(14) vw(30);
        font-size: vw(24);
    }

    @include mobile {
        padding: vw-mobile(10) vw-mobile(24);
        font-size: vw-mobile(18);
    }

    &__navigation {
        @include desktop {
            height: vw(32);
        }

        @include mobile {
            height: vw-mobile(32);
        }
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