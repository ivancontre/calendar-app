import React, { FC, ReactElement } from 'react';
import {
    HashRouter as Router,
    Switch,
    Redirect,
    Route
} from 'react-router-dom';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { AuthRouter } from './AuthRouter';


export const AppRouter: FC = (): ReactElement => {

    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={ AuthRouter }/>
                    <Route exact path="/" component={ CalendarScreen } />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
};