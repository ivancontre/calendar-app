//import { ThunkDispatch } from "redux-thunk";
import Swal from "sweetalert2";
import { runFetch } from "../../helpers/fetch";
import { authCheckingFinish, authLogin, authLogout, CalendarUser } from "./types";

export const startLogin = (email: string, password: string) => {
    return async (dispatch: any) => {
        console.log(email, password);

        const resp = await runFetch('auth', { email, password }, 'POST');
        const respJson = await resp.json();

        console.log(respJson)

        if (respJson.ok) {
            localStorage.setItem('token', respJson.token);
            localStorage.setItem('token-init-date', new Date().getTime().toString());

            dispatch(login({
                _id: respJson.body.uid,
                name: respJson.body.name,
                email: respJson.body.email
            }));
        } else {
            Swal.fire('Error', respJson.msg, 'error')
        }
    }
};

export const startRegister = (name: string, email: string, password: string) => {
    return async (dispatch: any) => {
        const resp = await runFetch('auth/register', { name, email, password }, 'POST');
        const respJson = await resp.json();

        if (respJson.ok) {
            localStorage.setItem('token', respJson.token);
            localStorage.setItem('token-init-date', new Date().getTime().toString());

            dispatch(login({
                _id: respJson.body.uid,
                name: respJson.body.name,
                email: respJson.body.email
            }));

        } else {
            Swal.fire('Error', respJson.msg, 'error');
        }
    }
};

export const startChecking = () => {
    return async (dispatch: any) => {
        const token = localStorage.getItem('token') as string;

        const resp = await runFetch('auth/renew-token',  {}, 'GET', token);
        const respJson = await resp.json();

        if (respJson.ok) {
            localStorage.setItem('token', respJson.token);
            localStorage.setItem('token-init-date', new Date().getTime().toString());

            dispatch(login({
                _id: respJson.body.uid,
                name: respJson.body.name,
                email: respJson.body.email
            }));

        } else {
            dispatch(checkingFinish());
        }

    }   
};

export const startLogout = () => {
    return (dispatch: any) => {
        localStorage.clear();
        dispatch(logout());
    }
};

const checkingFinish = () => {
    return {
        type: authCheckingFinish
    }
};

const login = (user: CalendarUser) => {
    return {
        type: authLogin,
        payload: user
    }
};

const logout = () => {
    return {
        type: authLogout
    }
};