import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './PromotionDetail.css'; // Assuming you have a CSS file for custom styles

const PromotionDetail = ({ promotion }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigates back to the previous page
  };

  return (
    <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
      <div className="container mt-4">
        <div className="toolbar d-flex align-items-center mb-3">
          <button className="btn btn-link text-dark p-12" onClick={handleBack}>
            <FaArrowLeft size={20} />
          </button>
          <h2 className="ml-2 mb-0 pr-4 title-toolbar">Promotion Detail</h2>
        </div>
        <img
          src={promotion.imageUrl}
          className="card-img-top"
          alt={promotion.title}
        />
        <hr />
        <div className="d-flex justify-content-between">
          <button className="btn">
            <i className="far fa-heart"></i> 133
          </button>
          <button className="btn">
            <i className="fa fa-share"></i> Share
          </button>
        </div>
        <div className="p-3">
          <h3 className="mt-3">{promotion.title}</h3>
          <p>{promotion.description}</p>
        </div>
      </div>
    </CSSTransition>
  );
};

export default PromotionDetail;