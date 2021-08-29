import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import Select, { ActionMeta, OptionsType } from 'react-select';
import queryString from 'query-string'

import { RootState } from '../../store';
import { addUserFilter } from '../../store/filter/action';
import { startLoadUsers } from '../../store/user/action';

export const Filter: React.FC = () => {

    const dispatch = useDispatch();

    const location = useLocation();

    const history = useHistory();


    useEffect(() => {
        dispatch(startLoadUsers());
    }, [dispatch]);

    const { user, filter } = useSelector((state: RootState) => state);

    useEffect(() => {
        
        if (location.search) {
            let ids = queryString.parse(location.search, {arrayFormat: 'comma'}).users as string[];
           
            if (ids) {

                if (!Array.isArray(ids)) ids = [ids];
                const users = user.users.filter(user => ids.includes(user._id));
                dispatch(addUserFilter(users));

            }           
            
        }


    }, [user.users, location.search, dispatch]);
    

    const addUserToFilter = (event: OptionsType<object>, actionMeta: ActionMeta<object>) => {

        const ids = event.map((user: any) => {
            return user._id
        });

        const idsFormatUrl = queryString.stringify({ users: ids }, { arrayFormat: 'comma' });

        dispatch(addUserFilter(ids));
        history.push(`?${idsFormatUrl}`); 
    };
    
    return (
        <div className="mb-3 ml-1 mr-1">
             <Select
                onChange={ addUserToFilter }
                value={ filter.users }
                options={ user.users }
                isMulti
                getOptionValue={ (option: any) => option._id}
                getOptionLabel={ (option: any) => option.name}  
                placeholder="Buscar por usuario..."              
            />
            
        </div>
    )
};