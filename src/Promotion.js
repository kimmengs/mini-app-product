import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Promotions.css"; // Add any additional custom styles here

const Promotions = () => {
    return (
        <div className="container mt-3">
            <h2 className="text-center">Promotions</h2>

            <div className="featured-section mt-4">
                <h4>Featured</h4>
                <div className="row">
                    <div className="col-6 mb-3">
                        <div className="card text-center h-100">
                            <div className="card-body">
                                <img
                                    src="https://www.sender.net/wp-content/uploads/2022/07/b058-Promotional-Marketing-in-2022-A-Complete-Guide-small-1024x658.webp"
                                    className="card-img-top mb-2"
                                    alt="TAP Track Win"
                                />
                                <h5 className="card-title">TAP, TRACK, WIN</h5>
                                <p className="card-text">
                                    Join TAP, TRACK, WIN today to enjoy more rewards!
                                </p>
                                <a href="#" className="btn btn-warning">
                                    Got 30% OFF
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mb-3">
                        <div className="card text-center h-100">
                            <div className="card-body">
                                <img
                                    src="https://www.sender.net/wp-content/uploads/2022/07/b058-Promotional-Marketing-in-2022-A-Complete-Guide-small-1024x658.webp"
                                    className="card-img-top mb-2"
                                    alt="Durian Promo"
                                />
                                <h5 className="card-title">Durian Deals</h5>
                                <p className="card-text">
                                    Enjoy more durian deals at RM30 OFF when you scan & pay!
                                </p>
                                <a href="#" className="btn btn-warning">
                                    Got 40% OFF
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="latest-section mt-4">
                <h4>Latest</h4>
                <div className="card text-center mb-3">
                    <div className="card-body">
                        <img
                            src="https://www.sender.net/wp-content/uploads/2022/07/b058-Promotional-Marketing-in-2022-A-Complete-Guide-small-1024x658.webp"
                            className="card-img-top mb-2"
                            alt="Aurum Theatre"
                        />
                        <h5 className="card-title">Aurum Theatre</h5>
                        <p className="card-text">20% OFF at Aurum Theatre</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promotions;
