import React, { FunctionComponent, useState, FormEvent } from 'react';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';

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

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const nowMoreOneHour = now.clone().add(1, 'hours');

export const CalendarModal: FunctionComponent = () => {

    const [dateStart, setDateStart] = useState<Date>(now.toDate());
    const [dateEnd, setDateEnd] = useState<Date>(nowMoreOneHour.toDate());
    const [formValues, setFormValues] = useState({
        title: 'Evento',
        notes: '',
        start: now.toDate(),
        end: nowMoreOneHour.toDate()
    });

    const { title, notes, start, end } = formValues;

    const handleInputChange = (event: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>): void => {
        const target = event.target as HTMLTextAreaElement | HTMLTextAreaElement;

        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    };

    const closeModal = (): void => {
        console.log('cerrando...');
    };

    const handleStartDateChange = (event: Date): void => {
        console.log(event);
        setDateStart(event);
        setFormValues({
            ...formValues,
            start: event
        })
    };

    const handleEndDateChange = (event: Date): void => {
        console.log(event);
        setDateEnd(event);
        setFormValues({
            ...formValues,
            end: event
        })
    };

    const handleSubmitForm = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log(formValues);

        const momentStart = moment(start);
        const momentEnd = moment(end);

        if (momentStart.isSameOrAfter(momentEnd)) {
            console.log('fecha 2 debe ser mayor')
        }
    };

    return (
        <Modal
            isOpen={ true }
            //onAfterOpen={ afterOpenModal }
            onRequestClose={ closeModal }
            style={ customStyles }
            closeTimeoutMS={ 200 }
            className="modal"
            overlayClassName="modal-fondo"
        > 
            <h1> Nuevo evento </h1>
            <hr />
            <form className="container" onSubmit={ handleSubmitForm }>

                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    <DateTimePicker
                        onChange={ handleStartDateChange }
                        value={ dateStart }
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    <DateTimePicker
                        onChange={ handleEndDateChange }
                        value={ dateEnd }
                        minDate={ dateStart }
                        className="form-control"
                    />
                </div>

                <hr />
                <div className="form-group">
                    <label>Título y notas</label>
                    <input 
                        type="text" 
                        className="form-control"
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