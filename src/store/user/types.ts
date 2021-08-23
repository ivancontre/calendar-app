import { CalendarUser } from "../auth/types";

export const usersLoad = '[user] Load users';

export interface UserState {
    users: CalendarUser[];
};

export interface UsersLoadAction {
    type: typeof usersLoad;
    payload: CalendarUser[];
};

export type UserActionTypes = UsersLoadAction;