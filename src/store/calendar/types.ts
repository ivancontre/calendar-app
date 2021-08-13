export const calendarAddNew = '[calendar] Add new';
export const calendarSetActive = '[calendar] Set active';

interface CalendarUser {
    _id: string;
    name: string;
};

export interface CalendarEv {
    id?: string;
    title: string;
    start: Date;
    endDate: Date;
    user: CalendarUser;
    notes: string;
};

export interface CalendarState {
    events: CalendarEv[];
    activeEvent: CalendarEv
};

export interface CalendarAddNewAction {    
    type: typeof calendarAddNew,
    payload: CalendarEv
};

export interface CalendarSetActiveAction {    
    type: typeof calendarSetActive,
    payload: CalendarEv
};

export type CalendarActionTypes = CalendarAddNewAction | CalendarSetActiveAction;