import React, { useState } from 'react';
import { Calendar, momentLocalizer, EventPropGetter  } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';
import { View, stringOrDate } from 'react-big-calendar';
import { CalendarEv } from '../../store/calendar/types';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../store/modal/actions';
import { setActive } from '../../store/calendar/actions';
import { AddNewFab } from '../ui/AddNewFab';
import { RootState } from '../../store';

export const CalendarScreen: React.FC = () => {

    moment.locale('es');
    const localizer = momentLocalizer(moment);

    const [lastView, setLastView] = useState<View>(localStorage.getItem('lastView') as View || 'month');

    const dispatch = useDispatch();    

    const { calendar } = useSelector((state: RootState) => state);
    const events: CalendarEv[] = calendar.events;

    const onDoubleClick = (event: CalendarEv): void => {
        dispatch(openModal());
    };

    const onSelectEvent = (event: CalendarEv): void => {
        dispatch(setActive(event));
    };

    const onViewChange = (view: View): void => {
        setLastView(view);
        localStorage.setItem('lastView', view);
    };

    const eventStyleGetter = (event: CalendarEv, start: stringOrDate, end: stringOrDate, isSelected: boolean): React.HTMLAttributes<HTMLDivElement> => {
        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        };

        return {
            style
        };
    };    
    
    return (
        <div className="calendar-screen">
            <Navbar />

            <Calendar
                localizer={ localizer }
                events={ events }
                startAccessor="start"
                endAccessor={(event: CalendarEv) => event.endDate || event.start}
                messages={ messages }
                eventPropGetter={ eventStyleGetter }
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelectEvent }
                onView={ onViewChange }
                view={ lastView }
                components={{
                    event: CalendarEvent
                }}
            />

            <CalendarModal />

            <AddNewFab />

        </div>
    )
};