import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import { modalReducer } from './modal/reducers';
import { calendarReducer } from './calendar/reducers';
import { authReducer } from './auth/reducer';

import { ModalState } from './modal/types';
import { CalendarState } from './calendar/types';
import { CalendarUser } from './auth/types';


declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
};

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export interface RootState {
    modal: ModalState;
    calendar: CalendarState;
    auth: CalendarUser;
}

export const rootReducer = combineReducers({
    modal: modalReducer,
    calendar: calendarReducer,
    auth: authReducer
});

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);