export const authLogin = '[auth] Login';
export const authStartRegister = '[auth] Start Register';
export const authChecking = '[auth] Cheking login state';
export const authCheckingFinish = '[auth] Finish cheking login state';
export const authLogout = '[auth] Logout';
export const authStartRenewToken = '[auth] Start renew token';

export interface CalendarUser {
    _id: string;
    name: string;
    email: string;
    checking?: boolean;
};

export interface AuthLogin {    
    type: typeof authLogin,
    payload: CalendarUser
};

export interface AuthCheckingFinish {    
    type: typeof authCheckingFinish
};

export interface AuthLogout {    
    type: typeof authLogout
};

export type AuthActionTypes = AuthLogin | AuthCheckingFinish | AuthLogout;