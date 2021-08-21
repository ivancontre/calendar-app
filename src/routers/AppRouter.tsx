import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    HashRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { RootState } from '../store';
import { startChecking } from '../store/auth/action';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter: React.FC = () => {

    const dispatch = useDispatch();

    const { checking, _id } = useSelector((state: RootState) => state.auth);
    const existsUID = _id !== undefined;

    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch])

    if (checking) {
        return (<h1>Espere...</h1>)
    }

    console.log('existsUID', existsUID)
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute isAuthenticated={ existsUID } component={ AuthRouter } path="/auth" />

                    <PrivateRoute isAuthenticated={ existsUID } component={ CalendarScreen } path="/" exact/>

                    <Redirect to="/auth/login" />

                    {/* <Route path="/auth" component={ AuthRouter }/>
                    <Route exact path="/" component={ CalendarScreen } /> 
                    <Redirect to="/auth/login" /> */}
                </Switch>
            </div>
        </Router>
    )
};