export const uiOpenModal = '[ui] Open modal';
export const uiCloseModal = '[ui] Close modal';

export interface ModalState {
    modalOpen: boolean;
};

export interface ModalOpenAction {
    type: typeof uiOpenModal;
};

export interface ModalCloseAction {
    type: typeof uiCloseModal;
};

export type ModalActionTypes = ModalOpenAction | ModalCloseAction;