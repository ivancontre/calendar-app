import { CalendarActionTypes, 
        calendarAddNew, 
        calendarClearActive, 
        calendarDelete, 
        CalendarEv, 
        calendarLoad, 
        calendarReset, 
        calendarSetActive, 
        CalendarState, 
        calendarUpdate
} from "./types";

const initialState: CalendarState = {
    events: [],
    activeEvent: null
};

export const calendarReducer = (state: typeof initialState = initialState, action: CalendarActionTypes): CalendarState => {

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
            };

        case calendarLoad:
            return {
                ...state,
                events: [...action.payload]
            };

        case calendarReset:
            return {
                ...initialState
            };

        default:
            return state;
    }

};