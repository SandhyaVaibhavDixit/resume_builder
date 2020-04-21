import React, { Fragment } from 'react';
import { Input } from '../Input';
import { Button } from '../Button';

export const Form = (props) => {
    const { dataStructure, data, hideAddButton, onInputChangeHandler, onAddHandler } = props;

    return(
        <Fragment>
            <div className='form'>
                {
                    dataStructure.map(eachDetail => (
                        <Input
                            key            ={eachDetail.name}
                            details        ={eachDetail}
                            value          ={data[eachDetail.name] || ''}
                            shouldValidate ={eachDetail.validation}
                            changed        ={onInputChangeHandler}
                        />            
                    )
                )}
            </div>
            <div className='formBottom'>
                    <Button
                        onClick ={onAddHandler}
                        title   ='Add' 
                        hidden  ={hideAddButton}               
                    />
            </div>
        </Fragment>
    )
};