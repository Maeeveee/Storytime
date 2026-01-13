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
    title: 'Konfirmasi',
    message: 'Apakah anda yakin?',
    confirmText: 'Ya',
    cancelText: 'Batal',
    confirmVariant: 'primary',
});

const emit = defineEmits<{
    close: [];
    confirm: [];
}>();
</script>
<template>
    <div class="confimr-modal">
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
    min-width: 320px;
    text-align: center;

    &__title {
        font-weight: 700;
        font-size: 28px;
        line-height: 36px;
        color: var(--color-text);
        margin-bottom: 16px;
    }

    &__message {
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        color: var(--color-text-secondary);
        margin-bottom: 30px;
    }

    &__actions {
        display: flex;
        justify-content: center;
        gap: 20px;
    }
}
</style>