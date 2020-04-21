import React, { useState } from 'react';
import './style.scss'
import UpIcon from '../../_assets/icons/Up.png';
import DownIcon from '../../_assets/icons//Down.png';

export const SelectWithDiv = (props) => {
    const { shouldValidate, changed, value} = props;
    const { name, label, config, valid, touched} = props.details;
  
    const [isDropDown, setIsDropDown] = useState(false);
    let dropDownClass = ['noContent'];
    let arrow = <img src={DownIcon} className='arrow' alt='Select'></img> ;
    
    let selectedValue = value;
    const dropDownItems = config.options.map((option, index) => {
        if (value === option.value){
            selectedValue = option.text;  
        } 
        return (<li 
                    value   ={option.value} 
                    key     ={index}
                    onClick ={ () => selectHandler(option.value)}> 
                    {option.text}
                </li>
        );
    });

    const selectHandler = (value) =>{
        if(isDropDown) {
            setIsDropDown(false);
            changed(name, value);
        }
    }

    const showContent = () =>{
        setIsDropDown(!isDropDown);
    }

    if (isDropDown){
        dropDownClass= ['dropContent'];
        arrow = <img src={UpIcon} alt='Select'></img> ;
    }
    else {
        dropDownClass = ['noContent'];
    }
    
    let divClass = ['dropdown'];

    if ((!valid) && shouldValidate && touched) {
        divClass.push('invalid');
    }
    
    //const selectedValue = value === '' ? 'Select an item' : value;

    return(
         <div className={divClass.join(' ')}>
            <label className={'label'}>{label}</label>
            <button 
                className ='button'
                onClick   ={ () => showContent()}>

                {selectedValue}

                <span className='arrow'>{arrow}</span>
            </button>
            <div>
                <ul className={dropDownClass.join(' ')}>
                    {dropDownItems}
                </ul>
            </div>
        </div>
    )
};
