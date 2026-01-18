<script setup lang="ts">
import Button from '../Button.vue';
</script>
<template>
    <div class="modal">
        <div class="modal__header">
            <h2 class="modal__header__title">Logout</h2>
            <p class="modal__header__description">Are you sure want to logout?</p>
        </div>
        <div class="modal__button">
            <Button to="#" variant="secondary">Cancel</Button>
            <Button to="/" variant="primary">Logout</Button>
        </div>
    </div>
</template>
<style scoped lang="scss">
.modal {
    width: fluid(401, 401);
    height: fluid(263, 263);
    padding: fluid(40, 40);

    @include tablet {
        width: 100%;
        max-width: 360px;
        height: auto;
    }

    &__header {
        display: flex;
        flex-direction: column;
        gap: fluid(20, 20);
        margin-bottom: fluid(30, 30);

        &__title {
            font-weight: 700;
            color: var(--color-text);
            font-size: fluid(36, 36);
            line-height: fluid(46, 46);

            @include tablet {
                font-size: fluid(28, 32);
            }
        }

        &__description {
            font-weight: 400;
            color: var(--color-text);
            font-size: fluid(18, 18);
            line-height: fluid(27, 27);
        }
    }

    &__button {
        display: flex;
        gap: fluid(44, 44);

        @include tablet {
            gap: fluid(20, 30);
            justify-content: center;
        }
    }

}
</style>