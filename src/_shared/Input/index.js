import React from 'react';

import './style.scss';

export const Input = ( props ) => {
    const {name, label, type, config, value, invalid, shouldValidate, touched, changed } = props;
    let inputElement = null;
    const inputClasses = type === 'textarea' ? ['col inputElement textarea'] : ['col inputElement'];

    if (invalid && shouldValidate && touched) {
        inputClasses.push('invalid');
    }

    switch ( type ) { 
        case ( 'input' ):
            inputElement = <input
                key={name}
                name={name}
                className={inputClasses.join(' ')}
                {...config}
                value={value}
                onChange={changed} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                key={name}
                rows={5}
                cols={50}
                name={name}
                className={inputClasses.join(' ')}
                {...config}
                value={value}
                onChange={changed} />;
            break;
        case ( 'select' ):
            inputElement = <select
                key={name}
                name={name}
                className={inputClasses.join(' ')}
                value={value}
                onChange={changed}>
                {config.options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
                </select>;
            break;
        default:
            inputElement = <input
                key={name}
                name={name}
                className={inputClasses.join(' ')}
                {...config}
                value={value}
                onChange={changed} />;
    }

    return (
        <div className='input'>
            <label className={'label'}>{label}</label>
            {inputElement}
        </div>
    );

};
