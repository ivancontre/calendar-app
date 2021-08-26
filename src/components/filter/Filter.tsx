import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select, { ActionMeta, OptionsType } from 'react-select';

import { RootState } from '../../store';
import { addUserFilter } from '../../store/filter/action';
import { startLoadUsers } from '../../store/user/action';

export const Filter: React.FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startLoadUsers());
    }, [dispatch]);

    const { user } = useSelector((state: RootState) => state);
    

    const addUserToFilter = (event: OptionsType<object>, actionMeta: ActionMeta<object>) => {

        const ids = event.map((user: any) => {
            return user._id
        });

        dispatch(addUserFilter(ids));
    };

    return (
        <div className="mb-3 ml-1 mr-1">
            <Select
                onChange={ addUserToFilter }
                options={ user.users }
                isMulti
                getOptionValue={ (option: any) => option._id}
                getOptionLabel={ (option: any) => option.name}  
                placeholder="Buscar por usuario..."              
            />
            
            
        </div>
    )
};