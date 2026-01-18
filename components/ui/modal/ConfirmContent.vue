<script setup lang="ts">
import Button from '../Button.vue';

interface Props {
    title?: string;
    message?: string;
    confirmText?: string;
    cancelText?: string;
    confirmVariant?: 'primary' | 'secondary' | 'danger';
}

withDefaults(defineProps<Props>(), {
    title: 'Confirmation',
    message: 'Are you sure?',
    confirmText: 'Yes',
    cancelText: 'Cancel',
    confirmVariant: 'primary',
});

const emit = defineEmits<{
    close: [];
    confirm: [];
}>();
</script>
<template>
    <div class="confirm-modal">
        <h2 class="confirm-modal__title">{{ title }}</h2>
        <p class="confirm-modal__message">{{ message }}</p>
        <div class="confirm-modal__actions">
            <Button variant="secondary" @click="emit('close')">
                {{ cancelText }}
            </Button>
            <Button variant="primary" @click="emit('confirm')">
                {{ confirmText }}
            </Button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.confirm-modal {
    text-align: center;
    min-width: fluid(320, 320);

    @include tablet {
        min-width: auto;
        max-width: 100%;
    }

    &__title {
        font-weight: 700;
        color: var(--color-text);
        font-size: fluid(28, 28);
        line-height: fluid(36, 36);
        margin-bottom: fluid(16, 16);

        @include tablet {
            font-size: fluid(24, 26);
        }
    }

    &__message {
        font-weight: 400;
        color: var(--color-text-secondary);
        font-size: fluid(18, 18);
        line-height: fluid(27, 27);
        margin-bottom: fluid(30, 30);
    }

    &__actions {
        display: flex;
        justify-content: center;
        gap: fluid(20, 20);

        @include tablet {
            flex-wrap: wrap;
        }
    }
}
</style>