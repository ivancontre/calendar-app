import moment from 'moment'
import { CalendarEv } from "../store/calendar/types";

export const prepareCalendarEvs = (calendarEvs: CalendarEv[]) => {
    return calendarEvs.map( e => {
        return {
            ...e,
            start: moment(e.start).toDate(),
            endDate: moment(e.endDate).toDate()
        }
    });
};