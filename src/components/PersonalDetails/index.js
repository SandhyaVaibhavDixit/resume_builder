import React, { useState } from 'react';
import { Input } from '../../_shared/Input';
import { FormInputs } from '../../_shared/FormStructure/PersonalDetails';
import { CheckValidity } from '../../_utils/CheckValidity';
import { ProfileImage } from './ProfileImage';

import './style.scss';

export const PersonalDetails = () => {
    
    const [formInputs, setformInputs] = useState(FormInputs);

    const updateFormInputs = (name, value ) =>{
        const updatedformInputs = formInputs.map( formInput => {
            if (formInput.name === name){

                formInput.value = value;
                formInput.valid = CheckValidity(
                    value,
                    formInput.validation
                );

                formInput.touched= true
            };

            return formInput;
        });
        
        setformInputs(updatedformInputs);
    }

    const onInputChangedHandler = (e) => {
        const {name, value} = e.target;
        updateFormInputs(name, value);
    }

    const renderForm = (
        <div className='form'>
          { formInputs.map(formInput => {
                return (<Input
                            key            ={formInput.name}
                            formInput      ={formInput}       
                            isValid        ={formInput.valid}
                            value          ={formInput.value}
                            touched        ={formInput.touched}     
                            shouldValidate ={formInput.validation}
                            onChange       ={e => onInputChangedHandler(e)}
                        />
                    );
                })
            }
        </div>
      );
      
    return(
        <div className='personal-details row'>
            <div className='details-div'>
                { renderForm }
            </div>
            <div className='profile-image-div'>
                <ProfileImage />
            </div>
        </div>
    );
}   