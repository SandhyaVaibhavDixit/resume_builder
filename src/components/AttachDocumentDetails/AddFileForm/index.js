import React, { Fragment, useCallback } from 'react';

import { Input } from "../../../_shared/Input";
import { Button } from '../../../_shared/Button';
import { DataStructure as formInputs } from '../../../_shared/FormStructure/AttachDocumentDetails';

import useForm from '../../../_utils/useForm';
import { generateKey } from '../../../_utils/generateKey';

export const AddFileForm = ({ fileList, updateParentState, toggleModal }) => {

    const onSubmit = useCallback((values) => {
        console.log('Adding function again')
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
        handleChange,
        handleFileChange,
        handleSubmit,
    } = useForm(onSubmit, formInputs);

    console.log('Rendering');

    return (
        <Fragment>
            <form onSubmit={handleSubmit} className='form'>
                {
                    formInputs.map(formInput => {
                        return (
                            <div key={formInput.name}>
                                <Input
                                    details={formInput}
                                    changed={handleChange}
                                    fileChanged={handleFileChange}
                                    value={values[formInput.name] || ''}
                                />
                                {errors[formInput.name] && (
                                    <p className="is-danger">{errors[formInput.name]}</p>
                                )}
                            </div>
                        )
                    })
                }
                <div className='formBottom'>
                    <Button
                        title='Add'
                        type='Submit'
                    />
                </div>
            </form>
        </Fragment>
    )
}