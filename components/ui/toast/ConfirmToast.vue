<script setup lang="ts">
defineProps<{ text: string }>();
</script>
<template>
    <div class="toast">
        <div class="toast__content">
            <Icon class="toast__content__icon--primary" name="lucide:circle-check-big" />
            <h5 class="toast__content__text">{{ text }}</h5>
        </div>
        <Icon class="toast__content__icon--secondary" name="formkit:close" />
    </div>
</template>
<style scoped lang="scss">
.toast {
    width: 600px;
    height: 70px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;

    &__content {
        display: flex;
        align-items: center;
        gap: 16px;

        &__icon {
            width: 30px;
            height: 30px;

            &--primary {
                color: var(--color-primary);
            }

            &--secondary {
                margin-left: 104.5px;
                color: var(--color-text-secondary)
            }
        }

        &__text {
            font-weight: 700;
            font-size: 20px;
            line-height: 26px;
        }
    }
}
</style>
