import React, { useState } from 'react';
import { Button } from '../../_shared/Button';
import { Modal } from '../../_shared/Modal';
import { Input } from '../../_shared/Input';
import { DataStructure } from '../../_shared/FormStructure/AttachDocumentDetails';
import { CheckValidity } from '../../_utils/CheckValidity';
import { generateKey } from '../../_utils/generateKey';

import './style.scss';

export const AttachDocumentDetails = () =>{
    const initialData = {
         title: '',
         description: '',
         fileName: '',
         file: '',
         url: ''
    }
    
    const [ showModal, setShowModal] = useState(false);
    const [ fileData, setFileData] = useState(initialData);
    const [ fileDataList, setFileDataList] = useState([]);
    const [ dataStructure, setDataStructure] = useState(DataStructure);
    // const inputFileRef = createRef();

    const onClick = () =>{
        setShowModal(true);
    }

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const onChange = (e) =>{
        const file = e.target.files[0];
        setFileData({fileName: file.name, file: file });
    }

    const inputChangedHandler = (e) => {
        const {name, value} = e.target;
        const updatedFileData = {
            ...fileData,
            [name]: value
        };

        const updateDataStructure = dataStructure.map( detail => {
            if (detail.name === name) {
                    detail.valid = CheckValidity(
                        value,
                        detail.validation
                    );
                    detail.touched= true
                    };

                    return detail;
        });
            
        setFileData(updatedFileData);
        setDataStructure(updateDataStructure);
    } 

    const onAddHandler = () => {
        dataStructure.map(detail => {
            detail.touched = false;
            detail.valid = false;

            return detail;
        });

        const url = URL.createObjectURL(fileData.file);
        const key = generateKey(1, 100);
        const updatedFileListData = [
            ...fileDataList,
            {   key : key,
                url : url,
                ...fileData
            }
        ];

        setFileDataList(updatedFileListData);
        setFileData(initialData);
        setDataStructure(dataStructure);
        toggleModal();
    }

    const onDeleteHandler = (key) => {
        //Remove by filter.
        setFileDataList(fileDataList.filter(item => item.key !== key));
    }

    const onFileLoadHanlder = (url) => {
        window.open(url, "_blank");
    }

    const formElement = (
        <div>
            <div className='form'>
            <div className='fileUpload'>
                <label className='labelUpload' title='Upload'>
                    <input type ='file'
                            hidden
                            onChange ={e => onChange(e)}/>
                        Select File
                    </label>
                    <span className='fileNameSpan'>{fileData.fileName}</span>
            </div>
            { dataStructure.map(eachDetail => (
                <Input
                    key            ={eachDetail.name}
                    details        ={eachDetail}
                    value          ={fileData[eachDetail.name]}
                    shouldValidate ={eachDetail.validation}
                    colClassName   ='col'
                    changed        ={e => inputChangedHandler(e)}
                />            
            ))}            
            </div>
            <div className='formBottom'>
                <Button
                    onClick ={onAddHandler}
                    title   ='Add' 
                />
           </div>
        </div>
    )

    const hasRows = (fileDataList &&  fileDataList.length !== 0);

    let resultView = null;
    
    if(hasRows === true ){
        resultView = (fileDataList.map(eachFile => {
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
        })
    )
    }

    return (
        <div className='attachContainer'>
            {resultView}
            <Button 
                title   ="Add File"
                onClick ={onClick}/>

            <Modal 
                show    = {showModal}
                onClose = {toggleModal}
                title   = 'Add files'>
                    {formElement}
            </Modal>
        </div>
    );
}