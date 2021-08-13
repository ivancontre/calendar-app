import React from 'react';
import { CalendarEv } from '../../store/calendar/types';

interface CalendarEventProps  {
    event: CalendarEv
};

export const CalendarEvent: React.FC <CalendarEventProps> = ({ event }: CalendarEventProps) => {
    
    const { title, user } = event;

    return (
        <div>
            <strong>{ title }</strong>
            <strong>-{ user.name }</strong>
        </div>
    )
};