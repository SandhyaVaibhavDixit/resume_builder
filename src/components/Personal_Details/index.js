import React, { useState } from 'react';
import { Input } from '../../_shared/Input';
import { DataStructure } from '../../_shared/FormStructure/PersonalDetails';
import { CheckValidity } from '../../_utils/CheckValidity';
import { ProfileImage } from './ProfileImage';

import './style.scss';

export const PersonalDetails = () => {
    
    const [personalDetails, setPersonalDetails] = useState(DataStructure);

    const updatePersonaldetails = (name, value ) =>{
        const updatedPersonalDetails = personalDetails.map( detail => {
            if (detail.name === name){

                detail.value = value;
                detail.valid = CheckValidity(
                    value,
                    detail.validation
                );

                detail.touched= true
            };

            return detail;
        });
        
        setPersonalDetails(updatedPersonalDetails);
    }

    const onInputChangedHandler = (e) => {
        const {name, value} = e.target;
        updatePersonaldetails(name, value);
    }

    const getFormElement = () => (
        <div className='form'>
          { personalDetails.map(eachDetail => {
                return (<Input
                            key            ={eachDetail.name}
                            details        ={eachDetail}       
                            value          ={eachDetail.value}     
                            shouldValidate ={eachDetail.validation}
                            changed ={e => onInputChangedHandler(e)}
                        />
                    );
                })
            }
        </div>
      );
      
    return(
        <div className='personalDetails row'>
            <div className='detailsDiv'>
                {getFormElement()}
            </div>
            <div className='profileImageDiv'>
                <ProfileImage />
            </div>
        </div>
    );
}   