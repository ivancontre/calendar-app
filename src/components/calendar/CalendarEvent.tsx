import React, { FunctionComponent } from 'react';
import { CalendarEv } from '../../config/react-big-calendar';

interface CalendarEventProps  {
    event: CalendarEv
};

export const CalendarEvent: FunctionComponent<CalendarEventProps> = ({ event }: CalendarEventProps) => {
    
    const { title, user } = event;

    return (
        <div>
            <strong>{ title }</strong>
            <strong>-{ user.name }</strong>
        </div>
    )
};