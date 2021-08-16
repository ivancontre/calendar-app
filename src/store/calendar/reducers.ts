import moment from 'moment';
import { CalendarActionTypes, calendarAddNew, calendarClearActive, calendarDelete, CalendarEv, calendarSetActive, calendarUpdate} from "./types";


const events: CalendarEv[] = [{
    id: new Date().getTime().toString(),
    title: 'Supermercado',
    start: moment().toDate(),
    endDate: moment().add(2, 'hours').toDate(),
    user: {
        _id: '123',
        name: 'Kuky'
    },
    notes: 'Comprar pan'
}];

const initialState = {
    events,
    activeEvent: null
};

export const calendarReducer = (state = initialState, action: CalendarActionTypes) => {

    switch (action.type) {
        case calendarAddNew:
            return {
                ...state,
                events: [action.payload, ...state.events]
            };

        case calendarSetActive:
            return {
                ...state,
                activeEvent: action.payload
            };

        case calendarClearActive:
            return {
                ...state,
                activeEvent: null
            };

        case calendarUpdate:
            return {
                ...state,
                events: state.events.map(
                    (e: CalendarEv) => (e.id === action.payload.id) ? action.payload : e
                )
            };

        case calendarDelete:
            return {
                ...state,
                events: state.events.filter((e: CalendarEv) => e.id !== action.payload),
                activeEvent: null
            }
        default:
            return state;
    }

};