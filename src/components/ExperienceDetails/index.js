import React, { useState } from 'react';
import { DataStructure } from '../../_shared/FormStructure/ExperienceDetails';
import { Modal } from '../../_shared/Modal';
import { Table } from '../../_shared/Table';
import { Button } from '../../_shared/Button';
import { Input } from '../../_shared/Input';
import { generateKey } from '../../_utils/generateKey';
import useForm from '../../_utils/useForm';
import './style.scss';

export const ExperienceDetails = () => {
    const onAddExpHandler = () => { 
        const key = generateKey(1, 100);
        
        const updatedExperienceList = [
            ...state.experienceList,
            {   
                key: key,
                ...values
            }
        ];

        updateState({ experienceList : updatedExperienceList});
        toggleModal();
    }

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
      } = useForm(onAddExpHandler, DataStructure);

    const initialState = {
        experienceList: [],
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
        const updatedExperienceList = state.experienceList.filter(item => item.key !== key);
        updateState({ experienceList : updatedExperienceList});
    }

    const renderForm = (
        <form onSubmit={handleSubmit} className='form'>
        {
            DataStructure.map(eachDetail => {
                return (
                    <div key ={eachDetail.name}>
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
        <div className='expContainer'>
            <Table
                tableHeader ={DataStructure}
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