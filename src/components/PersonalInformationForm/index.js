import React, { useState } from 'react';
import { PersonalInformationFormInputs as formInputs } from '../../_shared/FormStructure/PersonalInformationFormInputs';
import { ProfileImage } from './ProfileImage';

import './index.scss';
import TextInput from '../../_shared/TextInput';

export const PersonalInformationForm = () => {

    const getInitialState = () => formInputs.reduce((state, { name, value }) => {
        state[name] = value;
        return state;
    }, {});

    const [state, updateState] = useState(() => getInitialState());
    const setState = (state) => updateState(prevState => ({...prevState, state}));

    const onUpdate = ({target: {name, value}}) => {
        setState({ [name]: value });
    }

    const renderInputs = () => {
        return formInputs.map(({ name, label, placeholder, validation }) => (
            <TextInput
                key={name}
                name={name}
                value={state[name]}
                label={label}
                placeholder={placeholder}
                validation={validation}
                onUpdate={onUpdate}
            />
        ))
    }

    const renderForm = () => (
        <div className='details-div'>
            <div className='form'>
                {renderInputs()}
            </div>
        </div>
    );

    return (
        <div className='personal-details row'>
            {renderForm()}
            <ProfileImage />
        </div>
    );
}   