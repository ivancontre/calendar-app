import React, { FC, ReactElement }  from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter';
import { store } from './store';
export const CalendarApp: FC = (): ReactElement => {
    return (
        <Provider store={ store } >
            <AppRouter />
        </Provider>
    )
};