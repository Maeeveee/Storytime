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
                <div class="edit-profile__fields">
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
        min-width: vw(800);
        max-width: vw(1200);
    }

    &__title {
        font-weight: 700;
        color: var(--color-text);

        @include desktop {
            font-size: vw(36);
            line-height: vw(46);
            margin-bottom: vw(40);
        }

        @include mobile {
            font-size: vw-mobile(36);
            line-height: vw-mobile(46);
            margin-bottom: vw-mobile(40);

        }
    }

    &__subtitle {
        font-weight: 700;

        @include desktop {
            font-size: vw(28);
            line-height: vw(36);
            margin-bottom: vw(30);
        }

        @include mobile {
            font-size: vw-mobile(28);
            line-height: vw-mobile(36);
            margin-bottom: vw-mobile(30);
        }
    }

    &__content {
        display: grid;

        @include desktop {
            grid-template-columns: 1fr 1fr;
            gap: vw(30);
        }

        @include mobile {
            gap: vw-mobile(30);

        }
    }

    &__image-section {
        display: flex;
        align-items: center;

        @include desktop {
            gap: vw(30);
            margin-bottom: vw(30);
        }

        @include mobile {
            gap: vw-mobile(30);
            margin-bottom: vw-mobile(30);
        }
    }

    &__avatar {
        border-radius: 50%;
        object-fit: cover;

        @include desktop {
            width: vw(150);
            height: vw(150);
        }

        @include mobile {
            width: vw-mobile(150);
            height: vw-mobile(150);
        }
    }

    &__fields {
        display: flex;
        flex-direction: column;

        @include desktop {
            gap: vw(20);
        }

        @include mobile {
            gap: vw-mobile(20);
        }
    }

    &__label {
        display: flex;
        flex-direction: column;
        font-weight: 400;
        color: var(--color-text-secondary);

        @include desktop {
            gap: vw(8);
            font-size: vw(16);
        }

        @include mobile {
            gap: vw-mobile(8);
            font-size: vw-mobile(16);
        }
    }

    &__actions {
        display: flex;
        justify-content: flex-start;

        @include desktop {
            gap: vw(20);
            margin-top: vw(40);
        }

        @include mobile {
            gap: vw-mobile(20);
            margin-top: vw-mobile(40);
        }
    }
}
</style>