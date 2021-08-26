export const filterAddUser = '[filter] Add user';
export const filterDeleteUser = '[filter] Delete user';

export type FilterState = {
    users: string[];
};

type FilterAddUserAction = {
    type: typeof filterAddUser;
    payload: string[];
};

type FilterDeleteUserAction = {
    type: typeof filterDeleteUser;
    payload: string;
};

export type FilterActionTypes = FilterAddUserAction | FilterDeleteUserAction;