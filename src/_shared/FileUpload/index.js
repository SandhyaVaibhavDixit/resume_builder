import React, { useState } from 'react';

export const FileUpload = (props) => {

    const {
        value: defaultValue,
        onUpdate
    } = props;

    const initialState = {
        value: defaultValue,
    }

    const [state, updateState] = useState(initialState);
    const setState = (state) => updateState(prevState => ({...prevState, ...state}));

    const onBlur = (e) => {
        onUpdate(e)
    }

    const onChange = (e) => {
        const file = e.target.files[0];
        const value = file.name;
        
        setState({ value });
        onUpdate(e)
    }

const renderFileElement = () => {
        return(<div className='file-upload'>
                <br></br>
                <label className='label-upload' title='Upload'>
                    <input 
                        type ='file'
                        hidden
                        onBlur   ={onBlur}
                        onChange ={onChange}
                    />
                        Select File
                    </label>
                    <span className='span-file-name'>{state.value}</span>
            </div>)
}

return (
    renderFileElement() )
}