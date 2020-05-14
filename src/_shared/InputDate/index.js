import React, { useState } from 'react';
import DatePicker from "react-datepicker";

import './index.scss';
import "react-datepicker/dist/react-datepicker.css"; 

export const InputDate = (props) =>{
    const {
        value: defaultValue,
        label,
        placeholder,
        onUpdate
    } = props;

    const initialState = {
        value: defaultValue,
    }

    const [state, updateState] = useState(initialState);
    const setState = (state) => updateState(prevState => ({...prevState, ...state}));

    const onBlur = (e) => {
        onUpdate(e)
    }

    const onChange = (date) => {
        setState({ value: date });
    }

    const renderDateElment = () => {
        //const selectedValue = state.value ? moment(state.value, 'DD-MM-YYYY') : moment();

        return (
            <DatePicker
                selected    ={state.value}
                placeholderText ={placeholder}
                className   ='date-element'
                onBlur      ={onBlur}
                onChange    ={onChange}
            />
        )
    }

    return(
        <div className='date-div'>
            <label className='label'>{label}</label>
            { renderDateElment() }    
        </div>
    )
} 