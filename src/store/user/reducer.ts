import { UserActionTypes, usersLoad, UserState } from "./types";

const initialState: UserState = {
    users: []
};

export const userReducer = (state: typeof initialState = initialState, action: UserActionTypes): UserState => {

    switch (action.type) {

        case usersLoad:
            return {
                ...state,
                users: [...action.payload]
            }
    
        default:
            return state;
    }

};