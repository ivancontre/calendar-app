import React, { FC, useState } from 'react';
import { Calendar, momentLocalizer  } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';
import { View, stringOrDate } from 'react-big-calendar';
import { CalendarEv } from '../../config/react-big-calendar';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';

export const CalendarScreen: FC = () => {

    moment.locale('es');
    const localizer = momentLocalizer(moment);

    const [lastView, setLastView] = useState<View>(localStorage.getItem('lastView') as View || 'month');

    const onDoubleClick = (event: CalendarEv): void => {
        console.log(event);

    };

    const onSelectEvent = (event: CalendarEv): void => {
        console.log(event);

    };

    const onViewChange = (view: View): void => {
        console.log(view);
        setLastView(view);
        localStorage.setItem('lastView', view);
    };

    const eventStyleGetter = (event: CalendarEv, start: stringOrDate, end: stringOrDate, isSelected: boolean): Object => {
        const style: Object = {
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

    const item: CalendarEv = {
        title: 'Cumpleaños del jefe',
        start: moment().toDate(),
        endDate: moment().add(2, 'hours').toDate(),
        user: {
            _id: '123',
            name: 'Kuky'
        },
        notes: 'Comprar pan'
    };

    const events: CalendarEv[] = [
        item

        /*

        title: 'Cumpleaños del jefe',
        start: moment().toDate(),
        end: moment().add(2, 'hours').toDate(),
        bgColor: '#fafafa',
        notes: 'Comprar pastel',
        user: {
            _id: '123',
            name: 'Kuky'
        }*/
    ];
    
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

        </div>
    )
};