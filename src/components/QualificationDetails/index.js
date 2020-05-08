import React, { useState } from 'react';
import { FormInputs } from '../../_shared/FormStructure/QualificationDetails';
import { Modal } from '../../_shared/Modal';
import { Table } from '../../_shared/Table';
import { Button } from '../../_shared/Button';

import { AddForm } from '../../_shared/Form';

import './style.scss';

export const QualificationDetails = () => {
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
        const updatedDataList = state.dataList.filter(item => item.key !== key);
        updateState({ dataList : updatedDataList});
    }


    return (
        <div className='qualification-container'>
            <Table
                tableHeader ={FormInputs}
                tableBody   ={state.dataList}
                onDelete    ={onDeleteHandler}/>
            <br></br>
            <Button
                onClick ={onShowModalClick}
                title   ='Add Qualification'                
            />

            <Modal 
                show    ={state.showModal}
                onClose ={toggleModal}
                title   ='Add Qualification'>

                <AddForm
                    formInputs={FormInputs}
                    dataList={state.dataList}
                    updateParentState={updateState}
                    toggleModal={toggleModal}
                />

            </Modal>

        </div>
     );
}