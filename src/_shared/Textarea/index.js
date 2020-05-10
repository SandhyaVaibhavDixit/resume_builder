import React from 'react';

export const Textarea = (props) =>{
    const {name, value, classes, onChange} = props;
    const { placeHolder } = props.config 

    return(
        <textarea
            key         ={name}
            rows        ={5}
            cols        ={50}
            name        ={name}
            className   ={classes.join(' ')}
            placeholder ={placeHolder}
            value       ={value || ""}
            onChange    ={onChange}
        />
    );
}   