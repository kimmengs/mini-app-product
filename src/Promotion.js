import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./Promotions.css"; // Add any additional custom styles here
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const Promotions = () => {
    const categories = ['Feature', 'Latest', 'Education', 'Heath Care'];

    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    const navigateToDetail = (id) => {
        navigate(`/promotion/${id}`);
    };
    const handleSearchClick = () => setShowSearch(!showSearch);
    const handleSearchChange = (e) => setSearchQuery(e.target.value);


    return (
        <div className="container mt-3 p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <button className="btn">
                    <i className="fa fa-arrow-left"></i>
                </button>
                <h2 className="text-center pb-3 header-promotion">Promotions</h2>
                <button className="btn" onClick={handleSearchClick}>
                    <i className="fa fa-search"></i>
                </button>
            </div>

            {showSearch && (
                <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                </CSSTransition>
            )}


            <div className="scrolling-wrapper mb-3">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className={`card-category text-center ${activeCategory === category ? 'active' : ''}`}
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleCategoryClick(category)}
                    >
                        <div className="card-body text-left">
                            <p className="card-title-category">{category}</p>
                        </div>
                    </div>
                ))}
            </div>


            <h5 className="title">Foot & Drink</h5>
            <div className="pb-3"></div>
            <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
                <div className="card text-center mb-3" style={{ cursor: 'pointer' }}>
                    <img
                        src="assets/images/You-Eng-Hotel-640.jpeg"
                        className="card-img-top"
                        alt="Aurum Theatre"
                        onClick={navigateToDetail}
                    />
                    <div className="card-body text-left">
                        <span className="badge badge-new">New</span>
                        <h5 className="card-title">Aurum Theatre</h5>
                        <p className="card-text">20% OFF at Aurum Theatre</p>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <button className="btn">
                                <i className="fa fa-heart active"></i> 133
                            </button>
                            <button className="btn">
                                <i className="fa fa-share"></i> Share
                            </button>
                        </div>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
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
                        <div className="d-flex justify-content-between">
                            <button className="btn">
                                <i className="far fa-heart"></i> 133
                            </button>
                            <button className="btn">
                                <i className="fa fa-share"></i> Share
                            </button>
                        </div>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
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
                        <div className="d-flex justify-content-between">
                            <button className="btn">
                                <i className="far fa-heart active"></i> 133
                            </button>
                            <button className="btn">
                                <i className="fa fa-share"></i> Share
                            </button>
                        </div>
                    </div>
                </div>
            </CSSTransition>
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
                    <div className="d-flex justify-content-between">
                        <button className="btn">
                            <i className="far fa-heart"></i> 133
                        </button>
                        <button className="btn">
                            <i className="fa fa-share"></i> Share
                        </button>
                    </div>
                </div>
            </div>


            <h5 className="title">Beauty</h5>
            <div className="pb-3"></div>
            <div className="card text-center mb-3" style={{ cursor: 'pointer' }}>
                <img
                    src="assets/images/You-Eng-Hotel-640.jpeg"
                    className="card-img-top"
                    alt="Aurum Theatre"
                    onClick={navigateToDetail}
                />
                <div className="card-body text-left">
                    <span className="badge badge-new">New</span>
                    <h5 className="card-title">Aurum Theatre</h5>
                    <p className="card-text">20% OFF at Aurum Theatre</p>
                    <hr />
                    <div className="d-flex justify-content-between">
                        <button className="btn">
                            <i className="fa fa-heart active"></i> 133
                        </button>
                        <button className="btn">
                            <i className="fa fa-share"></i> Share
                        </button>
                    </div>
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
                    <div className="d-flex justify-content-between">
                        <button className="btn">
                            <i className="far fa-heart"></i> 133
                        </button>
                        <button className="btn">
                            <i className="fa fa-share"></i> Share
                        </button>
                    </div>
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
                    <div className="d-flex justify-content-between">
                        <button className="btn">
                            <i className="far fa-heart active"></i> 133
                        </button>
                        <button className="btn">
                            <i className="fa fa-share"></i> Share
                        </button>
                    </div>
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
                    <div className="d-flex justify-content-between">
                        <button className="btn">
                            <i className="far fa-heart"></i> 133
                        </button>
                        <button className="btn">
                            <i className="fa fa-share"></i> Share
                        </button>
                    </div>
                </div>
            </div>


            <h5 className="title">Entertainment</h5>
            <div className="pb-3"></div>
            <div className="card text-center mb-3" style={{ cursor: 'pointer' }}>
                <img
                    src="assets/images/You-Eng-Hotel-640.jpeg"
                    className="card-img-top"
                    alt="Aurum Theatre"
                    onClick={navigateToDetail}
                />
                <div className="card-body text-left">
                    <span className="badge badge-new">New</span>
                    <h5 className="card-title">Aurum Theatre</h5>
                    <p className="card-text">20% OFF at Aurum Theatre</p>
                    <hr />
                    <div className="d-flex justify-content-between">
                        <button className="btn">
                            <i className="fa fa-heart active"></i> 133
                        </button>
                        <button className="btn">
                            <i className="fa fa-share"></i> Share
                        </button>
                    </div>
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
                    <div className="d-flex justify-content-between">
                        <button className="btn">
                            <i className="far fa-heart"></i> 133
                        </button>
                        <button className="btn">
                            <i className="fa fa-share"></i> Share
                        </button>
                    </div>
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
                    <div className="d-flex justify-content-between">
                        <button className="btn">
                            <i className="far fa-heart active"></i> 133
                        </button>
                        <button className="btn">
                            <i className="fa fa-share"></i> Share
                        </button>
                    </div>
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
                    <div className="d-flex justify-content-between">
                        <button className="btn">
                            <i className="far fa-heart"></i> 133
                        </button>
                        <button className="btn">
                            <i className="fa fa-share"></i> Share
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Promotions;
