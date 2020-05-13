import React from 'react';
import { PersonalInformationForm } from '../../components/PersonalInformationForm';
import { OtherInformationForm } from '../../components/OtherInformationForm';
import { AttachDocumentForm } from '../../components/AttachDocumentForm';

import { ExperienceFormInputs } from '../../_utils/FormStructure/ExperienceFormInputs';
import { QualificationFormInputs } from '../../_utils/FormStructure/QualificationFormInputs';

import { Section } from '../../_shared/Section';

import './index.scss';

export const Form = () => {
    const sections = [
        {
            title: 'Personal Information',
            subTitle: 'All fields are compulsary.',
            component: <PersonalInformationForm/> 
        },
        {
            title: 'Educational Qualification',
            subTitle: 'Add all your educational qualifications.',
            component: <OtherInformationForm 
                            formInputs={QualificationFormInputs} 
                            buttonTitle='Add Qualification'
                            containerClassName='qualification-container'/>
        },
        {
            title: 'Experience Details',
            subTitle: 'Add all your previous work experience.',
            component: <OtherInformationForm 
                            formInputs={ExperienceFormInputs} 
                            buttonTitle='Add Experience'
                            containerClassName='experience-container'/>
        },
        {
            title: 'Attach Documents',
            subTitle: 'Attach all documents to prove the details you provided (Ex. copy of voter ID, Degree certificates, Document to prove work experience, etc).',
            component: <AttachDocumentForm/>
        }
    ];

    const renderSections = (
            sections.map(({title, subTitle, component}) => {
                return (
                    <Section 
                        key      ={title}
                        title    ={title} 
                        subTitle ={subTitle}>

                        {component}
                    </Section>
                )
            })
    );

    return(
        <div className='main-form'>
            <h2>Candidate Details Form</h2>
            { renderSections }   
        </div>
    );
}