import React, { useState } from 'react';
import { DataStructure } from '../../_shared/FormStructure/QulificationDetails';
import { Input } from '../../_shared/Input';
import { Modal } from '../../_shared/Modal';
import { CheckValidity } from '../../_utils/CheckValidity'; 


export const QualificationDetails = () => {
    const initialdata = {
        qualificationLevel: 'tenth',
        university: '',
        yearOfPass: '',
        resultClassification: 'third',
        institute: '',
        subject: '',
        percentage: '',
    }

    const initialState = {
        dataStructure : DataStructure,
        qualification : initialdata,
        qualifications : []
    }

    const [ state, setState] = useState(initialState);
    const [ showModal, setShowModal] = useState(false);
    const updateState = data => setState(prevState => ({ ...prevState, ...data }));
    
    const onClick = () =>{
        setShowModal(true);
    }

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const onChangeHandler = (e) => {
        const { name, value } = e.target;

        console.log(name);

        const updatedQualification = {
            ...state.qualification,
            [name]: value
        };

        const updatedDataStructure = state.dataStructure.map(field => {
            if (field.name === name) {
                field.touched = true;
                field.value = value;

                field.valid = CheckValidity(
                    value,
                    field.validation
                );
            }
            return field;
        });

        setState({
            qualification: updatedQualification,
            dataStructure: updatedDataStructure
        });
    }

    const formElement = (
        <div className='form'>
          { state.dataStructure.map(eachData => (
            <Input
                key            ={eachData.name}
                name           ={eachData.name}
                label          ={eachData.label}
                type           ={eachData.type}
                config         ={eachData.config}
                value          ={eachData.value}
                invalid        ={!eachData.valid}
                shouldValidate ={eachData.validation}
                touched        ={eachData.touched}
                changed ={e => onChangeHandler(e)}
            />            
          ))}
        </div>
      );

    return (
        <div>
            <button onClick={onClick}>Add</button>

            <Modal 
                show= {showModal}
                onClose= {toggleModal}
                title= 'Add Educational Details'>

                    {formElement}

            </Modal>

        </div>
     );
}