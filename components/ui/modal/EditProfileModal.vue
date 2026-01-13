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
            <div class="modal__content__left">
                <div class="modal__content__image-section">
                    <img src="/img/user.webp" alt="user profile" class="modal__content__image-section__image">
                    <Button class="modal__content__image-section__button" variant="secondary">Change Picture</Button>
                </div>
                <div class="modal__content__profile-section">
                    <label for="name" class="modal__content__profile-section__label">
                        <span>Name</span>
                        <InputForm placeholder="Rizal" variant="primary"></InputForm>
                    </label>
                    <label for="email" class="modal__content__profile-section__label">
                        <span>Email</span>
                        <InputForm placeholder="rizalabrarfsl@gmail.com" variant="primary"></InputForm>
                    </label>
                    <label for="about" class="modal__content__profile-section__label">
                        <span>About Me</span>
                        <InputForm
                            placeholder="Avid reader and aspiring writer. Lover of mysteries, thrillers, and sci-fi. Coffee enthusiast and nature explorer. Always on the lookout for new stories and adventures."
                            variant="primary"></InputForm>
                    </label>
                </div>
            </div>

            <div class="modal__content__right">
                <h2 class="modal__content__right__title">Change Password</h2>
                <label for="name" class="modal__content__profile-section__label">
                    <span>Old Password</span>
                    <InputForm placeholder="Enter your old password" variant="primary"></InputForm>
                </label>
                <label for="name" class="modal__content__profile-section__label">
                    <span>New Password</span>
                    <InputForm placeholder="Enter your new password" variant="primary"></InputForm>
                </label>
                <label for="name" class="modal__content__profile-section__label">
                    <span>Confirm New Password</span>
                    <InputForm placeholder="Re-enter your new password" variant="primary"></InputForm>
                </label>
            </div>
        </div>

        <div class="modal__footer">
            <Button class="" variant="secondary">Cancel</Button>
            <Button class="" variant="primary">Update Profile</Button>
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
        z-index: 1;
        top: 120px;
        left: 250px;
        margin: auto;
        padding: 40px;
        max-width: 1430px;
        width: 100%;
        height: 100%;
        position: fixed;
        border-radius: 8px;
        background-color: var(--color-white);
        border: 1px solid var(--color-border);

        &__header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1430px;
            width: 100%;

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

        &__content {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
            &__image-section {
                display: flex;
                align-items: center;
                gap: 30px;
                margin-bottom: 30px;

                &__image {
                    max-width: 200px;
                    max-height: 200px;
                    width: 100%;
                    height: 100%;
                }
            }

            &__profile-section {
                &__label {
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 30px;
                    gap: 20px;
                    font-weight: 400;
                    font-size: 18px;
                    line-height: 23px;
                    color: var(--color-text-secondary);
                }

            }

            &__right{
                &__title{
                    font-weight: 700;
                    font-size: 36px;
                    line-height: 46px;
                    margin-bottom: 30px;
                }
            }
        }

        &__footer {
            display: flex;
            gap: 44px;
        }

    }
}
</style>