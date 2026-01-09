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
    width: 401px;
    height: 263px;
    padding: 40px;

    &__header {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 30px;

        &__title {
            font-weight: 700;
            font-size: 36px;
            line-height: 46px;
            color: var(--color-text);
        }

        &__description {
            font-weight: 400;
            font-size: 18px;
            line-height: 27px;
            color: var(--color-text);
        }
    }

    &__button {
        display: flex;
        gap: 44px;
    }

}
</style>