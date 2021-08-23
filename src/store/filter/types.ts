export const filterAddUser = '[filter] Add user';
export const filterDeleteUser = '[filter] Delete user';

export interface FilterState {
    users: string[];
};

export interface FilterAddUserAction {
    type: typeof filterAddUser;
    payload: string[];
};

export interface FilterDeleteUserAction {
    type: typeof filterDeleteUser;
    payload: string;
};


export type FilterActionTypes = FilterAddUserAction | FilterDeleteUserAction;