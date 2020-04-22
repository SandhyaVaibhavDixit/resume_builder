import React, { useState } from 'react';
import { DataStructure } from '../../_shared/FormStructure/QualificationDetails';
import { InputForm } from '../../_shared/InputForm';
import { Modal } from '../../_shared/Modal';
import { Table } from '../../_shared/Table';
import { Button } from '../../_shared/Button';
import { CheckValidity } from '../../_utils/CheckValidity'; 
import { generateKey } from '../../_utils/generateKey';
import { getInvalidField } from "../../_utils/getInvalidField";

import './style.scss';

export const QualificationDetails = () => {
    const initialData = {
        qualificationLevel: 'tenth',
        universityBoard: '',
        yearOfPass: 0,
        resultClassification: 'third',
        institute: '',
        subject: '',
        percentageOfMark: '',
    };

    const initialState = {
        qualification: initialData,
        qualificationList : [],
        showModal: false,
        dataStructure: DataStructure,
        hideAddButton : true
    }

    const [ state, setState ] = useState(initialState);
    const updateState = data => setState( prevState => ({ ...prevState, ...data}));

    const onShowModalClick = () =>{
        updateState({ showModal : true });
    }

    const toggleModal = () => {
        updateState({ showModal : !state.showModal });
    }

    const onInputChangeHandler = (e) => {
        const { name, value } = e.target;
        const updatedQualification = {
            ...state.qualification,
            [name]: value
        };

        const updatedDataStructure = state.dataStructure.map(field => {
            if (field.name === name) {
                field.touched = true;
                field.value = value;
                field.valid = CheckValidity(
                    value,
                    field.validation
                );
            }
            return field;
        });
                
        const invalidField = getInvalidField(state.dataStructure);
        if (Boolean(invalidField) === false){
            updateState({ hideAddButton: false });
        }
        else {
            updateState({ hideAddButton: true });
        }

        updateState({ qualification: updatedQualification, dataStructure: updatedDataStructure});
    }

    const onAddQualificationHandler = () =>{
        const key = generateKey(1, 100);
        const updatedQualificationList = [
            ...state.qualificationList,
            {   key : key,
                ...state.qualification
            }
        ];

        updateState({ qualificationList : updatedQualificationList, hideAddButton: true});
        updateState({ qualification: initialData, dataStructure: DataStructure});
        toggleModal();
    }

    const onDeleteQualificationHandler = (key) => {
        //Remove by filter.
        const updatedQualificationList = state.qualificationList.filter(item => item.key !== key); 
        updateState({ qualificationList: updatedQualificationList});
    }

    const renderForm = (
            <InputForm 
                dataStructure = {state.dataStructure} 
                data ={state.qualification}
                onInputChangeHandler = { e=> onInputChangeHandler(e)}
                onAddHandler = {onAddQualificationHandler}
                hideAddButton = {state.hideAddButton}
            /> 
    );

    return (
        <div className='quaContainer'>
            <Table
                tableHeader ={state.dataStructure}
                tableBody   ={state.qualificationList }
                onDelete    ={onDeleteQualificationHandler }/>

            <Button
                onClick ={onShowModalClick}
                title   ='Add Qulaifications'                
            />

            <Modal 
                show    ={state.showModal}
                onClose ={toggleModal}
                title   ='Add Educational Details'>
                    { renderForm }
            </Modal>

        </div>
     );
}