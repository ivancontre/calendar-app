import React, { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';

import useForm from '../../hooks/useForm';
import { startLogin } from '../../store/auth/action';
import './auth.css';

export const LoginScreen: React.FC = () => {

    interface LoginForm {
        email: string;
        password: string;
    };

    const initFormValues: LoginForm = {
        email: 'ivanc.contre@gmail.com',
        password: '123456'
    };

    const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useForm<LoginForm>(initFormValues);
    
    const { email, password } = formValues;

    const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validator.isEmail(email)) {

            return false;

        } else if (!password || password.length < 5) {

            return false;

        }

        dispatch(startLogin(email, password));

    };

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={ handleSubmitForm }>
                        <div className="form-group">
                            <input 
                                type="text"
                                name="email"
                                className="form-control"
                                placeholder="Correo"
                                value={ email }
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Contraseña"
                                value={ password }
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                        <Link
                            to="/auth/register"
                            className="link"    
                        >
                            Crea una nueva cuenta
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
};