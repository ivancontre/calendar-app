import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { startLogout } from '../../store/auth/action';

export const Navbar: React.FC = () => {

    const { name } = useSelector((state: RootState) => state.auth);

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogout());
    };

    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <span className="navbar-brand">
                {  `Bienvenido ${name.charAt(0).toUpperCase() + name.slice(1)}` }
            </span>

            <button onClick={ handleLogout } className="btn btn-outline-danger">
                <FontAwesomeIcon icon={ faSignOutAlt } /> 
                <span> Salir </span>
            </button>
        </div>
    )
};