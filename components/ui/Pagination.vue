<script setup lang="ts">
const items = [1, 2, 3, 4, 5];
</script>
<template>
    <div class="container">
        <div v-for="item in items" class="container__pagination"
            :class="item === 1 ? 'container__pagination--active' : 'container__pagination--inactive'">
            {{ item }}
        </div>
        <span class="container__pagination container__pagination--inactive">Next</span>
    </div>
</template>
<style scoped lang="scss">
.container {
    display: flex;
    gap: fluid(20, 20);

    &__pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        transition: background-color 0.3s, color 0.3s;
        border-radius: fluid(8, 8);
        font-size: fluid(14, 28);
        line-height: fluid(19, 38);
        padding: fluid(8, 16) fluid(15, 30);

        &--active {
            background-color: var(--color-primary);
            color: var(--color-white);
        }

        &--inactive {
            background-color: var(--color-primary-light);
            color: var(--color-text);

            &:hover {
                background-color: var(--color-primary);
                color: var(--color-white);
                cursor: pointer;
            }
        }
    }
}
</style>