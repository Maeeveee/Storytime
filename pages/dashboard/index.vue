<script setup lang="ts">
import MyStory from '~/components/section/profile/MyStory.vue';
import Button from '~/components/ui/Button.vue';
import EditProfileModal from '~/components/ui/modal/EditProfileModal.vue';

const isLoading = ref(true)

const userStore = useUserStore();

const modal = useModal();
const toast = useToast();

function editProfile() {
    modal.open({
        component: EditProfileModal,
        props: {
            user: userStore.user
        },
        onConfirm: () => {
            toast.success('Successfully edit your profile')
            userStore.fetchUser()
        },
    });
}
</script>
<template>
    <main class="dashboard">
        <div class="dashboard__header">
            <div class="dashboard__profile-section">
                <img class="dashboard__profile-image" :src="userStore.userProfileImage" alt="Profile image">
                <div class="dashboard__profile-user">
                    <h2 class="dashboard__title">{{ userStore.userName}}</h2>
                    <h4 class="dashboard__email">{{ userStore.userEmail}}</h4>
                    <h4 class="dashboard__user-description">{{ userStore.userAbout }}</h4>
                </div>
                <Button @click="editProfile" variant="primary" :disabled="isLoading">Edit Profile</Button>
            </div>
        </div>
        <div>
            <MyStory />
        </div>
    </main>
</template>
<style lang="scss" scoped>
.dashboard {
    @include desktop{
        margin-top: vw(50);
    }

    @include tablet {
        margin-top: fluid(40, 60);
    }

    &__header {
        background-color: var(--color-primary-light);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: fluid(150, 400);

        @include tablet {
            height: fluid(200, 300);
        }
    }

    &__profile-section {
        margin: auto;
        align-items: center;
        max-width: fluid(375, 1700);
        gap: fluid(10, 39);
        padding: fluid(20, 100) fluid(20, 40);

        @include desktop {
            display: flex;
        }

        @include tablet {
            display: flex;
            flex-direction: column;
            text-align: center;
        }

        @include mobile {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            justify-content: space-between;
        }
    }

    &__profile-image {
        border-radius: 50%;
        width: fluid(70, 200);
        height: fluid(70, 200);

        @include mobile {
            margin: auto;
        }

        @include tablet {
            width: 120px;
            height: 120px;
        }
    }

    &__profile-user {
        display: flex;
        flex-direction: column;
        width: fluid(200, 976.5);

        @include tablet {
            width: 100%;
            align-items: center;
        }
    }

    &__title {
        font-weight: 700;
        color: var(--color-text);
        font-size: fluid(24, 36);
        line-height: fluid(24, 46);
        margin-bottom: fluid(8, 10);
    }

    &__email {
        font-weight: 400;
        color: var(--color-text);
        font-size: fluid(16, 24);
        line-height: fluid(16, 32);
        margin-bottom: fluid(8, 30);
    }

    &__user-description {
        font-weight: 400;
        color: var(--color-text-secondary);
        font-size: fluid(16, 24);
        line-height: fluid(16, 32);
    }
}
</style>