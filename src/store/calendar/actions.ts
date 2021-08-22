import { Dispatch } from 'react';
import Swal from 'sweetalert2';
import { runFetch } from '../../helpers/fetch';
import { prepareCalendarEvs } from '../../helpers/prepare-events';
import {    CalendarActionTypes, 
            calendarAddNew, 
            calendarClearActive,
            calendarDelete,
            CalendarEv, 
            calendarLoad,
            calendarReset,
            calendarSetActive,
            calendarUpdate
} from './types';


export const startAddNew = (calendarEv: CalendarEv) => {
    return async (dispatch: Dispatch<CalendarActionTypes>) => {

        try {
            
            const token = localStorage.getItem('token') as string;
            const resp = await runFetch('calendar-event', calendarEv, 'POST', token);
            const respJson = await resp.json();

            if (respJson.ok) {
                calendarEv.id = respJson.body.calendarEvent.id;
                dispatch(addNew(calendarEv));
            } else {
                Swal.fire('Error', respJson.msg, 'error');
            }

        } catch (error) {
            console.log(error);
            Swal.fire('Error', 'Error en la aplicación', 'error');
        }

    }
};

export const startLoad = () => {
    return async (dispatch: Dispatch<CalendarActionTypes>) => {

        try {
            const token = localStorage.getItem('token') as string;
            const resp = await runFetch('calendar-event', {}, 'GET', token);
            const respJson = await resp.json();

            if (respJson.ok) {
                dispatch(load(prepareCalendarEvs(respJson.body.calendarEvents)));
            } else {
                Swal.fire('Error', respJson.msg, 'error');
            }

        } catch (error) {
            console.log(error);
            Swal.fire('Error', 'Error en la aplicación', 'error');
        }
    }
};

export const startUpdate = (calendarEv: CalendarEv) => {
    return async (dispatch: Dispatch<CalendarActionTypes>) => {

        try {
            
            const token = localStorage.getItem('token') as string;
            const resp = await runFetch(`calendar-event/${calendarEv.id}`, calendarEv, 'PUT', token);
            const respJson = await resp.json();

            if (respJson.ok) {
                dispatch(update(calendarEv));
            } else {
                Swal.fire('Error', respJson.msg, 'error');
            }

        } catch (error) {
            console.log(error);
            Swal.fire('Error', 'Error en la aplicación', 'error');
        }

    }
};

export const startDelete = (id: string) => {
    return async (dispatch: Dispatch<CalendarActionTypes>) => {

        try {
            const token = localStorage.getItem('token') as string;
            const resp = await runFetch(`calendar-event/${id}`, {}, 'DELETE', token);
            const respJson = await resp.json();

            if (respJson.ok) {
                dispatch(deleteItem(id));
            } else {
                Swal.fire('Error', respJson.msg, 'error');
            }
            
        } catch (error) {
            console.log(error);
            Swal.fire('Error', 'Error en la aplicación', 'error');
        }
    }
};

export const setActive = (calendarEv: CalendarEv): CalendarActionTypes => {
    return {
        type: calendarSetActive,
        payload: calendarEv
    }
};

export const clearActive = (): CalendarActionTypes => {
    return {
        type: calendarClearActive
    }
};

export const reset = (): CalendarActionTypes => {
    return {
        type: calendarReset
    }
};

const addNew = (calendarEv: CalendarEv): CalendarActionTypes => {
    return {
        type: calendarAddNew,
        payload: calendarEv
    }
};

const load = (calendarEvs: CalendarEv[]): CalendarActionTypes => {
    return {
        type: calendarLoad,
        payload: calendarEvs
    }
};

const update = (calendarEv: CalendarEv): CalendarActionTypes => {
    return {
        type: calendarUpdate,
        payload: calendarEv
    }
};

const deleteItem = (id: string): CalendarActionTypes => {
    return {
        type: calendarDelete,
        payload: id
    }
};