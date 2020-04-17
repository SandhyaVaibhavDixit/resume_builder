import React, { useState } from 'react';
import { Input } from '../../_shared/Input';
import { DataStructure } from '../../_shared/FormStructure/PersonalDetails';
import { CheckValidity } from '../../_utils/CheckValidity';

import './style.scss';

export const PersonalDetails = (props) => {
    
    const [personalDetails, setPersonalDetails] = useState(DataStructure);

    const inputChangedHandler = (e) => {
        const {name, value} = e.target;

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

    const formElement = (
        <div className='form'>
          { personalDetails.map(eachDetail => (
            <Input
                key            ={eachDetail.name}
                details        ={eachDetail}       
                value          ={eachDetail.value}     
                shouldValidate ={eachDetail.validation}
                colClassName   ='col'
                changed ={e => inputChangedHandler(e)}
            />            
          ))}
        </div>
      );
      
    return(
        <div className='personalDetails row'>
            <div className='detailsDiv'>
                {formElement}
            </div>
            <div className='profileImageDiv'>
                ProfileImage
            </div>
        </div>
    );
}   