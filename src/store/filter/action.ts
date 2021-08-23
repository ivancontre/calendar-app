import { FilterActionTypes, filterAddUser, filterDeleteUser } from "./types";

export const addUserFilter = (ids: string[]): FilterActionTypes => {
    return {
        type: filterAddUser,
        payload: ids
    }
};

export const deleteUserFilter = (id: string): FilterActionTypes => {
    return {
        type: filterDeleteUser,
        payload: id
    }
};
