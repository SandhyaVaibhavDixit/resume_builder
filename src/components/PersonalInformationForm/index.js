import React, { useState } from 'react';
import { Input } from '../../_shared/Input';
import { PersonalInformationFormInputs } from '../../_shared/FormStructure/PersonalInformationFormInputs';
import { checkValidity } from '../../_utils/checkValidity';
import { ProfileImage } from './ProfileImage';

import './index.scss';

export const PersonalInformationForm = () => {
    
    const [formInputs, setformInputs] = useState(PersonalInformationFormInputs);

    const updateFormInputs = (name, value ) =>{
        const updatedformInputs = formInputs.map( formInput => {
            if (formInput.name === name){

                formInput.value = value;
                formInput.valid = checkValidity(
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
                            value          ={formInput.value}
                            isValid        ={formInput.valid}
                            isTouched      ={formInput.touched}     
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