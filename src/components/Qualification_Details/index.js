import React, { useState } from 'react';
import { DataStructure } from '../../_shared/FormStructure/QulificationDetails';
import { Input } from '../../_shared/Input';
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

    const [ qualification, setQualification] = useState(initialData);
    const [ qualificationList, setQualificationList] = useState([]);
    const [ showModal, setShowModal] = useState(false);
    const [ dataStructure, setDataStructure] = useState(DataStructure);
    const [ hideAddButton, setHideAddButton] = useState(true);
    
    const onClick = () =>{
        setShowModal(true);
    }

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        const updatedQualification = {
            ...qualification,
            [name]: value
        };

        const updatedDataStructure = dataStructure.map(field => {
            if (field.name === name) {
                field.touched = true;
                field.value = value;
                field.valid = CheckValidity(
                    value,
                    field.validation
                );
                
                const invalidField = getInvalidField(dataStructure);
                if(Boolean(invalidField) === false){
                    setHideAddButton(false);
                }
            }
            return field;
        });
        
        setQualification(updatedQualification);
        setDataStructure(updatedDataStructure);
    }

    const onAddHandler = () =>{
        dataStructure.map(field => {
            field.touched = false;
            field.valid = false;

            return field;
        });

        const key = generateKey(1, 100);
        const updatedQualificationList = [
            ...qualificationList,
            {   key : key,
                ...qualification
            }
        ];

        setQualificationList(updatedQualificationList)
        setDataStructure(dataStructure);
        setQualification(initialData);
        toggleModal();
    }

    const onDeleteHandler = (key) => {
        //Remove by filter.
        setQualificationList(qualificationList.filter(item => item.key !== key));
    }

    const formElement = (
        <div>
            <div className='form'>
            { dataStructure.map(eachDetail => (
                <Input
                    key            ={eachDetail.name}
                    details        ={eachDetail}
                    value          ={qualification[eachDetail.name]}
                    shouldValidate ={eachDetail.validation}
                    colClassName   ='col'
                    changed        ={e => onChangeHandler(e)}
                />            
            )
            )}
            </div>
            <div className='formBottom'>
                    <Button
                        onClick ={onAddHandler}
                        title   ='Add' 
                        hidden    ={hideAddButton}               
                    />
            </div>
        </div>
      );

    return (
        <div className='quaContainer'>
            <Table
                tableHeader = {dataStructure}
                tableBody = { qualificationList }
                onDelete = { onDeleteHandler }/>

            <Button
                onClick ={onClick}
                title   ='Add Qulaifications'                
            />

            <Modal 
                show    = {showModal}
                onClose = {toggleModal}
                title   = 'Add Educational Details'>
                    {formElement}
            </Modal>

        </div>
     );
}