import React, {useState} from 'react';
import { checkValidity } from '../../_utils/CheckValidity';

const TextInput = (props) => {

    const {
        name,
        value: defaultValue,
        label,
        placeholder,
        validation,
        onUpdate
    } = props;

    const initialState = {
        value: defaultValue,
        touched: false,
        isValid: true,
    }

    const [state, updateState] = useState(initialState);
    const setState = (state) => updateState(prevState => ({...prevState, ...state}));

    const onFocus = () => {
        setState({ touched: true });
    }

    const onBlur = (event) => {
        onUpdate(event)
    }

    const onChange = ({target: {value}}) => {
        const isValid = checkValidity(value, validation);
        setState({ value, isValid });
    }

    return (
        <div className='text-input'>
            <label>{label}</label>
            <input 
                placeholder={placeholder}
                type='text'
                name={name}
                value={state.value}
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={onChange}
            />
        </div>
    )
}

export default TextInput;
