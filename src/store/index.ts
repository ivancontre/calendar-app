import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import { modalReducer } from './modal/reducer';
import { calendarReducer } from './calendar/reducer';
import { authReducer } from './auth/reducer';
import { userReducer } from './user/reducer';
import { filterReducer } from './filter/reducer';

import { ModalState } from './modal/types';
import { CalendarState } from './calendar/types';
import { AuthState } from './auth/types';
import { UserState } from './user/types';
import { FilterState } from './filter/types';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
};

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export interface RootState {
    modal: ModalState;
    calendar: CalendarState;
    auth: AuthState;
    user: UserState;
    filter: FilterState;
};

export const rootReducer = combineReducers({
    modal: modalReducer,
    calendar: calendarReducer,
    auth: authReducer,
    user: userReducer,
    filter: filterReducer
});

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);