import React, { useState } from 'react';
import { PersonalInformationFormInputs as formInputs } from '../../_utils/FormStructure/PersonalInformationFormInputs';
import { ProfileImage } from './ProfileImage';

import './index.scss';
import { InputElements } from '../../_shared/InputElements';

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
        return formInputs.map(({ name, label, elementType, config, validation }) => (
            <InputElements
                key={name}
                name={name}
                value={state[name]}
                label={label}
                elementType={elementType}
                placeholder={config.placeholder}
                options={config.options}
                validation={validation}
                onChange={onUpdate}
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