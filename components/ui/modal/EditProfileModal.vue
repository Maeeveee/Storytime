<script setup lang="ts">
import Button from '../Button.vue';
import InputForm from '../InputForm.vue';

const emit = defineEmits<{
    close: [];
    confirm: [];
}>();


const name = ref('Rizal');
const email = ref('rizalabrarfsl@gmail.com')
const about = ref('Avid reader and aspiring writer...');
const oldPassword = ref('');
const newPassword = ref('');
const confirmPassword = ref('');

function handleUpdate() {
    emit('confirm');
}

function handleCancel() {
    emit('close');
}
</script>

<template>
    <div class="edit-profile">
        <h2 class="edit-profile__title">Edit Profile</h2>

        <div class="edit-profile__content">
            <div class="edit-profile__left">
                <div class="edit-profile__image-section">
                    <img src="/img/user.webp" alt="user profile" class="edit-profile__avatar">
                    <Button variant="secondary">Change Picture</Button>
                </div>

                <div class="edit-profile__fields">
                    <label class="edit-profile__label">
                        <span>Name</span>
                        <InputForm v-model="name" placeholder="Rizal" variant="primary" />
                    </label>
                    <label class="edit-profile__label">
                        <span>Email</span>
                        <InputForm v-model="email" placeholder="rizalabrarfsl@gmail.com" variant="primary" />
                    </label>
                    <label class="edit-profile__label">
                        <span>About Me</span>
                        <InputForm v-model="about" placeholder="Write about you" variant="primary" />
                    </label>
                </div>
            </div>

            <div class="edit-profile__right">
                <h2 class="edit-profile__subtitle">Change Password</h2>
                <label class="edit-profile__label">
                    <span>Old Password</span>
                    <InputForm v-model="oldPassword" type="password" placeholder="Enter your old password"
                        variant="primary" />
                </label>
                <label class="edit-profile__label">
                    <span>New Password</span>
                    <InputForm v-model="newPassword" type="password" placeholder="Enter your new password"
                        variant="primary" />
                </label>
                <label class="edit-profile__label">
                    <span>Confirm New Password</span>
                    <InputForm v-model="confirmPassword" type="password" placeholder="Re-enter your new password"
                        variant="primary" />
                </label>
            </div>
        </div>

        <div class="edit-profile__actions">
            <Button variant="secondary" @click="handleCancel">Cancel</Button>
            <Button variant="primary" @click="handleUpdate">Update Profile</Button>
        </div>
    </div>
</template>
<style scoped lang="scss">
.edit-profile {
    width: 100%;
    
    @include desktop {
        min-width: 800px;
        max-width: 1200px;
    }

    &__title {
        font-weight: 700;
        font-size: 36px;
        line-height: 46px;
        color: var(--color-text);
        margin-bottom: 40px;
    }

    &__subtitle {
        font-weight: 700;
        font-size: 28px;
        line-height: 36px;
        margin-bottom: 30px;
    }

    &__content {
        display: grid;
        gap: 30px;
        
        @include desktop {
            grid-template-columns: 1fr 1fr;
        }
    }

    &__image-section {
        display: flex;
        align-items: center;
        gap: 30px;
        margin-bottom: 30px;
    }

    &__avatar {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
    }

    &__fields {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    &__label {
        display: flex;
        flex-direction: column;
        gap: 8px;
        font-weight: 400;
        font-size: 16px;
        color: var(--color-text-secondary);
    }

    &__actions {
        display: flex;
        justify-content: flex-start;
        gap: 20px;
        margin-top: 40px;
    }
}
</style>