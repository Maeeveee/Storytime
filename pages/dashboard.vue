<script setup lang="ts">
import MyStory from '~/components/section/profile/myStory.vue';
import Button from '~/components/ui/Button.vue';
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
                <Button action="#" variant="primary">Edit Profile</Button>
            </div>
        </div>
        <div>
            <MyStory />
        </div>
    </main>
</template>
<style lang="scss" scoped>
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
</style>