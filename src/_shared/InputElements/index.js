import React from 'react';
import { Select } from '../Select';
import { TextInput } from '../TextInput';
import { FileUpload } from '../FileUpload';
import { InputDate } from '../InputDate';
import './index.scss';

export const InputElements = ( props ) => {
    const { name, label, elementType, placeholder, value, validation, options, onChange, onFileChange } = props;

    switch ( elementType ) { 
        case ( 'textarea' ):
        return <TextInput
                    key={name}
                    name={name}
                    value={value}
                    label={label}
                    placeholder={placeholder}
                    validation={validation}
                    onUpdate={onChange}
                    isMultiline= {true}
                />
        case ( 'select' ):
            return <Select 
                        name    ={name} 
                        value   ={value}
                        label   ={label}
                        options ={options}
                        onUpdate ={onChange}
                    />  
        case ( 'file' ): 
            return <FileUpload
                        value ={value}
                        onUpdate={onFileChange}
                    />
        case ( 'date' ):
            return <InputDate
                        name ={name}
                        value ={value}
                        label ={label}
                        onUpdate ={onChange}
                    />
        case ( 'input' ):
        default:
            return  <TextInput
                        key={name}
                        name={name}
                        value={value}
                        label={label}
                        placeholder={placeholder}
                        validation={validation}
                        onUpdate={onChange}
                        isMultiline= {false}
                    />
        }
}
