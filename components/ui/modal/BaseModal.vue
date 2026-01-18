<script setup lang="ts">
const { state, close, confirm } = useModal();

onMounted(() => {
    window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown);
});

function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && state.isOpen) {
        close();
    }
}

function handleBackdropClick(e: MouseEvent) {
    if (e.target === e.currentTarget) {
        close();
    }
}
</script>
<template>
    <Teleport to="body">
        <Transition name="modal">
            <div v-if="state.isOpen" class="modal-backdrop" @click="handleBackdropClick">
                <div class="modal-container">
                    <button class="modal-close" @click="close" aria-label="Close modal">
                        <Icon name="iconoir:xmark" />
                    </button>

                    <component v-if="state.component" :is="state.component" v-bind="state.props" @close="close"
                        @confirm="confirm" />

                    <slot v-else />
                </div>
            </div>
        </Transition>
    </Teleport>
</template>
<style scoped lang="scss">
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-container {
    position: relative;
    background-color: var(--color-white);
    max-width: 90vw;
    max-height: 90vh;
    overflow-y: auto;
    border-radius: fluid(8, 8);
    padding: fluid(40, 40);
    box-shadow: 0 fluid(4, 4) fluid(20, 20) rgba(0, 0, 0, 0.15);
}

.modal-close {
    position: absolute;
    top: 0;
    right: 0;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--color-text-secondary);
    transition: color 0.2s;
    font-size: fluid(24, 24);
    margin-top: fluid(10, 10);
    margin-right: fluid(10, 10);

    &:hover {
        color: var(--color-text);
    }
}

.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
    transition: transform 0.3s ease;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
    transform: scale(0.9);
}
</style>