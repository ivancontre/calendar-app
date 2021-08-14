import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { openModal } from '../../store/modal/actions';
import { clearActive } from '../../store/calendar/actions';

export const AddNewFab: React.FC = () => {

    const dispatch = useDispatch();

    const handleNewEvent = (): void => {
        dispatch(openModal());
        dispatch(clearActive());
    };

    return (
        <button
            onClick={ handleNewEvent }
            className="btn btn-primary fab"
        >
            <FontAwesomeIcon icon={ faPlus } />
        </button>
    )
};