import React, { FC, ReactElement } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export const Navbar: FC = (): ReactElement => {
    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <span className="navbar-brand">
                Kuky
            </span>

            <button className="btn btn-outline-danger">
                <FontAwesomeIcon icon={ faSignOutAlt } /> 
                <span> Salir </span>
            </button>
        </div>
    )
};