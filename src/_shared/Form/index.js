import React, { Fragment, useCallback } from 'react';

import { Input } from "../Input"; 
import { Button } from '../Button';

import useForm from '../../_utils/useForm';
import { generateKey } from '../../_utils/generateKey';

export const AddForm = ({formInputs, dataList, updateParentState, toggleModal }) => {

    const onSubmit = useCallback((values) => {
//        console.log('Adding function again')
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
        handleChange,
        handleSubmit,
    } = useForm(onSubmit, formInputs);

//   console.log('Rendering');

    return (
        <Fragment>
            <form onSubmit={handleSubmit} className='form'>
                {
                    formInputs.map(formInput => {
                        return (
                            <div key={formInput.name}>
                                <Input
                                    formInput ={formInput}
                                    onChange  ={handleChange}
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