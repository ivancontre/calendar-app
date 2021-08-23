import { Dispatch } from "react";
import Swal from "sweetalert2";
import { runFetch } from "../../helpers/fetch";
import { CalendarUser } from "../auth/types";
import { UserActionTypes, usersLoad } from "./types";

export const startLoadUsers = () => {
    return async (dispatch: Dispatch<UserActionTypes>) => {

        try {
            
            const token = localStorage.getItem('token') as string;
            const resp = await runFetch('user', {}, 'GET', token);
            const respJson = await resp.json();

            if (respJson.ok) {
                const users: CalendarUser[] = respJson.body.users;
                dispatch(loadUsers(users));
            } else {
                Swal.fire('Error', respJson.msg, 'error');
            }

        } catch (error) {
            console.log(error);
            Swal.fire('Error', 'Error en la aplicación', 'error');
        }

    }
};

const loadUsers = (users: CalendarUser[]): UserActionTypes => {
    return {
        type: usersLoad,
        payload: users
    }
};