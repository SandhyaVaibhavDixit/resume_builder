import React from 'react';

export const Select = (props) => {
    const {name, value, classes, config, changed} = props;
    
    return(
        <select
            key       ={name}
            name      ={name}
            className ={classes.join(' ')}
            value     ={value}
            onChange  ={changed}>

            {config.options.map(option => (
                <option 
                    key={option.value} 
                    value={option.value}>

                    {option.text}
                </option>
            ))}

        </select>
    );
}