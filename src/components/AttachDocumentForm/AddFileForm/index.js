import React, { Fragment, useCallback } from 'react';

import { InputElements } from "../../../_shared/InputElements"; 
import { Button } from '../../../_shared/Button';
import { AttachDocumentFormInputs as formInputs } from '../../../_utils/FormStructure/AttachDocumentFormInputs';

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
                    formInputs.map(({ name, label, elementType, config }) => {
                        return (
                            <div key={name}>
                                <InputElements
                                    key={name}
                                    name={name}
                                    label={label}
                                    elementType={elementType}
                                    placeholder={config.placeholder}
                                    options={config.options}
                                    onChange={onChange}
                                    onFileChange ={onFileChange}
                                    value        ={values[name] || ''}
                                />
                                {errors[name] && (
                                    <p className="is-danger">{errors[name]}</p>
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