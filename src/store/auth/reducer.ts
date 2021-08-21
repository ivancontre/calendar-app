import { AuthActionTypes, authCheckingFinish, authLogin, authLogout } from "./types";

const initialState = {
    checking: true,
    //uid: null,
    //name: null
};


export const authReducer = (state = initialState, action: AuthActionTypes) => {
    switch (action.type) {
        case authLogin:
            return {
                ...state,
                ...action.payload,
                checking: false                
            };

        case authCheckingFinish:
            return {
                ...state,
                checking: false
            };
        
            case authLogout:
                return {
                   checking: false 
                };
    
        default:
            return state;
    }
};