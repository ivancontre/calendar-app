import moment from 'moment';
import { CalendarActionTypes, calendarAddNew, CalendarEv, calendarSetActive} from "./types";


const events: CalendarEv[] = [{
    title: 'Cumpleaños del jefe',
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
            }

        case calendarSetActive:
            return {
                ...state,
                activeEvent: action.payload
            }
        default:
            return state;
    }

};