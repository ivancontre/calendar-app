import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { RootState } from '../../store';
import { startDelete } from '../../store/calendar/actions';


export const DeleteFab: React.FC = () => {

    const { calendar } = useSelector((state: RootState) => state);

    const dispatch = useDispatch();

    const handleNewEvent = (): void => {
        const activeEvent = calendar.activeEvent;
        
        if (activeEvent) {

            Swal.fire({
                title: '¿Seguro que desea eliminar el evento?',
                showCancelButton: true,
                confirmButtonText: 'Sí',
                cancelButtonText: 'Cancelar'
            }).then(result => { 
                if (result.isConfirmed && activeEvent?.id) {
                    dispatch(startDelete(activeEvent.id));
                }

            }).catch(error => {
                Swal.fire('Error', error, 'error');
            });            
        }
        
    };

    return (
        <button
            onClick={ handleNewEvent }
            className="btn btn-danger fab-danger"
        >
            <FontAwesomeIcon icon={ faTrash } />
        </button>
    )
};