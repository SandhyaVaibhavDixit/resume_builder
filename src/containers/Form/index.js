import React from 'react';
import { PersonalDetails } from '../../components/PersonalDetails';
import { ExperienceDetails } from '../../components/ExperienceDetails';
import { QualificationDetails } from '../../components/QualificationDetails';
import { AttachDocumentDetails } from '../../components/AttachDocumentDetails';
import { Section } from '../../_shared/Section';

import './style.scss';

export const Form = () => {
    const sections = [
        {
            title: 'Personal Details',
            subTitle: 'All fields are compulsary',
            component: <PersonalDetails/> 
        },
        {
            title: 'Qualification Details',
            subTitle: 'Add all your previous work experience',
            component: <QualificationDetails/>
        },
        {
            title: 'Experience Details',
            subTitle: 'Add all your educational qualifications',
            component: <ExperienceDetails/>
        },
        {
            title: 'Attach Documents',
            subTitle: 'Attach all documents to prove the details you provided (Ex. copy of voter ID, Degree certificates, Document to prove work experience, etc)',
            component: <AttachDocumentDetails/>
        }
    ];

    const renderSections = (
            sections.map( eachSection => {
                return (
                    <Section 
                        key      ={eachSection.title}
                        title    ={eachSection.title} 
                        subTitle ={eachSection.subTitle}>

                        {eachSection.component}
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