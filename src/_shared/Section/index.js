import React from 'react';

import './style.scss';

export const Section = (props) => {
    const { title, subTitle, children } = props
    return (
        <div className="section">
            <div className="section_title">
               <p className="title">{title}</p>
               <p className="subTitle">{subTitle}</p>
            </div>
            <div className="section_content">
                {children}
            </div>          
        </div>
      );
    
}
