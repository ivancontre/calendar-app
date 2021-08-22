import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { CalendarEv } from '../../store/calendar/types';

interface CalendarEventProps  {
    event: CalendarEv;
};

export const CalendarEvent: React.FC <CalendarEventProps> = ({ event }: CalendarEventProps) => {
    
    const { title, user } = event;
    const { _id } = useSelector((state: RootState) => state.auth);
    const name: string = user._id === _id ? 'Yo' : user.name.charAt(0).toUpperCase() + user.name.slice(1);

    return (
        <div>
            <strong>{ title }</strong>
            <p className="creator-event">{ `Creador: ${name}` }</p>
        </div>
    );
};