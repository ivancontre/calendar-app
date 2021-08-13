import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import { modalReducer } from './modal/reducers';
import { calendarReducer } from './calendar/reducers';

import { ModalState } from './modal/types';
import { CalendarState } from './calendar/types';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
};

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export interface RootState {
    modal: ModalState;
    calendar: CalendarState
}

export const rootReducer = combineReducers({
    modal: modalReducer,
    calendar: calendarReducer
});

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);