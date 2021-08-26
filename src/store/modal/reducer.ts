import { ModalActionTypes, ModalState, uiCloseModal, uiOpenModal } from "./types";

const initialState: ModalState = {
    modalOpen: false
};

export const modalReducer = (state: typeof initialState = initialState, action: ModalActionTypes): ModalState => {

    switch (action.type) {
        case uiOpenModal:            
            return {
                ...state,
                modalOpen: true
            };

        case uiCloseModal:        
            return {
                ...state,
                modalOpen: false
            };
    
        default:
            return state;
    }

};