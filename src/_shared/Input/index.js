import React from 'react';
import { Select } from '../Select';
import { Textarea } from '../Textarea';
import './style.scss';

export const Input = ( props ) => {
    const { shouldValidate, changed, value} = props;
    const { name, label, type, config, valid, touched} = props.details;

    let inputElement = null;
    let inputClasses = ['col inputElement'];

    if ((!valid) && shouldValidate && touched) {
        inputClasses.push('invalid');
    }

    switch ( type ) { 
        case ( 'textarea' ):
            inputClasses.push('textarea'); 
            inputElement = <Textarea 
                                name    ={name} 
                                value   ={value}
                                classes = {inputClasses}
                                config  = {config}
                                changed ={changed}
                            />  
            break;
        case ( 'select' ):
            inputElement = <Select 
                                name    ={name} 
                                value   ={value}
                                classes = {inputClasses}
                                config  = {config}
                                changed ={changed}
                            />  
            break;
        case ( 'input' ):
        default:
            inputElement = <input
                                key         ={name}
                                name        ={name}
                                className   ={inputClasses.join(' ')}
                                {...config}
                                value       ={value}
                                onChange    ={changed} 
                            />
        }

    return (
        <div className='input'>
            <label className={'label'}>{label}</label>
            {inputElement}
        </div>
    );
}
