import React from 'react';
import { Select } from '../Select';
import { Textarea } from '../Textarea';
import './style.scss';

export const Input = ( props ) => {
    const { isValid, touched, shouldValidate, value, onChange, onFileChange } = props;
    const { name, label, type, config } = props.formInput;

    let inputElement = null;
    let inputClasses = ['input-element'];

    if (!isValid && touched && shouldValidate)  {
        inputClasses.push('invalid');
    }

    switch ( type ) { 
        case ( 'textarea' ):
            inputClasses.push('textarea'); 
            inputElement = <Textarea 
                                name    ={name} 
                                value   ={value}
                                classes ={inputClasses}
                                config  ={config}
                                changed ={onChange}
                            />  
            break;
        case ( 'select' ):
            inputElement = <Select 
                                name    ={name} 
                                value   ={value}
                                classes = {inputClasses}
                                config  = {config}
                                changed ={onChange}
                            />  
            break;
        case ( 'file' ): 
            inputElement = <div className='file-upload'>
                            <br></br>
                            <label className='label-upload' title='Upload'>
                                <input 
                                    type ='file'
                                    hidden
                                    onChange ={onFileChange}
                                />
                                    Select File
                                </label>
                                <span className='file-name-span'>{value}</span>
                        </div>
            break;
        case ( 'input' ):
        default:
            inputElement = <input
                                key         ={name}
                                name        ={name}
                                className   ={inputClasses.join(' ')}
                                {...config}
                                value       ={value}
                                onChange    ={onChange} 
                            />
        }

    return (
        <div className='input'>
            <label className={'label'}>{label}</label>
            {inputElement}
        </div>
    );
}
