import React, { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import validator from 'validator';
import useForm from '../../hooks/useForm';
import { startRegister } from '../../store/auth/action';
import './auth.css';

export const RegisterScreen: React.FC = () => {

    interface RgisterForm {
        name: string;
        email: string;
        password1: string;
        password2: string;
    };

    const initFormValues: RgisterForm = {
        name: 'Cristobal',
        email: 'cristobal@gmail.com',
        password1: '123456',
        password2: '123456'
    };

    const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useForm<RgisterForm>(initFormValues);
    
    const { name, email, password1, password2 } = formValues;

    const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (name.trim().length === 0) {
            Swal.fire('Error', 'Nombre es requerido', 'error');
            return false;

        } else if (!validator.isEmail(email)) {
            Swal.fire('Error', 'Email inválido', 'error');
            return false;

        }else if (password1 !== password2 || password1.length < 5) {
            Swal.fire('Error', 'Contraseña debe tener al enos 6 caracteres y deben coincidir', 'error');
            return false;

        }

        dispatch(startRegister(name, email, password1));

    };

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={ handleSubmitForm }>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="name"
                                autoComplete="off"
                                value={ name }
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="email"
                                autoComplete="off"
                                value={ email }
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                                name="password"
                                value={ password1 }
                                onChange={ handleInputChange }
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
                                name="password2"
                                value={ password2 }
                                onChange={ handleInputChange }
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>

                        <Link
                            className="link-register"
                            to="/auth/login"
                        >
                            ¿Ya registrado?
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
};