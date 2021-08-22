//import { ThunkDispatch } from "redux-thunk";
import { Dispatch } from "react";
import Swal from "sweetalert2";
import { runFetch } from "../../helpers/fetch";
import { AuthActionTypes, 
        authCheckingFinish, 
        authLogin, 
        authLogout, 
        CalendarUser 
} from "./types";

export const startLogin = (email: string, password: string) => {
    return async (dispatch: Dispatch<AuthActionTypes>) => {

        try {
            const resp = await runFetch('auth', { email, password }, 'POST');
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
            
        } catch (error) {
            console.log(error);
            Swal.fire('Error', 'Error en la aplicación', 'error');
        }
        
    }
};

export const startRegister = (name: string, email: string, password: string) => {
    return async (dispatch: Dispatch<AuthActionTypes>) => {

        try {
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
        } catch (error) {
            console.log(error);
            Swal.fire('Error', 'Error en la aplicación', 'error');
        }
        
    }
};

export const startChecking = () => {
    return async (dispatch: Dispatch<AuthActionTypes>) => {

        try {
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
        } catch (error) {
            console.log(error);
            Swal.fire('Error', 'Error en la aplicación', 'error');
        }        

    }   
};

export const startLogout = () => {
    return (dispatch: Dispatch<AuthActionTypes>) => {
        localStorage.clear();
        dispatch(logout());
    }
};

const checkingFinish = (): AuthActionTypes => {
    return {
        type: authCheckingFinish
    }
};

const login = (user: CalendarUser): AuthActionTypes => {
    return {
        type: authLogin,
        payload: user
    }
};

const logout = (): AuthActionTypes => {
    return {
        type: authLogout
    }
};