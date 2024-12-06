import React from 'react';
import TextField from '@mui/material/TextField';
import './ContactUs.css'; // Make sure to import the CSS file
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1); // Navigate to the previous screen
    };
    return (
        <div className="contact-us-container">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <button className="btn" onClick={handleBackClick}>
                    <i className="fa fa-arrow-left"></i>
                </button>
                <h2 className="text-center header-promotion">Contact Us</h2>
                <div style={{ width: '24px' }}></div>
            </div>
            <form className="contact-us-form">
                <div className="form-group">
                    <TextField
                        type="number"
                        id="name"
                        label="Enter your phone number"
                        variant="standard"
                        fullWidth
                    />
                </div>
            </form>
            <button type="submit" className="btn btn-primary submit-button">Submit</button>
        </div>
    );
};

export default ContactUs;