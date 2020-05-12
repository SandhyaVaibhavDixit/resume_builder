import React, { useState } from 'react';

import { Modal } from '../../_shared/Modal';
import { Table } from '../../_shared/Table';
import { Button } from '../../_shared/Button';
import { AddForm } from '../../_shared/AddForm';

import './index.scss';

export const OtherInformationForm = (props) => {
    const { formInputs, buttonTitle, containerClassName } = props;

    const classes = ['container', containerClassName];
    
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
        const updatedDataList = state.dataList.filter(data => data.key !== key);
        updateState({ dataList : updatedDataList});
    }


    return (
        <div className={classes.join(' ')}>
            <Table
                headerRows  ={formInputs}
                rows        ={state.dataList}
                onDelete    ={onDeleteHandler}/>
            <br></br>
            <Button
                onClick ={onShowModalClick}
                title   ={buttonTitle}                
            />

            <Modal 
                show    ={state.showModal} 
                onClose ={toggleModal}
                title   ={buttonTitle}>

                <AddForm
                    formInputs={formInputs}
                    dataList={state.dataList}
                    updateParentState={updateState}
                    toggleModal={toggleModal}
                />

            </Modal>

        </div>
     );
}