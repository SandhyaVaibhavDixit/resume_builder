import React, { useState } from 'react';
import { DataStructure } from '../../_shared/FormStructure/QualificationDetails';
import { Modal } from '../../_shared/Modal';
import { Table } from '../../_shared/Table';
import { Input } from "../../_shared/Input";
import { Button } from '../../_shared/Button';
import { generateKey } from '../../_utils/generateKey';
import useForm from '../../_utils/useForm';

import './style.scss';

export const QualificationDetails = () => {
    const onAddQualificationHandler = () => { 
        const key = generateKey(1, 100);
        
        const updatedQualificationList = [
            ...state.qualificationList,
            {   
                key: key,
                ...values
            }
        ];

        updateState({ qualificationList : updatedQualificationList});
        values = {};
        toggleModal();
    }

    let {
        values,
        errors,
        handleChange,
        handleSubmit,
      } = useForm(onAddQualificationHandler, DataStructure);

    const initialState = {
        qualificationList: [],
        showModal: false,
    };

    const [ state, setState ] = useState(initialState);
    const updateState = data => setState(prevState => ({ ...prevState, ...data}));

    const onShowModalClick = () =>{
        updateState({ showModal : true });
    }

    const toggleModal = () => {
        updateState({ showModal : !state.showModal });
    }

    const onDeleteHandler = (key) => {
        //Remove by filter.
        const updatedQualificationList = state.qualificationList.filter(item => item.key !== key);
        updateState({ qualificationList : updatedQualificationList});
    }

    const renderForm = (
        <form onSubmit={handleSubmit} className='form'>
        {
            DataStructure.map(eachDetail => {
                return (
                    <div key ={eachDetail.name} className='formDiv'>
                        <Input
                            details  ={eachDetail}
                            changed  ={handleChange} 
                            value    ={values[eachDetail.name] || ''}   
                        />
                        {errors[eachDetail.name] && (
                            <p className="is-danger">{errors[eachDetail.name]}</p>
                        )}   
                    </div> 
                )           
            })
        }
            <div className='formBottom'>
                    <Button
                        title   ='Add' 
                        type    ='Submit'
                    />
            </div>
        </form>
        );

    return (
        <div className='quaContainer'>
            <Table
                tableHeader ={DataStructure}
                tableBody   ={state.qualificationList}
                onDelete    ={onDeleteHandler}/>

            <Button
                onClick ={onShowModalClick}
                title   ='Add Qualification'                
            />

            <Modal 
                show    ={state.showModal}
                onClose ={toggleModal}
                title   ='Add Qualification'>
                    { renderForm }
            </Modal>

        </div>
     );
}