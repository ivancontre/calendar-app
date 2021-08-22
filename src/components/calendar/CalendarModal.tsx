import React, { useState, FormEvent } from 'react';
import Modal from 'react-modal';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import Datetime from 'react-datetime';

import "react-datetime/css/react-datetime.css";

import { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../store/modal/actions';
import { CalendarEv } from '../../store/calendar/types';
import { startAddNew, clearActive, startUpdate } from '../../store/calendar/actions';
import { useEffect } from 'react';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const now: moment.Moment = moment().minutes(0).seconds(0).add(1, 'hours');
const nowMoreOneHour: moment.Moment = now.clone().add(1, 'hours');

const initValuesForm = {
    title: '',
    notes: '',
    start: now,
    endDate: nowMoreOneHour
};

export const CalendarModal: React.FC = () => {

    const [dateStart, setDateStart] = useState<moment.Moment>(now);
    const [dateEnd, setDateEnd] = useState<moment.Moment>(nowMoreOneHour);
    const [formValues, setFormValues] = useState(initValuesForm);

    const [titleValid, setTitleValid] = useState<boolean>(true);

    const { title, notes, start, endDate } = formValues;

    const { modal, calendar, auth } = useSelector((state: RootState) => state);

    const { activeEvent } = calendar;

    const dispatch = useDispatch();

    useEffect(() => {
        if ( activeEvent ) {
            const item = {
                ...activeEvent,
                start: moment(activeEvent.start),
                endDate: moment(activeEvent.endDate)
            };
            
            setFormValues(item);

        } else {
            setFormValues( initValuesForm );
        }

    }, [activeEvent, setFormValues]);

    const handleInputChange = (event: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>): void => {
        const target = event.target as HTMLTextAreaElement | HTMLTextAreaElement;

        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    };

    const close = (): void => {        
        dispatch(closeModal());
        setTimeout(() => {
            dispatch(clearActive());
            setFormValues(initValuesForm); 
        }, 200);        
    };

    const handleStartDateChange = (event: string | moment.Moment): void => {
        const newEvent = typeof event == 'string' ? moment(event) : event;
        setDateStart(newEvent);
        setFormValues({
            ...formValues,
            start: newEvent
        })
    };

    const handleEndDateChange = (event: string | moment.Moment): void => {
        const newEvent = typeof event == 'string' ? moment(event) : event;
        setDateEnd(newEvent);
        setFormValues({
            ...formValues,
            endDate: newEvent
        });
    };

    const handleSubmitForm = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        const momentStart = moment(start);
        const momentEnd = moment(endDate);

        if (momentStart.isSameOrAfter(momentEnd, 'hour')) {
            Swal.fire('Error', 'La fecha fin debe ser mayor a la de inicio', 'error');
            return;
        }

        if (title.trim().length < 2) {
            setTitleValid(false);
            return;
        }
        
        if (activeEvent?.id) { // actualizando un evento
            const item: CalendarEv = {
                id: new Date().getTime().toString(),
                ...formValues,
                start: formValues.start.toDate(),
                endDate: formValues.endDate.toDate(),
                user: {
                    _id: auth._id,
                    name: auth.name,
                    email: auth.email
                }
            };

            dispatch(startUpdate(item));    

        } else { // creando un nuevo evento
            const item: CalendarEv = {                
                ...formValues,
                start: formValues.start.toDate(),
                endDate: formValues.endDate.toDate(),
                user: {
                    _id: auth._id,
                    name: auth.name,
                    email: auth.email
                }
            };
    
            dispatch(startAddNew(item));
        }

        setTitleValid(true);
        close();
    };

    const validationDateEnd = (currentDate: moment.Moment): boolean => {
        return currentDate.isAfter(moment(dateStart));
    };

    return (
        <Modal
            isOpen={ modal.modalOpen }
            //onAfterOpen={ afterOpenModal }
            onRequestClose={ close }
            style={ customStyles }
            closeTimeoutMS={ 200 }
            className="modal"
            overlayClassName="modal-fondo"
        > 
            <h1> {activeEvent?.id ? 'Editar evento' : 'Nuevo evento'} </h1>
            <hr />
            <form className="container" onSubmit={ handleSubmitForm } noValidate>

                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    {/* <DateTimePicker
                        onChange={ handleStartDateChange }
                        value={ dateStart }
                        className="form-control"
                    /> */}
                    <Datetime 
                        onChange={ handleStartDateChange }
                        value={ start }
                        //isValidDate={ validationDateStart }
                    />
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    {/* <DateTimePicker
                        onChange={ handleEndDateChange }
                        value={ dateEnd }
                        minDate={ dateStart }
                        className="form-control"
                    /> */}
                    <Datetime 
                        onChange={ handleEndDateChange }
                        value={ endDate }
                        isValidDate={ validationDateEnd }
                        
                    />
                </div>

                <hr />
                <div className="form-group">
                    <label>Título y notas</label>
                    <input 
                        type="text" 
                        className={`form-control ${!titleValid && 'is-invalid'}`}
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={ title }
                        onChange={ handleInputChange }
                        
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group">
                    <textarea
                        className="form-control"
                        placeholder="Notas"
                        rows={ 5 }
                        name="notes"
                        value={ notes }
                        onChange={ handleInputChange }
                        
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <FontAwesomeIcon icon={ faSave } /> 
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
};