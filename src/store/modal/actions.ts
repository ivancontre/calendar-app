import { ModalCloseAction, ModalOpenAction, uiCloseModal, uiOpenModal } from "./types"

export const openModal = (): ModalOpenAction => {
    return {
        type: uiOpenModal
    }
};

export const closeModal = (): ModalCloseAction => {
    return {
        type: uiCloseModal
    }
};