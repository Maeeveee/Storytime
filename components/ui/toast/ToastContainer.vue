<script setup lang="ts">
const { toasts, remove } = useToast();

const iconMap: Record<string, string> = {
    success: 'lucide:circle-check-big',
    error: 'lucide:circle-x',
    warning: 'lucide:triangle-alert',
    info: 'lucide:info',
};
</script>

<template>
    <Teleport to="body">
        <div class="toast-container">
            <TransitionGroup name="toast">
                <div v-for="toast in toasts" :key="toast.id" class="toast" :class="`toast--${toast.type}`">
                    <Icon class="toast__icon" :name="iconMap[toast.type]" />
                    <span class="toast__message">{{ toast.message }}</span>
                    <button class="toast__close" @click="remove(toast.id)">
                        <Icon name="formkit:close" />
                    </button>
                </div>
            </TransitionGroup>
        </div>
    </Teleport>
</template>


<style scoped lang="scss">
.toast-container {
    position: fixed;
    top: 20px;
    left: 35%;
    z-index: 2000;
    display: flex;
    flex-direction: column;
    gap: 12px;

    @include desktop {
        width: 600px;
    }

    @include mobile {
        width: 300px;
        left: 20px;
        right: 20px;
    }
}

.toast {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 20px;
    background-color: var(--color-white);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    min-width: 300px;
    max-width: 500px;

    @include mobile {
        min-width: unset;
        width: 100%;
    }

    &--success {
        .toast__icon {
            color: var(--color-primary);
        }
    }

    &--error {
        .toast__icon {
            color: #dc3545;
        }
    }

    &--warning {
        .toast__icon {
            color: #ffc107;
        }
    }

    &--info {
        .toast__icon {
            color: #0dcaf0;
        }
    }

    &__icon {
        font-size: 24px;
        flex-shrink: 0;
    }

    &__message {
        flex-grow: 1;
        font-weight: 500;
        font-size: 16px;
        color: var(--color-text);
    }

    &__close {
        background: none;
        border: none;
        cursor: pointer;
        color: var(--color-text-secondary);
        font-size: 18px;
        padding: 4px;
        flex-shrink: 0;

        &:hover {
            color: var(--color-text);
        }
    }
}

.toast-enter-active,
.toast-leave-active {
    transition: all 0.3s ease;
}

.toast-enter-from {
    opacity: 0;
    transform: translateX(100%);
}

.toast-leave-to {
    opacity: 0;
    transform: translateX(100%);
}

.toast-move {
    transition: transform 0.3s ease;
}
</style>