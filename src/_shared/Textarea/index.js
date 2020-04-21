import React from 'react';

export const Textarea = (props) =>{
    const {name, value, classes, config, changed} = props;

    return(
        <textarea
            key       ={name}
            rows      ={5}
            cols      ={50}
            name      ={name}
            className ={classes.join(' ')}
            {...config}
            value     ={value || ""}
            onChange  ={changed}
        />
    );
}   