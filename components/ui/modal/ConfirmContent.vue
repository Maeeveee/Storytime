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
    min-width: 320px;
    text-align: center;

    &__title {
        font-weight: 700;
        color: var(--color-text);

        @include desktop {
            font-size: vw(28);
            line-height: vw(36);
            margin-bottom: vw(16);
        }

        @include mobile {
            font-size: vw-mobile(28);
            line-height: vw-mobile(36);
            margin-bottom: vw-mobile(16);
        }
    }

    &__message {
        font-weight: 400;
        color: var(--color-text-secondary);

        @include desktop {
            font-size: vw(18);
            line-height: vw(27);
            margin-bottom: vw(30);
        }

        @include mobile {
            font-size: vw-mobile(18);
            line-height: vw-mobile(27);
            margin-bottom: vw-mobile(30);
        }
    }

    &__actions {
        display: flex;
        justify-content: center;

        @include desktop {
            gap: vw(20);
        }

        @include mobile {
            gap: vw-mobile(20);
        }
    }
}
</style>