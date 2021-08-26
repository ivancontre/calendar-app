import { ModalActionTypes, uiCloseModal, uiOpenModal } from './types';

export const openModal = (): ModalActionTypes => {
    return {
        type: uiOpenModal
    }
};

export const closeModal = (): ModalActionTypes => {
    return {
        type: uiCloseModal
    }
};