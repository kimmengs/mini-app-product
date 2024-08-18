import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./Promotions.css"; // Add any additional custom styles here

const Promotions = () => {
    return (
        <div className="container mt-3">
            <h2 className="text-center">Promotions</h2>

            <div className="featured-section mt-4">
                <h4>Featured</h4>
                <div id="featuredCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-6">
                                    <div className="card text-center">
                                        <img
                                            src="assets/images/m2u-decomm.jpg"
                                            className="card-img-top"
                                            alt="TAP Track Win"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">TAP, TRACK, WIN</h5>
                                            <p className="card-text">
                                                Join TAP, TRACK, WIN today to enjoy more rewards!
                                            </p>
                                            <a href="#" className="btn btn-warning">
                                                Earn up to RM140
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="card text-center">
                                        <img
                                            src="assets/images/sp-durian-rm50.jpg"
                                            className="card-img-top"
                                            alt="Durian Promo"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">Durian Deals</h5>
                                            <p className="card-text">
                                                Enjoy more durian deals at RM30 OFF when you scan & pay!
                                            </p>
                                            <a href="#" className="btn btn-warning">
                                                RM30 OFF
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-6">
                                    <div className="card text-center">
                                        <img
                                            src="assets/images/ttw-ao-june24.jpg"
                                            className="card-img-top"
                                            alt="Card 3"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">Card 3</h5>
                                            <p className="card-text">
                                                Description for Card 3
                                            </p>
                                            <a href="#" className="btn btn-warning">
                                                Action 3
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="card text-center">
                                        <img
                                            src="assets/images/m2u-decomm.jpg"
                                            className="card-img-top"
                                            alt="Card 4"
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">Card 4</h5>
                                            <p className="card-text">
                                                Description for Card 4
                                            </p>
                                            <a href="#" className="btn btn-warning">
                                                Action 4
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Add more carousel items here for the other cards */}
                    </div>
                    {/* <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#featuredCarousel"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#featuredCarousel"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button> */}
                </div>
            </div>

            <div className="latest-section mt-4">
                <h4>Latest</h4>
                <div className="card text-center mb-3">
                    <img
                        src="assets/images/You-Eng-Hotel-640.jpeg"
                        className="card-img-top"
                        alt="Aurum Theatre"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Aurum Theatre</h5>
                        <p className="card-text">20% OFF at Aurum Theatre</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promotions;
