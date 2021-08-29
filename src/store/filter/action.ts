import { FilterActionTypes, filterAddUser, filterUserReset, FilterUser } from "./types";

export const addUserFilter = (ids: FilterUser[]): FilterActionTypes => {
    return {
        type: filterAddUser,
        payload: ids
    }
};

export const resetUserFilter = (): FilterActionTypes => {
    return {
        type: filterUserReset
    }
};
