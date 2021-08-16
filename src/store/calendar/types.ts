export const calendarAddNew = '[calendar] Add new';
export const calendarSetActive = '[calendar] Set active';
export const calendarClearActive = '[calendar] Clear active';
export const calendarUpdate = '[calendar] Update';
export const calendarDelete = '[calendar] Delete';

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

export interface CalendarClearActiveAction {
    type: typeof calendarClearActive
};

export interface CalendarUpdateAction {
    type: typeof calendarUpdate,
    payload: CalendarEv
};

export interface CalendarDeleteAction {
    type: typeof calendarDelete,
    payload: string
};

export type CalendarActionTypes = CalendarAddNewAction | CalendarSetActiveAction | CalendarClearActiveAction | CalendarUpdateAction | CalendarDeleteAction;