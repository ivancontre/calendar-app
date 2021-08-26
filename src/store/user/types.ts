import { CalendarUser } from "../auth/types";

export const usersLoad = '[user] Load users';

export type UserState = {
    users: CalendarUser[];
};

type UsersLoadAction = {
    type: typeof usersLoad;
    payload: CalendarUser[];
};

export type UserActionTypes = UsersLoadAction;