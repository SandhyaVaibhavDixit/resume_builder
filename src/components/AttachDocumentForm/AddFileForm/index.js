import React, { Fragment, useCallback } from 'react';

import { Input } from "../../../_shared/Input"; 
import { Button } from '../../../_shared/Button';
import { AttachDocumentFormInputs as formInputs } from '../../../_shared/FormStructure/AttachDocumentFormInputs';

import useForm from '../../../_hooks/useForm';
import { generateKey } from '../../../_utils/generateKey';

export const AddFileForm = ({ fileList, updateParentState, toggleModal }) => {

    const onFormSubmit = useCallback((values) => {
        const updatedFileDataList = [
            ...fileList,
            {   
                key: generateKey(1, 100),
                url: (values.file && URL.createObjectURL(values.file)) || null,
                ...values
            }
        ];

        updateParentState({fileList : updatedFileDataList});
        toggleModal();
    }, [updateParentState, toggleModal, fileList]);

    const {
        values,
        errors,
        onChange,
        onFileChange,
        onSubmit,
    } = useForm(onFormSubmit, formInputs);

    return (
        <Fragment>
            <form onSubmit={onSubmit} className='form'>
                {
                    formInputs.map(formInput => {
                        return (
                            <div key={formInput.name}>
                                <Input
                                    formInput    ={formInput}
                                    onChange     ={onChange}
                                    onFileChange ={onFileChange}
                                    value        ={values[formInput.name] || ''}
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