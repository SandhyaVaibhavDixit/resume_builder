import React from 'react';

export const Select = (props) => {
    const {name, value, classes, config, onChange} = props;
    const { options } = config;

    const renderSelect = () => (
        <select
            key       ={name}
            name      ={name}
            className ={classes.join(' ')}
            value     ={value}
            onChange  ={onChange}>

            {options.map(option => (
                <option 
                    key     ={option.value} 
                    value   ={option.value}>

                    {option.text}
                </option>
            ))}

        </select>
    );

    return(
        renderSelect()
    );
}