import React, { useState } from 'react';
import { DataStructure } from '../../_shared/FormStructure/ExperienceDetails';
import { Input } from '../../_shared/Input';
import { Modal } from '../../_shared/Modal';
import { Table } from '../../_shared/Table';
import { Button } from '../../_shared/Button';
import { CheckValidity } from '../../_utils/CheckValidity'; 
import { generateKey } from '../../_utils/generateKey';
import { getInvalidField } from "../../_utils/getInvalidField";
import './style.scss';


export const ExperienceDetails = () => {
    const initialData = {
        company: '',
        post: '',
        duration: ''
    };

    const [ experience, setExperience ] = useState(initialData);
    const [ experienceList, setExperienceList ] = useState([]);
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
        const updatedExperience = {
            ...experience,
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
        
        setExperience(updatedExperience);
        setDataStructure(updatedDataStructure);
    }

    const onAddHandler = () =>{
        dataStructure.map(field => {
            field.touched = false;
            field.valid = false;

            return field;
        });

        const key = generateKey(1, 100);
        const updatedExperienceList = [
            ...experienceList,
            {   key : key,
                ...experience
            }
        ];

        setExperienceList(updatedExperienceList)
        setDataStructure(dataStructure);
        setExperience(initialData);
        toggleModal();
    }

    const onDeleteHandler = (key) => {
        //Remove by filter.
        setExperienceList(experienceList.filter(item => item.key !== key));
    }

    const formElement = (
        <div>
            <div className='form'>
            { dataStructure.map(eachDetail => (
                <Input
                    key            ={eachDetail.name}
                    details        ={eachDetail}
                    value          ={experience[eachDetail.name]}
                    shouldValidate ={eachDetail.validation}
                    changed        ={e => onChangeHandler(e)}
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
        </div>
      );

    return (
        <div className='expContainer'>
            <Table
                tableHeader = {dataStructure}
                tableBody = { experienceList }
                onDelete = { onDeleteHandler }/>

            <Button
                onClick ={onClick}
                title   ='Add Experience'                
            />

            <Modal 
                show    = {showModal}
                onClose = {toggleModal}
                title   = 'Add Experience'>
                    {formElement}
            </Modal>

        </div>
     );
}