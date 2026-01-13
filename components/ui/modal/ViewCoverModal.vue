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
            <img src="/img/solid.webp" alt="Main Image" class="modal__main-image">
            <div class="modal__flex-image">
                <img src="/img/solid.webp" alt="Secondary Image" class="modal__secondary-image--inactive">
                <img src="/img/solid.webp" alt="Secondary Image" class="modal__secondary-image--active">
                <img src="/img/solid.webp" alt="Secondary Image" class="modal__secondary-image--inactive">
                <img src="/img/solid.webp" alt="Secondary Image" class="modal__secondary-image--inactive">
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.overlay {
    @include desktop {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.85);
    }
}

.modal {
    padding: 60px;

    @include desktop {
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
    }

    &__cancel {
        @include desktop {
            display: flex;
            justify-content: end;
            position: fixed;
            top: 140px;
            right: 400px;
        }

        &__button {
            @include desktop {
                width: 40px;
                height: 40px;
                background-color: var(--color-primary);
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;

                &:hover {
                    cursor: pointer;
                }
            }
        }

        &__icon {
            @include desktop {
                font-size: 30px;
                color: var(--color-white);
            }
        }
    }

    &__wrapper {
        @include desktop {
            display: flex;
            flex-direction: column;
        }
    }

    &__main-image {
        @include desktop {
            margin: auto;
            width: 900px;
            height: 500px;
            border-radius: 8px;
        }
    }

    &__secondary-image {
        &--active {
            @include desktop {
                width: 202px;
                height: 200px;
                border-radius: 8px;
                opacity: 1;
            }
        }

        &--inactive {
            @include desktop {
                width: 202px;
                height: 200px;
                border-radius: 8px;
                opacity: 0.6;
            }
        }
    }

    &__flex-image {
        @include desktop {
            margin-top: 30px;
            display: flex;
            justify-content: center;
            gap: 30px;
        }
    }
}
</style>