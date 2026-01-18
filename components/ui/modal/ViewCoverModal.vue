<script setup lang="ts">

const emit = defineEmits<{
    close: [];
}>();

function handleCancel() {
    emit('close');
}

</script>
<template>
    <div class="modal">
        <div class="modal__wrapper">
            <div class="modal__cancel">
                <button class="modal__cancel__button" @click="handleCancel">
                    <Icon class="modal__cancel__icon" name="iconoir:xmark" />
                </button>
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
    padding: fluid(30, 60);
    border-radius: fluid(8, 8);
    z-index: 1;
    margin: auto;
    max-width: fluid(350, 900);
    width: 100%;
    background-color: var(--color-white);
    border: 1px solid var(--color-border);

    @include desktop {
        top: vw(120);
        left: vw(500);
        position: fixed;
    }

    @include tablet {
        max-width: 90%;
        padding: fluid(20, 40);
    }

    &__cancel {
        @include desktop {
            display: flex;
            justify-content: end;
            position: fixed;
            top: vw(140);
            right: vw(400);
        }

        @include tablet {
            display: flex;
            justify-content: flex-end;
            position: relative;
            top: auto;
            right: auto;
            margin-bottom: fluid(10, 15);
        }

        &__button {
            width: fluid(30, 40);
            height: fluid(30, 40);
            background-color: var(--color-primary);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;

            &:hover {
                cursor: pointer;
                background-color: var(--color-primary-dark);
            }

            @include tablet {
                display: flex;
            }

            @include mobile {
                display: none;
            }
        }

        &__icon {
            font-size: fluid(20, 30);
            color: var(--color-white);
        }
    }

    &__wrapper {
        @include desktop {
            display: flex;
            flex-direction: column;
        }

        @include tablet {
            display: flex;
            flex-direction: column;
        }
    }

    &__main-image {
        margin: auto;
        width: fluid(300, 900);
        height: fluid(200, 500);
        border-radius: fluid(8, 8);

        @include tablet {
            width: 100%;
            height: auto;
        }
    }

    &__secondary-image {
        &--active {
            border-radius: fluid(8, 8);
            opacity: 1;
            width: fluid(60, 202);
            height: fluid(60, 200);

            @include tablet {
                width: 80px;
                height: 80px;
            }
        }

        &--inactive {
            border-radius: fluid(8, 8);
            opacity: 0.6;
            width: fluid(60, 202);
            height: fluid(60, 200);

            @include tablet {
                width: 80px;
                height: 80px;
            }

            @include desktop {
                &:hover {
                    transform: scale(1.1);
                    transition: ease 0.2s;
                }
            }
        }
    }

    &__flex-image {
        margin-top: fluid(20, 30);
        display: flex;
        justify-content: center;
        gap: fluid(20, 30);

        @include tablet {
            gap: fluid(10, 15);
            flex-wrap: wrap;
        }
    }
}
</style>