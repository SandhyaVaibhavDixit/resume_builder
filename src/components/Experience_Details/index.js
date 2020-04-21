import React, { useState } from 'react';
import { DataStructure } from '../../_shared/FormStructure/ExperienceDetails';
import { Modal } from '../../_shared/Modal';
import { Table } from '../../_shared/Table';
import { Button } from '../../_shared/Button';
import { Form } from '../../_shared/Form';
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

    const initialState = {
        experience: initialData,
        experienceList: [],
        showModal: false,
        dataStructure: DataStructure,
        hideAddButton: true
    };

    const [ state, setState ] = useState(initialState);
    const updateState = data => setState(prevState => ({ ...prevState, ...data}));

    const onShowModalClick = () =>{
        updateState({ showModal : true });
    }

    const toggleModal = () => {
        updateState({ showModal : !state.showModal });
    }

    const onInputChangeHandler = (e) => {
        const { name, value } = e.target;
        const updatedExperience = {
            ...state.experience,
            [name]: value
        };

        const updatedDataStructure = state.dataStructure.map(field => {
            if (field.name === name) {
                    field.touched = true;
                    field.valid = CheckValidity(
                        value,
                        field.validation
                );
            }
            return field;
        });
                
        const invalidField = getInvalidField(state.dataStructure);

        if (Boolean(invalidField) === false){
            updateState({hideAddButton: false});
        }
        else {
            updateState({hideAddButton: true});
        }

        updateState({ experience : updatedExperience, dataStructure : updatedDataStructure});
    }

    const onAddExpHandler = () =>{
        const key = generateKey(1, 100);
        const updatedExperienceList = [
            ...state.experienceList,
            {   key : key,
                ...state.experience
            }
        ];

        setState({ experienceList : updatedExperienceList, hideAddButton: true});
        updateState({ dataStructure: DataStructure, experience: initialData});
        toggleModal();
    }

    const onDeleteHandler = (key) => {
        //Remove by filter.
        const updatedExperienceList = state.experienceList.filter(item => item.key !== key);
        updateState({ experienceList : updatedExperienceList});
    }

    const renderForm = (
            <Form 
                dataStructure        ={state.dataStructure} 
                data                 ={state.experience}
                onInputChangeHandler ={ e=> onInputChangeHandler(e)}
                onAddHandler         ={onAddExpHandler}
                hideAddButton        ={state.hideAddButton}
            /> 
    );

    return (
        <div className='expContainer'>
            <Table
                tableHeader ={state.dataStructure}
                tableBody   ={state.experienceList}
                onDelete    ={onDeleteHandler}/>

            <Button
                onClick ={onShowModalClick}
                title   ='Add Experience'                
            />

            <Modal 
                show    ={state.showModal}
                onClose ={toggleModal}
                title   ='Add Experience'>
                    { renderForm }
            </Modal>

        </div>
     );
}