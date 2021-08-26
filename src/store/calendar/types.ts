import { CalendarUser } from '../../store/auth/types';

export const calendarStartAddNew = '[calendar] Start add new';
export const calendarAddNew = '[calendar] Add new';
export const calendarSetActive = '[calendar] Set active';
export const calendarClearActive = '[calendar] Clear active';
export const calendarUpdate = '[calendar] Update';
export const calendarDelete = '[calendar] Delete';
export const calendarLoad = '[calendar] Load';
export const calendarReset = '[calendar] Reset';

export type CalendarEv = {
    id?: string;
    title: string;
    start: Date;
    endDate: Date;
    user: CalendarUser;
    notes: string;
};

export type CalendarState = {
    events: CalendarEv[];
    activeEvent: CalendarEv | null
};

type CalendarAddNewAction = {    
    type: typeof calendarAddNew,
    payload: CalendarEv
};

type CalendarSetActiveAction = {    
    type: typeof calendarSetActive,
    payload: CalendarEv
};

type CalendarClearActiveAction = {
    type: typeof calendarClearActive
};

type CalendarUpdateAction = {
    type: typeof calendarUpdate,
    payload: CalendarEv
};

type CalendarDeleteAction = {
    type: typeof calendarDelete,
    payload: string
};

type CalendarLoadAction = {
    type: typeof calendarLoad,
    payload: CalendarEv[]
};

type CalendarResetAction = {
    type: typeof calendarReset
};

export type CalendarActionTypes = CalendarAddNewAction | CalendarSetActiveAction | CalendarClearActiveAction | CalendarUpdateAction | CalendarDeleteAction | CalendarLoadAction | CalendarResetAction;