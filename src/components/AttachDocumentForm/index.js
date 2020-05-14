import React, { useState } from 'react';
import { Button } from '../../_shared/Button';
import { Modal } from '../../_shared/Modal';

import { AddFileForm } from './AddFileForm';

import './index.scss';

export const AttachDocumentForm = () => {

    const initialSate = {
        showModal: false,
        fileList: [],
    };

    const [state, setState] = useState(initialSate);
    const updateState = data => setState(preveState => ({ ...preveState, ...data }));

    const onShowModalClick = () => {
        updateState({ showModal: true });
    }

    const toggleModal = () => {
        updateState({ showModal: !state.showModal });
    }

    const onDeleteHandler = (key) => {
        //Remove by filter.
        const updatedfileList = state.fileList.filter(file => file.key !== key);
        updateState({ fileList: updatedfileList });
    }

    const onFileLoadHanlder = (url) => {
        window.open(url, "_blank");
    }

    const getResultView = () => {
        const hasRows = (state.fileList && state.fileList.length !== 0);
        if (hasRows === true) {
            return (state.fileList.map(({ key, title, description, url}) => {
                const renderFileList = () => (
                    <div className="file-list" key={key}>
                        <div className="file-title">
                            <span><b>{title}</b></span><br />
                            <span>{description} </span>
                        </div>
                        <div className='other-div'>
                            <div onClick={() => onFileLoadHanlder(url)}
                                alt='View File'>View File</div>
                        </div>
                        <div className="other-div">
                            <div title='Delete'
                                onClick={() => onDeleteHandler(key)} >Delete </div>
                        </div>
                    </div>
                )

                return (
                    renderFileList()
                )
            }))
        }
    }

    const renderModal = () => (
        <Modal
            show={state.showModal} 
            onClose={toggleModal}
            title='Add files'
            >
            <AddFileForm
                fileList={state.fileList}
                updateParentState={updateState}
                toggleModal={toggleModal}
            />
        </Modal>
    )

    return (
        <div className='attach-container'>
            {getResultView()}
            <Button
                title="Add File"
                onClick={onShowModalClick} />

            { renderModal() }
        </div>
    );
}