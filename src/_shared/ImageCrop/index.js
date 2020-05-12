import React, { useState, Fragment } from 'react';
//import AvatarEditor from 'react-avatar-editor';
import { Button } from '../Button';
import './index.scss';

const AvatarEditor = require('react-avatar-editor').default;

export const ImageCrop = (props) => {
   const { imagefile, setEditorRef, onImageCrop} = props;

    const [ scaleValue, setScaleValue ] = useState(1);

    const onScaleChange = (e) =>{
        const value = parseFloat( e.target.value);
        setScaleValue(value); 
    }

    const renderEditor = () => (
        <div className='editor'>
            <AvatarEditor 
                image  ={imagefile}
                border ={5}
                scale  ={scaleValue}
                rotate ={0}
                ref    ={setEditorRef} />
        </div>
    );

    const renderInputScale = () => (
        <div className='main'>
            <div> 
                <input 
                    type      ='range'
                    value     ={scaleValue}
                    min       ='1'
                    max       ='10'
                    className ='actions'
                    onChange  ={ e => onScaleChange(e)} />
            </div>
            <div>
                <Button
                    onClick ={onImageCrop}
                    title   ='Crop'                
                />
            </div>
        </div>
    );

    return (
        <Fragment>
            { renderEditor() }
            { renderInputScale() }   
        </Fragment>    
    );
}