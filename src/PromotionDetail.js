import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PromotionDetail.css"; // Include custom styles
import { FaArrowLeft } from "react-icons/fa"; // Import a left arrow icon from react-icons
import { useNavigate } from "react-router-dom";

const PromotionDetail = ({ promotion }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigates back to the previous page
  };
  return (
    <div className="container mt-4">
      <div className="toolbar d-flex align-items-center mb-3">
        <button className="btn btn-link text-dark p-0" onClick={handleBack}>
          <FaArrowLeft size={20} /> {/* Add the left arrow icon */}
        </button>
        <h2 className="ml-2 mb-0 pr-4">Promotion Detail</h2>
      </div>
      <div className="card">
        <img
          src={promotion.imageUrl}
          className="card-img-top"
          alt={promotion.title}
        />
        <div className="card-body">
          <h2 className="card-title">{promotion.title}</h2>
          <p className="card-text">{promotion.description}</p>
          <div className="card-footer">
            <button className="btn btn-warning btn-block">
              Redeem Offer
            </button>
          </div>
        </div>
      </div>

      <div className="additional-info mt-4">
        <h4>Terms & Conditions</h4>
        <p>{promotion.terms}</p>
      </div>

    </div>
  );
};

export default PromotionDetail;
