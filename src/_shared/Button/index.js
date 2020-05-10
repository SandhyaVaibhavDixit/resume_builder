import React from 'react';
import './index.scss';

export const Button = (props) => {
    const { title, onClick, buttonClass, childern, hidden, type} = props

    let classNames = ['button'];
    
    if (buttonClass) {
        classNames.push(buttonClass);
    }
    
    return (
        <button hidden={hidden} type={type} className={classNames.join(' ')} onClick={onClick}>
            {title}
            {childern}
        </button>
    );
}