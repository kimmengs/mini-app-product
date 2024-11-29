import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom/dist';

const ContactUs = () => {

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1); // Navigate to the previous screen
    };

    return (
        <div className="container mt-3 p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <button className="btn" onClick={handleBackClick}>

                    <i className="fa fa-arrow-left"></i>
                </button>
                <h2 className="text-center header-promotion">Contact Us</h2>
                <div style={{ width: '24px' }}></div>
            </div>
            <form>
                <div className="form-group">
                    <input type="number" className="form-control" id="name" placeholder="Enter your phone number" />
                </div>
             
                <button type="submit" className="btn btn-primary w-full">Submit</button>
            </form>
        </div>

    );
};

export default ContactUs;