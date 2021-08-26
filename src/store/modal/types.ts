export const uiOpenModal = '[ui] Open modal';
export const uiCloseModal = '[ui] Close modal';

export type ModalState = {
    modalOpen: boolean;
};

type ModalOpenAction = {
    type: typeof uiOpenModal;
};

type ModalCloseAction = {
    type: typeof uiCloseModal;
};

export type ModalActionTypes = ModalOpenAction | ModalCloseAction;