import { calendarAddNew, CalendarAddNewAction, calendarClearActive, CalendarClearActiveAction, CalendarEv, calendarSetActive, CalendarSetActiveAction, calendarUpdate, CalendarUpdateAction } from './types';


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

export const clearActive = (): CalendarClearActiveAction => {
    return {
        type: calendarClearActive
    }
};

export const update = (calendarEv: CalendarEv): CalendarUpdateAction => {
    return {
        type: calendarUpdate,
        payload: calendarEv
    }
};