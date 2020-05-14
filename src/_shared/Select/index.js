import React, { useState } from 'react';

import './index.scss';

export const Select = (props) => {
    const {name, label, value: defaultValue, options, onUpdate} = props;
    
    const initialState = {
        value: defaultValue
    }

    const [state, updateState] = useState(initialState);
    const setState = (state) => updateState(prevState => ({...prevState, ...state}));

    const onBlur = (e) => {
        onUpdate(e)
    }

    const onChange = ({target: {value}}) => {
        setState({ value });
    }

    const renderSelect = () => (
        <select
            key         ={name}
            name        ={name}
            className   ='select-element'
            value       ={state.value}
            onBlur      ={onBlur}
            onChange    ={onChange}>

            {options.map(({ value, text}) => (
                <option 
                    key     ={value} 
                    value   ={value}>

                    {text}
                </option>
            ))}

        </select>
    );

    return(
        <div className='select'>
            <label className='label'>{label}</label>
            { renderSelect() }
        </div>
    );
}