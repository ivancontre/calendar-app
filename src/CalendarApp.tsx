import React, { FC, ReactElement }  from 'react';
import { AppRouter } from './routers/AppRouter';

export const CalendarApp: FC = (): ReactElement => {
    return (
        <div>
            <AppRouter />
        </div>
    )
};