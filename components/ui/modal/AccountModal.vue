<script setup lang="ts">
</script>
<template>
    <div class="modal">
        <NuxtLink to="/dashboard/" class="modal__button">
            <h5 class="modal__text">Profile</h5>
        </NuxtLink>
        <NuxtLink to="/register" class="modal__button">
            <h5 class="modal__text">
                Logout
            </h5>
        </NuxtLink>
    </div>
</template>
<style scoped lang="scss">
.modal {
    max-width: 185px;
    background-color: white;
    position: absolute;
    border-radius: 8px;
    border: 1px solid var(--color-border);
    &__button {
        width: 100%;
        border: none;
        border-radius: 8px;
        background-color: white;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__text {
        padding-block: 16px;
        padding-inline: 20px;
        font-weight: 500;
        font-size: 20px;
        line-height: 26px;
        color: var(--color-text);
    }
}
</style>