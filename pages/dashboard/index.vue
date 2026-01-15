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
        margin-top: vw(100);
    }

    &__header {
        background-color: var(--color-primary-light);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @include desktop {
            width: vw(1920);
            height: vw(400);
        }

        @include mobile {
            height: vw-mobile(150);
        }
    }

    &__profile-section {
        margin: auto;
        align-items: center;

        @include desktop {
            max-width: vw(1700);
            display: flex;
            gap: vw(39);
            padding: vw(100) vw(240);
        }

        @include mobile {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            justify-content: space-between;
            gap: vw-mobile(10);
        }
    }

    &__profile-image {
        border-radius: 50%;
        border: 1px solid var(--color-primary);

        @include desktop {
            width: vw(200);
            height: vw(200);
        }

        @include mobile {
            margin: auto;
            width: vw-mobile(70);
            height: vw-mobile(70);
        }
    }

    &__profile-user {
        display: flex;
        flex-direction: column;

        @include desktop {
            width: vw(976.5);
        }
    }

    &__title {
        font-weight: 700;
        color: var(--color-text);

        @include desktop {
            font-size: vw(36);
            line-height: vw(46);
            margin-bottom: vw(10);
        }

        @include mobile {
            font-size: vw-mobile(24);
            line-height: vw-mobile(24);
            margin-bottom: vw-mobile(8);
        }
    }

    &__email {
        font-weight: 400;
        color: var(--color-text);

        @include desktop {
            font-size: vw(24);
            line-height: vw(32);
            margin-bottom: vw(30);
        }

        @include mobile {
            font-size: vw-mobile(16);
            line-height: vw-mobile(16);
            margin-bottom: vw-mobile(8);
        }
    }

    &__user-description {
        font-weight: 400;
        color: var(--color-text-secondary);

        @include desktop {
            font-size: vw(24);
            line-height: vw(32);
        }

        @include mobile {
            font-size: vw-mobile(16);
            line-height: vw-mobile(16);
        }
    }
}
</style>