export const filterAddUser = '[filter] Add user';
export const filterDeleteUser = '[filter] Delete user';
export const filterUserReset = '[filter] Reset user';

export type FilterUser = {
    _id: string;
    name: string;
}

export type FilterState = {
    users: FilterUser[];
};

type FilterAddUserAction = {
    type: typeof filterAddUser;
    payload: FilterUser[];
};

type FilterUserReset = {
    type: typeof filterUserReset;
}

export type FilterActionTypes = FilterAddUserAction | FilterUserReset;