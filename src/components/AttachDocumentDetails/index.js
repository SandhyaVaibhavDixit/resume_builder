import React, { useState, Fragment } from 'react';
import { Button } from '../../_shared/Button';
import { Modal } from '../../_shared/Modal';
import { Input } from "../../_shared/Input";
import useForm from '../../_utils/useForm';
import { DataStructure } from '../../_shared/FormStructure/AttachDocumentDetails';
import { generateKey } from '../../_utils/generateKey';

import './style.scss';

export const AttachDocumentDetails = () =>{
    const onAddFileHandler = () => { 
        const key = generateKey(1, 100);
        const url = values.file !== null ?
                     URL.createObjectURL(values.file) :
                     null ;
        
        const updatedFileDataList = [
            ...state.fileDataList,
            {   
                key: key,
                url: url,
                ...values
            }
        ];

        updateState({ fileDataList : updatedFileDataList});
        toggleModal();
    }

    const {
        values,
        errors,
        handleChange,
        handleFileChange,
        handleSubmit,
      } = useForm(onAddFileHandler, DataStructure);

    const initialSate = {
        showModal : false,
        fileDataList : [],
    };

    const [ state, setState ] = useState(initialSate);
    const updateState = data => setState(preveState => ({ ...preveState, ...data }));

    const onShowModalClick = () =>{
        updateState({ showModal : true});
    }

    const toggleModal = () => {
        updateState({ showModal : !state.showModal });
    }

    const onDeleteHandler = (key) => {
        //Remove by filter.
        const updatedFileDataList = state.fileDataList.filter(item => item.key !== key);
        updateState({ fileDataList : updatedFileDataList});
    }

    const onFileLoadHanlder = (url) => {
        window.open(url, "_blank");
    }

    const renderForm = (
        <Fragment>
            <form onSubmit={handleSubmit} className='form'>
            {
                DataStructure.map(eachDetail => {
                    return (
                        <div key ={eachDetail.name}>
                            <Input
                                details  ={eachDetail}
                                changed  ={handleChange} 
                                fileChanged = {handleFileChange}
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
        </Fragment>
    )

    const getResultView = () => {
        const hasRows = (state.fileDataList &&  state.fileDataList.length !== 0);
        if (hasRows === true ){
            return (state.fileDataList.map(eachFile => {
                return(
                    <div className="fileList" key={eachFile.key}>
                        <div className="fileTitle"> 
                            <span><b>{eachFile.title}</b></span><br/>
                            <span>{eachFile.description} </span>
                            
                        </div>
                        <div className='otherDiv'>
                            <div onClick={() => onFileLoadHanlder(eachFile.url)} 
                                alt='View File'>View File</div> 
                        </div>
                        <div className="otherDiv">
                            <div title = 'Delete'
                            onClick={() => onDeleteHandler(eachFile.key)} >Delete </div>
                        </div>                    
                    </div>
                )
            }))
        }
    }

    return (
        <div className='attachContainer'>
            {getResultView()}
            <Button 
                title   ="Add File"
                onClick ={onShowModalClick}/>

            <Modal 
                show    = {state.showModal}
                onClose = {toggleModal}
                title   = 'Add files'>

                    {renderForm}
            </Modal>
        </div>
    );
}