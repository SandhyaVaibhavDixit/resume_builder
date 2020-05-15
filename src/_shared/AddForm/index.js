import React, { Fragment, useCallback } from 'react';

import { InputElements } from "../InputElements";
import { Button } from '../Button';

import useForm from '../../_hooks/useForm';

import { generateKey } from '../../_utils/generateKey';

export const AddForm = ({formInputs, dataList, updateParentState, toggleModal }) => {

    const onFormSubmit = useCallback((values) => {
        const updatedDataList = [
            ...dataList,
            {   
                key: generateKey(1, 100),
                ...values 
            }
        ];

        updateParentState({dataList : updatedDataList});
        toggleModal();
    }, [updateParentState, toggleModal, dataList]);

    const {
        values,
        errors,
        onChange,
        onSubmit,
    } = useForm(onFormSubmit, formInputs);


    const renderForm = () => (
        <Fragment>
            <form onSubmit={onSubmit} className='form'>
            {                
                formInputs.map(({ name, label, elementType, config, validation })  => {
                    const formElement = (
                        <div key={name} className='form-div'>
                            <InputElements
                                key={name}
                                name={name}
                                value={values[name] || ''}
                                label={label}
                                elementType={elementType}
                                options={config.options}
                                placeholder={config.placeholder}
                                validation={validation}
                                onChange={onChange}
                            />
                            {errors[name] && (
                                <p className="is-danger">{errors[name]}</p>
                            )}
                        </div>
                    );

                    return (
                        formElement
                    )
                })
            }
            <div className='form-bottom'>
                <Button
                    title='Add'
                    type='Submit'
                />
            </div>
        </form>
        </Fragment>
    )
    
    return (
         renderForm() 
    )
}