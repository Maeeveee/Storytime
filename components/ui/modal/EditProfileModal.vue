<script setup lang="ts">
import Button from '../Button.vue';
import InputForm from '../InputForm.vue';
import type { User, UpdateProfilePayload, ChangePasswordPayload} from '~/types/api';

const { $api } = useNuxtApp()
const user = ref<User | null>(null)
const isLoading = ref(true)

const name = ref(user.value?.name);
const email = ref(user.value?.email);
const about = ref(user.value?.about);
const profileImage = ref(user.value?.profile_image)
const oldPassword = ref('');
const newPassword = ref('');
const confirmPassword = ref('');

const files = ref();
const success = ref();
const error = ref();

function onFileChange(e: any) {
  const file = e.target.files[0];
  profileImage.value = URL.createObjectURL(file);
}

const fetchUser = async () => {
    try {
        isLoading.value = true
        const response = await $api.user.me()
        user.value = response.data
    } catch (error) {
        console.error('failed to fetch user', error)
    } finally {
        isLoading.value = false
    }
}

onMounted(() => {
    fetchUser()
})

const emit = defineEmits<{
    close: [];
    confirm: [];
}>();

const handleUpdate = async () => {
    isLoading.value = true
    try {
        const payload: UpdateProfilePayload = {
            name: name.value,
            about: about.value!,
        }
        const payload2: ChangePasswordPayload = {
            old_password: oldPassword.value,
            new_password: newPassword.value,
            new_password_confirmation: confirmPassword.value
        }
        const response = await $api.user.updateProfile(payload)
        const response2 = await $api.user.changePassword(payload2)
    } catch (error) {
        console.error('error update profle', error)
    }

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
                    <img id="imagePreview" :src="profileImage!" alt="user profile" class="edit-profile__avatar">
                    <label class="pictureButton">
                        <input type="file" id="fileInput" @change="onFileChange" accept="image/png, image/jpg, image/jpeg">
                        Change Picture
                    </label>
                </div>

                <div class="edit-profile__fields">
                    <label class="edit-profile__label">
                        <span>Name</span>
                        <InputForm v-model="name" :placeholder=user?.name! variant="primary" />
                    </label>
                    <label class="edit-profile__label">
                        <span>Email</span>
                        <InputForm v-model="email" :placeholder=user?.email! variant="primary" />
                    </label>
                    <label class="edit-profile__label">
                        <span>About Me</span>
                        <InputForm v-model="about!" :placeholder=user?.about! variant="primary" />
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
input[type="file"] {
    display: none;
}

.pictureButton {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    font-family: var(--font-primary);
    border-radius: fluid(8, 8);
    padding: fluid(10, 14) fluid(24, 30);
    font-size: fluid(18, 24);
    background-color: transparent;
    border: 2px solid var(--color-primary);
    color: var(--color-primary);

    &:hover {
        border-color: var(--color-text);
        color: var(--color-text);
    }

    @include tablet {
        padding: fluid(10, 12) fluid(20, 24);
        font-size: fluid(16, 20);
    }
}

.edit-profile {
    width: 100%;
    min-width: fluid(800, 800);
    max-width: fluid(1200, 1200);

    @include tablet {
        min-width: auto;
        max-width: 100%;
    }

    &__title {
        font-weight: 700;
        color: var(--color-text);
        font-size: fluid(36, 36);
        line-height: fluid(46, 46);
        margin-bottom: fluid(40, 40);

        @include tablet {
            font-size: fluid(28, 32);
            text-align: center;
        }
    }

    &__subtitle {
        font-weight: 700;
        font-size: fluid(28, 28);
        line-height: fluid(36, 36);
        margin-bottom: fluid(30, 30);

        @include tablet {
            font-size: fluid(22, 26);
        }
    }

    &__content {
        display: grid;
        gap: fluid(30, 30);

        @include desktop {
            grid-template-columns: 1fr 1fr;
        }

        @include tablet {
            grid-template-columns: 1fr;
        }
    }

    &__image-section {
        display: flex;
        align-items: center;
        gap: fluid(30, 30);
        margin-bottom: fluid(30, 30);

        @include tablet {
            flex-direction: column;
            text-align: center;
        }
    }

    &__avatar {
        border-radius: 50%;
        object-fit: cover;
        width: fluid(150, 150);
        height: fluid(150, 150);

        @include tablet {
            width: 100px;
            height: 100px;
        }
    }

    &__fields {
        display: flex;
        flex-direction: column;
        gap: fluid(20, 20);
    }

    &__label {
        display: flex;
        flex-direction: column;
        font-weight: 400;
        color: var(--color-text-secondary);
        gap: fluid(8, 8);
        font-size: fluid(16, 16);
    }

    &__actions {
        display: flex;
        justify-content: flex-start;
        gap: fluid(20, 20);
        margin-top: fluid(40, 40);

        @include tablet {
            justify-content: center;
            flex-wrap: wrap;
        }
    }
}
</style>