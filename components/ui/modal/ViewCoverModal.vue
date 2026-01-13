<script setup lang="ts">

</script>
<template>
    <div class="modal">
        <div class="modal__wrapper">
            <div class="modal__cancel">
                <span class="modal__cancel__button">
                    <Icon class="modal__cancel__icon" name="iconoir:xmark" />
                </span>
            </div>
            <img src="/img/solid.webp" alt="" class="modal__main-image">
            <div class="modal__flex-image">
                <img src="/img/solid.webp" alt="" class="modal__secondary-image">
                <img src="/img/solid.webp" alt="" class="modal__secondary-image">
                <img src="/img/solid.webp" alt="" class="modal__secondary-image">
                <img src="/img/solid.webp" alt="" class="modal__secondary-image">
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
@media screen and (max-width: 768px) {
    .modal {
        padding: 60px;
    }
}

@media screen and (min-width: 768px) {
    .modal {
        padding: 60px;
        border-radius: 8px;
        z-index: 1;
        top: 120px;
        left: 500px;
        margin: auto;
        max-width: 900px;
        width: 100%;
        position: fixed;
        background-color: var(--color-white);
        border: 1px solid var(--color-border);

        &__cancel {
            display: flex;
            justify-content: end;
            position: fixed;
            top: 140px;
            right: 400px;

            &__button {
                width: 40px;
                height: 40px;
                background-color: var(--color-primary);
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            &__icon {
                font-size: 30px;
                color: var(--color-white);
            }
        }

        &__wrapper {
            display: flex;
            flex-direction: column;
        }

        &__main-image {
            margin: auto;
            width: 900px;
            height: 500px;
            border-radius: 8px;
        }

        &__secondary-image {
            width: 202px;
            height: 200px;
            border-radius: 8px;
        }

        &__flex-image {
            margin-top: 30px;
            display: flex;
            justify-content: center;
            gap: 30px;
        }
    }
}
</style>