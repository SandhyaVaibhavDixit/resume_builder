import React from "react";
import './index.scss';

export const Modal = (props) => {    
    const { show, onClose, children, title } = props;
    if (!show) {
        return null;
    }    

    const renderModal = () => (
        <div className="modal-wrapper">
            <div className="modal-header">
                <h3>{title}</h3>
                <span 
                    className="close-modal-btn" 
                    onClick={onClose}>×</span>
            </div>
            <div className="modal-body">
                    {children}
            </div>                         
        </div>
    );
    return (
        <>
            { show ? <div 
                        onClick ={onClose} 
                        className="back-drop"></div> 
                    : null 
            }

            { renderModal() }
        </>
    );  
}