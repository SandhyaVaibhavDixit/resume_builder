import React, { useState, Fragment } from 'react';
import { Button } from '../../_shared/Button';
import { Modal } from '../../_shared/Modal';
import { InputForm } from '../../_shared/InputForm';
import { DataStructure } from '../../_shared/FormStructure/AttachDocumentDetails';
import { CheckValidity } from '../../_utils/CheckValidity';
import { generateKey } from '../../_utils/generateKey';
import { verifyFile } from '../../_utils/verifyFile';

import './style.scss';

export const AttachDocumentDetails = () =>{
    const initialData = {
         title: '',
         description: '',
         fileName: '',
         file: null,
         url: ''
    }
    
    const initialSate = {
        showModal : false,
        fileData : initialData,
        fileDataList : [],
        dataStructure : DataStructure,
        hideAddButton : true 
    };

    const [ state, setState ] = useState(initialSate);
    const updateState = data => setState(preveState => ({ ...preveState, ...data }));

    const onShowModalClick = () =>{
        updateState({ showModal : true});
    }

    const toggleModal = () => {
        updateState({ showModal : !state.showModal });
    }

    const onInputFileChange = (e) =>{
        const file = e.target.files[0];
        const acceptedFileExtension = ['png', 'jpg', 'jpeg', 'gif', 'txt', 'doc', 'docx', 'pdf'];
        if( file !== undefined && verifyFile(file, acceptedFileExtension)){
        
            const updatedFileData = {
                ...state.fileData,
                fileName: file.name,
                file: file 
            };
            
            updateState({ fileData: updatedFileData});
            if (file != null){
                updateState({ hideAddButton: false });
            }
        }
    }

    const onInputChangeHandler = (e) => {
        const {name, value} = e.target;
        const updatedFileData = {
            ...state.fileData,
            [name]: value
        };

        const updateDataStructure = state.dataStructure.map( detail => {
            if (detail.name === name) {
                detail.valid = CheckValidity(
                    value,
                    detail.validation
                );
                detail.touched= true
            };                
            return detail;
        });
           
        //checkHideAddButton();
        updateState({fileData : updatedFileData, dataStructure: updateDataStructure });
    } 

    const onAddFileHandler = () => {
        const url = state.fileData.file !== null ?
                     URL.createObjectURL(state.fileData.file) :
                     null ;

        const key = generateKey(1, 100);
        const updatedFileListData = [
            ...state.fileDataList,
            {  
                ...state.fileData,
                key : key,
                url : url
            }
        ];

        setState({ fileDataList: updatedFileListData, hideAddButton : true });
        updateState({ fileData: initialData, dataStructure: DataStructure });
        toggleModal();
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
            <div className='form'>
                <div className='fileUpload'>
                    <label className='labelUpload' title='Upload'>
                        <input 
                            type ='file'
                            hidden
                            onChange ={e => onInputFileChange(e)}
                        />
                            Select File
                        </label>
                        <span className='fileNameSpan'>{state.fileData.fileName}</span>
                </div>
            </div>

            <InputForm 
                dataStructure= {state.dataStructure} 
                data= {state.fileData} 
                onInputChangeHandler= { e=> onInputChangeHandler(e)}
                onAddHandler = {onAddFileHandler}
                hideAddButton = {state.hideAddButton}
            /> 
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