<script setup lang="ts">
import MyStory from '~/components/section/profile/myStory.vue';
import Button from '~/components/ui/Button.vue';
import EditProfileModal from '~/components/ui/modal/EditProfileModal.vue';

function editProfile() {
    document.getElementById("modal-content")?.classList.toggle("modal__show")
}

</script>
<template>
    <main class="dashboard">
        <div class="dashboard__header">
            <div class="dashboard__profile-section">
                <img class="dashboard__profile-image" src="" alt="">
                <div class="dashboard__profile-user">
                    <h2 class="dashboard__title">rizal</h2>
                    <h4 class="dashboard__email">rizal@gmail.com</h4>
                    <h4 class="dashboard__user-description">sang penulis</h4>
                </div>
                <Button action="#" @click="editProfile" variant="primary">Edit Profile</Button>
                <div class="modal">
                    <EditProfileModal id="modal-content" class="modal__content" />
                </div>
            </div>
        </div>
        <div>
            <MyStory />
        </div>
    </main>
</template>
<style lang="scss" scoped>
@media screen and (max-width: 768px) {
    .dashboard {
        &__header {
            height: 150px;
            background-color: var(--color-primary-light);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        &__profile-section {
            margin: auto;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

        &__profile-image {
            margin: auto;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            border: 1px solid var(--color-primary);
        }

        &__profile-user {
            display: flex;
            flex-direction: column;
        }

        &__title {
            font-weight: 700;
            font-size: 24px;
            line-height: 24px;
            color: var(--color-text);
            margin-bottom: 8px;
        }

        &__email {
            font-weight: 400;
            font-size: 16px;
            line-height: 16px;
            color: var(--color-text);
            margin-bottom: 8px;
        }

        &__user-description {
            font-weight: 400;
            font-size: 16px;
            line-height: 16px;
            color: var(--color-text-secondary);
        }
    }
}

@media screen and (min-width: 768px) {
    .modal {
        &__content {
            display: none;
        }

        &__show {
            display: block;
        }

    }

    .dashboard {
        margin-top: 100px;

        &__header {
            width: 1920px;
            height: 400px;
            background-color: var(--color-primary-light);
        }

        &__profile-section {
            max-width: 1700px;
            margin: auto;
            display: flex;
            gap: 39px;
            align-items: center;
            padding: 100px 240px;
        }

        &__profile-image {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            border: 1px solid var(--color-primary);
        }

        &__profile-user {
            width: 976.5px;
            display: flex;
            flex-direction: column;
        }

        &__title {
            font-weight: 700;
            font-size: 36px;
            line-height: 46px;
            color: var(--color-text);
            margin-bottom: 10px;
        }

        &__email {
            font-weight: 400;
            font-size: 24px;
            line-height: 32px;
            color: var(--color-text);
            margin-bottom: 30px;
        }

        &__user-description {
            font-weight: 400;
            font-size: 24px;
            line-height: 32px;
            color: var(--color-text-secondary);
        }
    }
}
</style>