import React, { FC, ReactElement } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter: FC = (): ReactElement => {
    return (
            <Switch>

                <Route exact path="/auth/login" component={ LoginScreen } />

                <Route exact path="/auth/register" component={ RegisterScreen } />

                <Redirect to="/auth/login" />

            </Switch>
    )
};