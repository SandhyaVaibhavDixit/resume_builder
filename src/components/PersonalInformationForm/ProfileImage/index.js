import React, { useState } from 'react';
import { ImageCrop } from "../../../_shared/ImageCrop";
import { Modal } from '../../../_shared/Modal';
import { verifyFile } from '../../../_utils/verifyFile';
import defaultImage from '../../../_assets/images/user_default.png';

import './index.scss';

export const ProfileImage = () => {
    const initialState = {
        userProfileImage: null,
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

    const onImageCrop = () => {
        if ( imageEditor !== null ){
            const url = imageEditor.getImageScaledToCanvas().toDataURL();     
            setImageData({ userProfileImage : url });
        }
        toggleModal();
    }
   
    const onImageFileChangeHandler = (e) => {
        const file = e.target.files[0];
        const acceptedFileExtensions = ['png', 'jpg', 'jpeg', 'gif'];

        if( file !== undefined && verifyFile(file, acceptedFileExtensions)){
            setImageData({ selectedFile : file });
            setShowModal(true);
        }
    }

    const renderProfileImage = () => {
        const profileImage = imageData.userProfileImage ? 
                                imageData.userProfileImage : 
                                defaultImage;

        return(
            <img className='profile-image' src={profileImage} alt='user-logo' />
        )
    }

    const renderLabel = () => (
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
    )

    const renderModel = () => (
        <Modal 
            show    ={showModal}
            onClose ={toggleModal}
            title   ='Crop'>

            <ImageCrop 
                imagefile     ={imageData.selectedFile} 
                setEditorRef  ={setEditorRef} 
                onImageCrop   ={onImageCrop} 
            />  
            
        </Modal>
    )

    const renderForm = () => (
        <div className='main-div'>
            
            { renderProfileImage() }

            <br/>
            { renderLabel() }
            
            { renderModel() }
        </div>
    )

    return(
        <div className='profile-image-div'>
            { renderForm() }
        </div>
    );
} 
