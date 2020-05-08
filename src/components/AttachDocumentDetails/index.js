import React, { useState } from 'react';
import { Button } from '../../_shared/Button';
import { Modal } from '../../_shared/Modal';

import { AddFileForm } from './AddFileForm';

import './style.scss';

export const AttachDocumentDetails = () => {

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
        const updatedfileList = state.fileList.filter(item => item.key !== key);
        updateState({ fileList: updatedfileList });
    }

    const onFileLoadHanlder = (url) => {
        window.open(url, "_blank");
    }

    const getResultView = () => {
        const hasRows = (state.fileList && state.fileList.length !== 0);
        if (hasRows === true) {
            return (state.fileList.map(file => {
                return (
                    <div className="file-list" key={file.key}>
                        <div className="file-title">
                            <span><b>{file.title}</b></span><br />
                            <span>{file.description} </span>

                        </div>
                        <div className='other-div'>
                            <div onClick={() => onFileLoadHanlder(file.url)}
                                alt='View File'>View File</div>
                        </div>
                        <div className="other-div">
                            <div title='Delete'
                                onClick={() => onDeleteHandler(file.key)} >Delete </div>
                        </div>
                    </div>
                )
            }))
        }
    }

    return (
        <div className='attach-container'>
            {getResultView()}
            <Button
                title="Add File"
                onClick={onShowModalClick} />

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
        </div>
    );
}