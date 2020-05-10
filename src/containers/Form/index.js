import React from 'react';
import { PersonalInformationForm } from '../../components/PersonalInformationForm';
import { UserInformationForm } from '../../components/UserInformationForm';
import { AttachDocumentForm } from '../../components/AttachDocumentForm';

import { ExperienceFormInputs } from '../../_shared/FormStructure/ExperienceFormInputs';
import { QualificationFormInputs } from '../../_shared/FormStructure/QualificationFormInputs';

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
            component: <UserInformationForm 
                            formInputs={QualificationFormInputs} 
                            btnTitle='Add Qualification'
                            containerClassName='qualification-container'/>
        },
        {
            title: 'Experience Details',
            subTitle: 'Add all your previous work experience.',
            component: <UserInformationForm 
                            formInputs={ExperienceFormInputs} 
                            btnTitle='Add Experience'
                            containerClassName='experience-container'/>
        },
        {
            title: 'Attach Documents',
            subTitle: 'Attach all documents to prove the details you provided (Ex. copy of voter ID, Degree certificates, Document to prove work experience, etc).',
            component: <AttachDocumentForm/>
        }
    ];

    const renderSections = (
            sections.map( section => {
                return (
                    <Section 
                        key      ={section.title}
                        title    ={section.title} 
                        subTitle ={section.subTitle}>

                        {section.component}
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