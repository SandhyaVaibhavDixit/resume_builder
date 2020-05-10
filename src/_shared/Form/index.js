import React, { Fragment, useCallback } from 'react';

import { Input } from "../Input"; 
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

    return (
        <Fragment>
            <form onSubmit={onSubmit} className='form'>
                {
                    formInputs.map(formInput => {
                        return (
                            <div key={formInput.name} className='form-div'>
                                <Input
                                    formInput ={formInput}
                                    onChange  ={onChange}
                                    value     ={values[formInput.name] || ''}
                                />
                                {errors[formInput.name] && (
                                    <p className="is-danger">{errors[formInput.name]}</p>
                                )}
                            </div>
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
}