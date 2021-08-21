import { FormEvent, useState } from 'react'

const useForm = <D>(initialState: any = {}) => {

    const [values, setValues] = useState<D>(initialState);

    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = (event: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>): void => {
        const target = event.target as HTMLTextAreaElement | HTMLTextAreaElement;

        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    return [values, handleInputChange, reset] as const;
}

export default useForm;