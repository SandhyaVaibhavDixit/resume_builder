import React, { useState } from 'react';
import './style.scss';

export const PersonalDetails = (props) => {
    const [personalDetails, setPersonalDetails] = useState({
        name: '',
        location: '',
        zipcode: '',
        nantionality: '',
        gender: '',
        dateOfBirth: '',
        email: '',
        mobile: '',
        permanentAddress: '',
        localAddress: ''
    });

    return(
        <div className='personalDetails'>
            <div className='row'>
                <div className='details column'> 
                    <div className='row'>
                    </div>
                </div>
                <div className='ProfilePhoto  column'>
                    <div>
                        <label>Profile Photo</label>
                    </div>
                </div>
            </div>
        </div>
    );
}