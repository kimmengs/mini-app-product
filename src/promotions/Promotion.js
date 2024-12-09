import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./Promotions.css"; // Add any additional custom styles here
import { useLocation, useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Promotions = () => {
    const categories = ['Feature', 'Latest', 'Education', 'Heath Care'];
    const { t, i18n } = useTranslation();
    const location = useLocation();

    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    // Extract language from URL
    const searchParams = new URLSearchParams(location.search);
    const language = searchParams.get('language') || 'en';
    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    const navigateToDetail = (id) => {
        navigate(`/promotion/${id}`);
    };
    const handleSearchClick = () => setShowSearch(!showSearch);
    const handleSearchChange = (e) => setSearchQuery(e.target.value);

    React.useEffect(() => {
        i18n.changeLanguage(language);
    }, [language, i18n]);

    const [promotions, setPromotions] = useState([]);

    useEffect(() => {
        const fetchPromotions = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/promotion/get`);
                if (Array.isArray(response.data.data)) {
                    setPromotions(response.data.data);
                } else {
                    console.error('Error: API response is not an array');
                }
            } catch (error) {
                console.error('Error fetching promotions:', error);
            }
        };

        fetchPromotions();
    }, []);

    // Function to get translation value by language and name
    const getTranslation = (translations, language, name) => {
        const translation = translations.find(t => t.language === language && t.name === name);
        return translation ? translation.value : '';
    };

    // Group promotions by cateName
    const groupedPromotions = Array.isArray(promotions) ? promotions.reduce((acc, promotion) => {
        const { cateName } = promotion;
        if (!acc[cateName]) {
            acc[cateName] = [];
        }
        acc[cateName].push(promotion);
        return acc;
    }, {}) : {};


    return (
        <div className="container mt-3 p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <button className="btn">
                    <i className="fa fa-arrow-left"></i>
                </button>
                <h2 className="text-center pb-3 header-promotion">{t('promotion')}</h2>
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

            <h5 className="title">Feature</h5>
            <div className="pb-3"></div>
            <div className="scrolling-wrapper mb-3">
                {Array.isArray(promotions) && promotions.filter(promotion => promotion.new).map((promotion, index) => {
                    const title = getTranslation(promotion.translations, language, 'title') || promotion.title;
                    const content = getTranslation(promotion.translations, language, 'content') || promotion.content;
                    return (
                        <div key={index} className="card special-card text-center mb-3" style={{ cursor: 'pointer' }}>
                            <img
                                src={promotion.imageUrl === '' ? 'assets/images/no-image.webp' : promotion.imageUrl}
                                className="card-img-top"
                                alt={title}
                                onClick={() => navigateToDetail(promotion.id)}
                            />
                            <div className="card-body text-left">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{content}</p>
                                <hr />
                                <div className="d-flex justify-content-between">
                                    <button className="btn">
                                        <i className="fa fa-heart active"></i> {promotion.reacted}
                                    </button>
                                    <button className="btn">
                                        <i className="fa fa-share"></i> Share
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {Object.keys(groupedPromotions).map((cateName, index) => (
                <div key={index}>
                    <h5 className="title">{cateName}</h5>
                    <div className="pb-3"></div>
                    {groupedPromotions[cateName].map((promotion, idx) => {
                        const title = getTranslation(promotion.translations, language, 'title') || promotion.title;
                        const content = getTranslation(promotion.translations, language, 'content') || promotion.content;
                        return (
                            <CSSTransition key={idx} in={true} appear={true} timeout={500} classNames="fade">
                                <div className="card text-center mb-3" style={{ cursor: 'pointer' }}>
                                    <img
                                        src={promotion.imageUrl === '' ? 'assets/images/no-image.webp' : promotion.imageUrl}
                                        className="card-img-top"
                                        alt={title}
                                        onClick={() => navigateToDetail(promotion.id)}
                                    />
                                    <div className="card-body text-left">
                                        <h5 className="card-title">{title}</h5>
                                        <p className="card-text">{content}</p>
                                        <hr />
                                        <div className="d-flex justify-content-between">
                                            <button className="btn">
                                                <i className="fa fa-heart active"></i> {promotion.reacted}
                                            </button>
                                            <button className="btn">
                                                <i className="fa fa-share"></i> Share
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </CSSTransition>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default Promotions;
