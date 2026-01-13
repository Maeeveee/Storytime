interface ModalState {
    isOpen: boolean;
    component: Component | null;
    props: Record<string, unknown>;
    onClose?: () => void;
    onConfirm?: () => void;
}

const modalState = reactive<ModalState>({
    isOpen: false,
    component: null,
    props: {},
    onClose: undefined,
    onConfirm: undefined,
});


export function useModal() {
    const open = (options: {
        component?: Component | null;
        props?: Record<string, unknown>;
        onClose?: () => void;
        onConfirm?: () => void;
    } = {}) => {
        modalState.component = options.component || null;
        modalState.props = options.props || {};
        modalState.onClose = options.onClose;
        modalState.onConfirm = options.onConfirm;
        modalState.isOpen = true;
    };

    const close = () => {
        modalState.isOpen = false;
        modalState.component = null;
        modalState.props = {};
        if (modalState.onClose) {
            modalState.onClose();
        }
        modalState.onClose = undefined;
        modalState.onConfirm = undefined;
    };

    const confirm = () => {
        if (modalState.onConfirm) {
            modalState.onConfirm();
        }
        close();
    };

    return {
        state: modalState, open, close, confirm
    };
}

