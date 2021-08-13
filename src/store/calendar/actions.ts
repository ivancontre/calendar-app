import { calendarAddNew, CalendarAddNewAction, CalendarEv, calendarSetActive, CalendarSetActiveAction } from './types';


export const addNew = (calendarEv: CalendarEv): CalendarAddNewAction => {
    return {
        type: calendarAddNew,
        payload: calendarEv
    }
};

export const setActive = (calendarEv: CalendarEv): CalendarSetActiveAction => {
    return {
        type: calendarSetActive,
        payload: calendarEv
    }
};