import React, { useState } from 'react';
import { ImageCrop } from "../../../_shared/ImageCrop";
import { Modal } from '../../../_shared/Modal';
import { verifyFile } from '../../../_utils/verifyFile';
import defaultImage from '../../../_assets/images/user_default.png';

import './index.scss';

export const ProfileImage = () => {
    const initialState = {
        userProfileImg: null,
        selectedFile: null,
        editor: null
    };

    let imageEditor= null;
    const [ imageData, setImageData ] = useState(initialState);
    const [ showModal, setShowModal] = useState(false);

    const setEditorRef = (editor) => imageEditor = editor;

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const onCrop = () => {
        if ( imageEditor !== null ){
            const url = imageEditor.getImageScaledToCanvas().toDataURL();     
            setImageData({ userProfileImg : url });
        }
        toggleModal();
    }
   
    const onImageFileChangeHandler = (e) => {
        const file = e.target.files[0];
        const acceptedFileExtension = ['png', 'jpg', 'jpeg', 'gif'];

        if( file !== undefined && verifyFile(file, acceptedFileExtension)){
            setImageData({ selectedFile : file });
            setShowModal(true);
        }
    }

    const renderProfileImage = () => {
        const profileImage = imageData.userProfileImg ? 
                                imageData.userProfileImg : 
                                defaultImage;

        return(
            <img className='profile-image' src={profileImage} alt='user-logo' />
        )
    }

    return(
        <div className='main-div'>
            {renderProfileImage()}
            <br/>
            <label className='label-upload' title="Select image">  
                <input 
                    hidden
                    type     ='file'
                    name     ='profileImg'
                    accept   ='image/png, image/jpeg, image/jpg'
                    onChange ={onImageFileChangeHandler}
                />
                Select image
            </label>
            
            <Modal 
                show    ={showModal}
                onClose ={toggleModal}
                title   ='Crop'>

                <ImageCrop 
                    imagefile     ={imageData.selectedFile} 
                    setEditorRef  ={setEditorRef} 
                    onCrop        ={onCrop} 
                />  
                
            </Modal>
        </div>
    );
} 
