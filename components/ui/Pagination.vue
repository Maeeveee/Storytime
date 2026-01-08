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

    &__pagination {
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 28px;
        line-height: 38px;
        font-weight: 700;
        padding: 16px 30px;
        transition: background-color 0.3s, color 0.3s;

        &--active {
            background-color: var(--color-primary);
            color: white;

        }

        &--inactive {
            background-color: var(--color-primary-light);
            color: var(--color-text);

            &:hover {
                background-color: var(--color-primary);
                color: white;
                cursor: pointer;
            }
        }
    }

}
</style>