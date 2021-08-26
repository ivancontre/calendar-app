import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { RootState } from '../../store';
import { startLogout } from '../../store/auth/action';
import { reset } from '../../store/calendar/actions';

export const Navbar: React.FC = () => {

    const { name } = useSelector((state: RootState) => state.auth);

    const dispatch = useDispatch();

    const handleLogout = () => {
        Swal.fire({
            title: '¿Seguro que desea salir?',
            showCancelButton: true,
            confirmButtonText: 'Sí',
            cancelButtonText: 'Cancelar'

        }).then(result => { 
            if (result.isConfirmed) {
                dispatch(startLogout());
                dispatch(reset());
            }

        }).catch(error => {
            Swal.fire('Error', error, 'error');
        });        
    };

    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <span className="navbar-brand">
                {  `Bienvenido ${name}` }
            </span>

            <button onClick={ handleLogout } className="btn btn-outline-danger">
                <FontAwesomeIcon icon={ faSignOutAlt } /> 
                <span> Salir </span>
            </button>
        </div>
    )
};