import React from 'react';
import { PersonalDetails } from '../../components/Personal_Details';
import { ExperienceDetails } from '../../components/Experience_Details';
import { QualificationDetails } from '../../components/Qualification_Details';
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
            title: 'Experience Details',
            subTitle: 'Add all your educational qualifications',
            component: <ExperienceDetails/>
        },
        {
            title: 'Qualification Details',
            subTitle: 'Add all your previous work experience',
            component: <QualificationDetails/>
        }

    ];

    const renderSections = sections =>{
        return (
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
        )
    };

    return(
        <div className='mainForm'>
            { renderSections(sections) }   
        </div>
    );
}
