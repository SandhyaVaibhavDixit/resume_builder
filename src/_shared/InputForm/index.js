import React from 'react';
import { Input } from '../Input';
import { Button } from '../Button';
import { CheckValidity } from '../../_utils/CheckValidity';

export const InputForm = (props) => {
    const { dataStructure, data, onInputChangeHandler, onAddHandler } = props;
    
    let isValid = true;
    return(
            <form className='form'>
                {
                    dataStructure.map(eachDetail => {
                        const shouldValidate = Boolean(eachDetail.validation);
                        if (shouldValidate === true) {
                            isValid = isValid && 
                                      CheckValidity( data[eachDetail.name],
                                                     eachDetail.validation);
                        }

                        return (<Input
                                key      ={eachDetail.name}
                                details  ={eachDetail}
                                value    ={data[eachDetail.name] || ''}
                                isValid  ={isValid}
                                changed  ={onInputChangeHandler}
                            />)           
                           }
                )
                }
            <div className='formBottom'>
                    <Button
                        title   ='Add' 
                        type    ='Submit'
                        onClick = {onAddHandler}
                        hidden  ={!isValid}               
                    />
            </div>
        </form>
    )
};