import React from 'react';
import { Select } from '../Select';
import { Textarea } from '../Textarea';
import './style.scss';

export const Input = ( props ) => {
    const { isValid, touched, shouldValidate, changed, value, fileChanged } = props;
    const { name, label, type, config } = props.details;

    let inputElement = null;
    let inputClasses = ['inputElement'];

    if (!isValid && touched && shouldValidate)  {
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
        case ( 'file' ): 
            inputElement = <div className='fileUpload'>
                            <br></br>
                            <label className='labelUpload' title='Upload'>
                                <input 
                                    type ='file'
                                    hidden
                                    onChange ={fileChanged}
                                />
                                    Select File
                                </label>
                                <span className='fileNameSpan'>{value}</span>
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
