import { ChangeEvent, useState } from 'react';

const useForm = <T extends Object>(initialState: T) => {

    const [values, setValues] = useState<T>(initialState);

    const reset = () => {
        setValues(initialState);
    };

    const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    };

    return [values, handleInputChange, reset] as const;
}

export default useForm;