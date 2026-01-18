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
    left: 35%;
    z-index: 2000;
    display: flex;
    flex-direction: column;
    top: fluid(20, 20);
    gap: fluid(12, 12);
    width: fluid(300, 600);

    @include tablet {
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
        max-width: 400px;
    }

    @include mobile {
        left: vw-mobile(20);
        right: vw-mobile(20);
    }
}

.toast {
    display: flex;
    align-items: center;
    background-color: var(--color-white);
    border-radius: fluid(8, 8);
    box-shadow: 0 fluid(4, 4) fluid(12, 12) rgba(0, 0, 0, 0.15);
    gap: fluid(12, 12);
    padding: fluid(16, 16) fluid(20, 20);
    max-width: fluid(500, 500);

    @include tablet {
        min-width: unset;
        width: 100%;
        max-width: 100%;
    }

    @include mobile {
        min-width: unset;
        width: 100%;
    }

    @include desktop {
        min-width: fluid(300, 300);
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
        flex-shrink: 0;
        font-size: fluid(24, 24);
    }

    &__message {
        flex-grow: 1;
        font-weight: 500;
        color: var(--color-text);
        font-size: fluid(16, 16);
    }

    &__close {
        background: none;
        border: none;
        cursor: pointer;
        color: var(--color-text-secondary);
        flex-shrink: 0;
        font-size: fluid(18, 18);
        padding: fluid(4, 4);

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