import React from 'react';

import './index.scss';

export const Section = (props) => {
    const { title, subTitle, children } = props

    const renderSection = () => (
        <div className="section">
            <div className="section_title">
            <p className="title">{title}</p>
            <p className="sub-title">{subTitle}</p>
            </div>
            <div className="section_content">
                {children}
            </div>          
        </div>
    );

    return (
         renderSection() 
    );
}
