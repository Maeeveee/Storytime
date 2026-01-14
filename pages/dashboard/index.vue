<script setup lang="ts">
import MyStory from '~/components/section/profile/MyStory.vue';
import Button from '~/components/ui/Button.vue';
import EditProfileModal from '~/components/ui/modal/EditProfileModal.vue';

const modal = useModal();
const toast = useToast();

function editProfile() {
    modal.open({
        component: EditProfileModal,
        onConfirm: () => {
            toast.success('Successfully edit your profile')
        },
    });
}
</script>
<template>
    <main class="dashboard">
        <div class="dashboard__header">
            <div class="dashboard__profile-section">
                <img class="dashboard__profile-image" src="/img/user.webp" alt="">
                <div class="dashboard__profile-user">
                    <h2 class="dashboard__title">Rizal</h2>
                    <h4 class="dashboard__email">rizal@gmail.com</h4>
                    <h4 class="dashboard__user-description">Sang penulis</h4>
                </div>
                <Button @click="editProfile" variant="primary">Edit Profile</Button>
            </div>
        </div>
        <div>
            <MyStory />
        </div>
    </main>
</template>
<style lang="scss" scoped>
.dashboard {
    @include desktop {
        margin-top: 100px;
    }

    &__header {
        background-color: var(--color-primary-light);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @include mobile {
            height: 150px;
        }

        @include desktop {
            width: 1920px;
            height: 400px;
        }
    }

    &__profile-section {
        margin: auto;
        align-items: center;

        @include mobile {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            justify-content: space-between;
            gap: 10px;
        }

        @include desktop {
            max-width: 1700px;
            display: flex;
            gap: 39px;
            padding: 100px 240px;
        }
    }

    &__profile-image {
        border-radius: 50%;
        border: 1px solid var(--color-primary);

        @include mobile {
            margin: auto;
            width: 70px;
            height: 70px;
        }

        @include desktop {
            width: 200px;
            height: 200px;
        }
    }

    &__profile-user {
        display: flex;
        flex-direction: column;

        @include desktop {
            width: 976.5px;
        }
    }

    &__title {
        font-weight: 700;
        color: var(--color-text);

        @include mobile {
            font-size: 24px;
            line-height: 24px;
            margin-bottom: 8px;
        }

        @include desktop {
            font-size: 36px;
            line-height: 46px;
            margin-bottom: 10px;
        }
    }

    &__email {
        font-weight: 400;
        color: var(--color-text);

        @include mobile {
            font-size: 16px;
            line-height: 16px;
            margin-bottom: 8px;
        }

        @include desktop {
            font-size: 24px;
            line-height: 32px;
            margin-bottom: 30px;
        }
    }

    &__user-description {
        font-weight: 400;
        color: var(--color-text-secondary);

        @include mobile {
            font-size: 16px;
            line-height: 16px;
        }

        @include desktop {
            font-size: 24px;
            line-height: 32px;
        }
    }
}
</style>