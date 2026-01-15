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

    @include mobile {
        gap: vw-mobile(20);
    }

    &__pagination {
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        transition: background-color 0.3s, color 0.3s;

        @include desktop {
            font-size: vw(28);
            line-height: vw(38);
            padding: vw(16) vw(30);
        }

        @include mobile {
            font-size: vw-mobile(14);
            line-height: vw-mobile(19);
            padding: vw-mobile(8) vw-mobile(15);
        }

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