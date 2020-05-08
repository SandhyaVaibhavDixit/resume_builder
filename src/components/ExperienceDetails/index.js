import React, { useState } from 'react';

import { FormInputs } from '../../_shared/FormStructure/ExperienceDetails';
import { Modal } from '../../_shared/Modal';
import { Table } from '../../_shared/Table';
import { Button } from '../../_shared/Button';
import { AddForm } from '../../_shared/Form';

import './style.scss';

export const ExperienceDetails = () => {

    const initialState = {
        dataList: [],
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
        const updateddataList = state.dataList.filter(item => item.key !== key);
        updateState({ dataList : updateddataList});
    }


    return (
        <div className='exp-container'>
            <Table
                tableHeader ={FormInputs}
                tableBody   ={state.dataList}
                onDelete    ={onDeleteHandler}/>
            <br></br>
            <Button
                onClick ={onShowModalClick}
                title   ='Add Experience'                
            />

            <Modal 
                show    ={state.showModal}
                onClose ={toggleModal}
                title   ='Add Experience'>

                <AddForm
                    formInputs        ={FormInputs}
                    dataList          ={state.dataList}
                    updateParentState ={updateState}
                    toggleModal       ={toggleModal}
                />
            
            </Modal>

        </div>
     );
}