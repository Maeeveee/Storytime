<script setup lang="ts">

</script>
<template>
    <div class="modal">
        <div class="modal__wrapper">
            <img src="" alt="" class="modal__main-image">
            <div class="modal__flex-image">
                <img src="" alt="" class="modal__secondary-image">
                <img src="" alt="" class="modal__secondary-image">
                <img src="" alt="" class="modal__secondary-image">
                <img src="" alt="" class="modal__secondary-image">
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
@media screen and (max-width: 768px) {
    .modal {
        padding: 60px;
    }
}

@media screen and (min-width: 768px) {
    .modal {
        padding: 60px;
        border-radius: 8px;

        &__wrapper {
            display: flex;
            flex-direction: column;
        }

        &__main-image {
            width: 900px;
            height: 500px;
            border-radius: 8px;
        }

        &__secondary-image {
            width: 202px;
            height: 200px;
            border-radius: 8px;
        }
    }
}
</style>