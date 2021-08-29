import { FilterActionTypes, filterAddUser, FilterState, filterUserReset } from "./types";

const initialState: FilterState = {
    users: []
};

export const filterReducer = (state: typeof initialState = initialState, action: FilterActionTypes): FilterState => {

    switch (action.type) {

        case filterAddUser:
            return {
                ...state,
                users: [...action.payload]

            };

        case filterUserReset:
            return {
                ...initialState
            };
    
        default:
            return state;
    }

};