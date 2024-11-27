import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./Promotions.css"; // Add any additional custom styles here
import { useNavigate } from "react-router-dom";

const Promotions = () => {

    const navigate = useNavigate();

    const navigateToDetail = (id) => {
        navigate(`/promotion/${id}`);
    };


    return (
        <div className="container mt-3 p-4">
            <h2 className="text-center pb-3">Promotions</h2>

            <h5>Foot & Drink</h5>
            <div className="scrolling-wrapper mb-3">
                <div className="card text-center mb-3 " onClick={navigateToDetail} style={{ cursor: 'pointer' }}>
                    <img
                        src="assets/images/You-Eng-Hotel-640.jpeg"
                        className="card-img-top"
                        alt="Aurum Theatre"
                    />
                    <div className="card-body text-left">
                        <span className="badge badge-new">New</span>
                        <h5 className="card-title">Aurum Theatre</h5>
                        <p className="card-text">20% OFF at Aurum Theatre</p>
                        <hr />
                        <button className="btn btn-primary" style={{ backgroundColor: '#FFC83D', borderColor: '#FFC83D' }}>
                            <i className="fa fa-heart"></i> <span>124</span>
                        </button>
                    </div>
                </div>
                <div className="card text-center mb-3 ">
                    <img
                        src="assets/images/You-Eng-Hotel-640.jpeg"
                        className="card-img-top"
                        alt="Aurum Theatre"
                    />
                    <div className="card-body text-left">
                        <h5 className="card-title">Aurum Theatre</h5>
                        <p className="card-text">20% OFF at Aurum Theatre</p>
                        <hr />
                        <button className="btn btn-primary" style={{ backgroundColor: '#FFC83D', borderColor: '#FFC83D' }} >
                            <i className="fa fa-heart"></i> <span>124</span>
                        </button>
                    </div>
                </div>
                <div className="card text-center mb-3 ">
                    <img
                        src="assets/images/You-Eng-Hotel-640.jpeg"
                        className="card-img-top"
                        alt="Aurum Theatre"
                    />
                    <div className="card-body text-left">
                        <h5 className="card-title">Aurum Theatre</h5>
                        <p className="card-text">20% OFF at Aurum Theatre</p>
                        <hr />
                        <button className="btn btn-primary" style={{ backgroundColor: '#FFC83D', borderColor: '#FFC83D' }}>
                            <i className="fa fa-heart"></i> <span>124</span>
                        </button>
                    </div>
                </div>
                <div className="card text-center mb-3 ">
                    <img
                        src="assets/images/You-Eng-Hotel-640.jpeg"
                        className="card-img-top"
                        alt="Aurum Theatre"
                    />
                    <div className="card-body text-left">
                        <span className="badge badge-new">New</span>
                        <h5 className="card-title">Aurum Theatre</h5>
                        <p className="card-text">20% OFF at Aurum Theatre</p>
                        <hr />
                        <button className="btn btn-primary" style={{ backgroundColor: '#FFC83D', borderColor: '#FFC83D' }}>
                            <i className="fa fa-heart"></i> <span>124</span>
                        </button>
                    </div>
                </div>
            </div>

            <h5>Beauty</h5>

            <div className="scrolling-wrapper mb-3">
                <div className="card text-center mb-3 ">
                    <img
                        src="assets/images/You-Eng-Hotel-640.jpeg"
                        className="card-img-top"
                        alt="Aurum Theatre"
                    />
                    <div className="card-body text-left">
                        <h5 className="card-title">Aurum Theatre</h5>
                        <p className="card-text">20% OFF at Aurum Theatre</p>
                        <hr />
                        <button className="btn btn-primary" style={{ backgroundColor: '#FFC83D', borderColor: '#FFC83D' }}>
                            <i className="fa fa-heart"></i> <span>124</span>
                        </button>
                    </div>
                </div>
                <div className="card text-center mb-3 ">
                    <img
                        src="assets/images/You-Eng-Hotel-640.jpeg"
                        className="card-img-top"
                        alt="Aurum Theatre"
                    />
                    <div className="card-body text-left">
                        <span className="badge badge-new">New</span>
                        <h5 className="card-title">Aurum Theatre</h5>
                        <p className="card-text">20% OFF at Aurum Theatre</p>
                        <hr />
                        <button className="btn btn-primary" style={{ backgroundColor: '#FFC83D', borderColor: '#FFC83D' }}>
                            <i className="fa fa-heart"></i> <span>124</span>
                        </button>
                    </div>
                </div>
                <div className="card text-center mb-3 ">
                    <img
                        src="assets/images/You-Eng-Hotel-640.jpeg"
                        className="card-img-top"
                        alt="Aurum Theatre"
                    />
                    <div className="card-body text-left">
                        <span className="badge badge-new">New</span>
                        <h5 className="card-title">Aurum Theatre</h5>
                        <p className="card-text">20% OFF at Aurum Theatre</p>
                        <hr />
                        <button className="btn btn-primary" style={{ backgroundColor: '#FFC83D', borderColor: '#FFC83D' }}>
                            <i className="fa fa-heart"></i> <span>124</span>
                        </button>
                    </div>
                </div>
                <div className="card text-center mb-3 ">
                    <img
                        src="assets/images/You-Eng-Hotel-640.jpeg"
                        className="card-img-top"
                        alt="Aurum Theatre"
                    />
                    <div className="card-body text-left">
                        <span className="badge badge-new">New</span>
                        <h5 className="card-title">Aurum Theatre</h5>
                        <p className="card-text">20% OFF at Aurum Theatre</p>
                        <hr />
                        <button className="btn btn-primary" style={{ backgroundColor: '#FFC83D', borderColor: '#FFC83D' }}>
                            <i className="fa fa-heart"></i> <span>124</span>
                        </button>
                    </div>
                </div>
            </div>


            <h5>Entertainment</h5>

            <div className="scrolling-wrapper mb-3">
                <div className="card text-center mb-3 ">
                    <img
                        src="assets/images/You-Eng-Hotel-640.jpeg"
                        className="card-img-top"
                        alt="Aurum Theatre"
                    />
                    <div className="card-body text-left">
                        <span className="badge badge-new">New</span>
                        <h5 className="card-title">Aurum Theatre</h5>
                        <p className="card-text">20% OFF at Aurum Theatre</p>
                        <hr />
                        <button className="btn btn-primary" style={{ backgroundColor: '#FFC83D', borderColor: '#FFC83D' }}>
                            <i className="fa fa-heart"></i> <span>124</span>
                        </button>
                    </div>
                </div>
                <div className="card text-center mb-3 ">
                    <img
                        src="assets/images/You-Eng-Hotel-640.jpeg"
                        className="card-img-top"
                        alt="Aurum Theatre"
                    />
                    <div className="card-body text-left">
                        <span className="badge badge-new">New</span>
                        <h5 className="card-title">Aurum Theatre</h5>
                        <p className="card-text">20% OFF at Aurum Theatre</p>
                        <hr />
                        <button className="btn btn-primary" style={{ backgroundColor: '#FFC83D', borderColor: '#FFC83D' }}>
                            <i className="fa fa-heart"></i> <span>124</span>
                        </button>
                    </div>
                </div>
                <div className="card text-center mb-3 ">
                    <img
                        src="assets/images/You-Eng-Hotel-640.jpeg"
                        className="card-img-top"
                        alt="Aurum Theatre"
                    />
                    <div className="card-body text-left">
                        <span className="badge badge-new">New</span>
                        <h5 className="card-title">Aurum Theatre</h5>
                        <p className="card-text">20% OFF at Aurum Theatre</p>
                        <hr />
                        <button className="btn btn-primary" style={{ backgroundColor: '#FFC83D', borderColor: '#FFC83D' }}>
                            <i className="fa fa-heart"></i> <span>124</span>
                        </button>
                    </div>
                </div>
                <div className="card text-center mb-3 ">
                    <img
                        src="assets/images/You-Eng-Hotel-640.jpeg"
                        className="card-img-top"
                        alt="Aurum Theatre"
                    />
                    <div className="card-body text-left">
                        <span className="badge badge-new">New</span>
                        <h5 className="card-title">Aurum Theatre</h5>
                        <p className="card-text">20% OFF at Aurum Theatre</p>
                        <hr />
                        <button className="btn btn-primary" style={{ backgroundColor: '#FFC83D', borderColor: '#FFC83D' }}>
                            <i className="fa fa-heart"></i> <span>124</span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Promotions;
