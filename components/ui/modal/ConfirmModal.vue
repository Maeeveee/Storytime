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
    @include desktop {
        width: vw(401);
        height: vw(263);
        padding: vw(40);
    }

    @include mobile {
        width: vw-mobile(401);
        height: vw-mobile(263);
        padding: vw-mobile(40);
    }

    &__header {
        display: flex;
        flex-direction: column;

        @include desktop {
            gap: vw(20);
            margin-bottom: vw(30);
        }

        @include mobile {
            gap: vw-mobile(20);
            margin-bottom: vw-mobile(30);
        }

        &__title {
            font-weight: 700;
            color: var(--color-text);

            @include desktop {
                font-size: vw(36);
                line-height: vw(46);
            }

            @include mobile {
                font-size: vw-mobile(36);
                line-height: vw-mobile(46);
            }
        }

        &__description {
            font-weight: 400;
            color: var(--color-text);

            @include desktop {
                font-size: vw(18);
                line-height: vw(27);
            }

            @include mobile {
                font-size: vw-mobile(18);
                line-height: vw-mobile(27);
            }
        }
    }

    &__button {
        display: flex;

        @include desktop {
            gap: vw(44);
        }

        @include mobile {
            gap: vw-mobile(44);
        }
    }

}
</style>