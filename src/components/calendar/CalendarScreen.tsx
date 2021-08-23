import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer, SlotInfo } from 'react-big-calendar';
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
import { setActive, startLoad } from '../../store/calendar/actions';
import { AddNewFab } from '../ui/AddNewFab';
import { RootState } from '../../store';
import { DeleteFab } from '../ui/DeleteFab';
import { Filter } from '../filter/Filter';


export const CalendarScreen: React.FC = () => {

    moment.locale('es');
    const localizer = momentLocalizer(moment);

    const [lastView, setLastView] = useState<View>(localStorage.getItem('lastView') as View || 'month');
    const [eventsFiltered, setEventsFiltered] = useState<Array<CalendarEv>>([]);

    const dispatch = useDispatch();   

    useEffect(() => {
        dispatch(startLoad());
    }, [dispatch]);     

    const { calendar, auth } = useSelector((state: RootState) => state);

    useEffect(() => {

        setEventsFiltered(calendar.events);
        
    }, [calendar.events]);

    const eventsAll: CalendarEv[] = calendar.events;

    const { users } = useSelector((state: RootState) => state.filter);

    useEffect(() => {

        const events: CalendarEv[] = users.length ? eventsAll.filter(event => users.includes(event.user._id)) : eventsAll;
        setEventsFiltered(events);   

    }, [users, eventsAll]);

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
            backgroundColor: auth._id === event.user._id ? '#367CF7': '#465660',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        };

        return {
            style
        };
    };  
    
    const onSelectSlot = (info: SlotInfo) => {
        const item: CalendarEv = {
            title: '',
            start: info.start as Date,
            endDate: info.end as Date,
            user: {
                _id: auth._id,
                name: auth.name,
                email: auth.email
            },
            notes: ''
        }
        dispatch(setActive(item));
        dispatch(openModal());

    };
    
    return (
        <div className="calendar-screen">
            <Navbar />

            <Filter />

            <Calendar
                localizer={ localizer }
                events={ eventsFiltered }
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
                onSelectSlot={ onSelectSlot }
                selectable={ true }
            />

            <CalendarModal />

            <AddNewFab />
            { calendar.activeEvent?.id && <DeleteFab /> }

        </div>
    )
};