import React from 'react';
import { Select } from '../Select';
import { Textarea } from '../Textarea';
import './index.scss';

export const Input = ( props ) => {
    const { isValid, isTouched, shouldValidate, value, onChange, onFileChange } = props;
    const { name, label, elementType, config } = props.formInput;
    const { type, placeHolder } = config 

    let inputElement = null;
    let inputClasses = ['input-element'];

    const isInputValid = !(isValid) && isTouched && shouldValidate; 
    
    if ( isInputValid ){
        inputClasses.push('invalid');
    }

    switch ( elementType ) { 
        case ( 'textarea' ):
            inputClasses.push('textarea'); 
            inputElement = <Textarea 
                                name    ={name} 
                                value   ={value}
                                classes ={inputClasses}
                                config  ={config}
                                onChange ={onChange}
                            />  
            break;
        case ( 'select' ):
            inputElement = <Select 
                                name    ={name} 
                                value   ={value}
                                classes = {inputClasses}
                                config  = {config}
                                onChange ={onChange}
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
                                <span className='span-file-name'>{value}</span>
                        </div>
            break;
        case ( 'input' ):
        default:
            inputElement = <input
                                key         ={name}
                                name        ={name}
                                className   ={inputClasses.join(' ')}
                                type        ={type}
                                placeholder ={placeHolder}
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
