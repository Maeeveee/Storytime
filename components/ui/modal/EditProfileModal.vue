<script setup lang="ts">
import Button from '../Button.vue';
import InputForm from '../InputForm.vue';
</script>
<template>
    <div class="modal">
        <div class="modal__header">
            <h2 class="modal__header__title">Edit Profile</h2>
            <Icon class="modal__header__icon" name="formkit:close" />
        </div>

        <div class="modal__content">
            <div class="modal__content__image-section">
                <img src="" alt="" class="modal__content__image-section__image">
                <Button class="modal__content__image-section__button"></Button>
            </div>
            <div class="modal__content__profile-section">
                <label for="name" class="">
                    <span>Name</span>
                    <!-- <InputForm></InputForm> -->
                </label>
            </div>
        </div>

        <div class="modal__footer">

        </div>
    </div>
</template>
<style scoped lang="scss">
@media screen and (max-width: 768px) {
    .modal {
        padding: 40px;
    }
}


@media screen and (min-width: 768px) {
    .modal {
        padding: 40px;

        &__header {
            display: flex;
            justify-content: space-between;
            align-items: center;

            &__title {
                font-weight: 700px;
                font-size: 36px;
                line-height: 46px;
                color: var(--color-text);
            }

            &__icon {
                font-size: 30px;
            }

        }
    }
}
</style>