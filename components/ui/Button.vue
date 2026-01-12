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
@media screen and (max-width: 768px) {
    .button {
        padding: 10px 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        text-decoration: none;
        font-size: 18px;
        cursor: pointer;

        &__navigation {
            height: 32px;
        }


        &--primary {
            background-color: #466543;
            border: 2px solid #466543;
            color: white;

            &:hover {
                background-color: #3b5338;
            }
        }

        &--secondary {
            background-color: transparent;
            border: 2px solid #466543;
            color: #466543;

            &:hover {
                border-color: #000000;
                color: #000000;
            }
        }
    }
}

@media screen and (min-width: 768px) {
    .button {
        padding: 14px 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        text-decoration: none;
        font-size: 24px;
        cursor: pointer;

        &__navigation {
            height: 32px;
        }


        &--primary {
            background-color: #466543;
            border: 2px solid #466543;
            color: white;

            &:hover {
                background-color: #3b5338;
            }
        }

        &--secondary {
            background-color: transparent;
            border: 2px solid #466543;
            color: #466543;

            &:hover {
                border-color: #000000;
                color: #000000;
            }
        }
    }
}
</style>