import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { FaArrowLeft } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const PromotionDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { promotion, language } = location.state || {};
  const { t, i18n } = useTranslation();

  // Change language based on the passed language parameter
  React.useEffect(() => {
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [language, i18n]);

  // Function to get translation value by language and name
  const getTranslation = (translations, language, name) => {
    if (!translations) return '';
    const translation = translations.find(t => t.language === language && t.name === name);
    return translation ? translation.value : '';
  };

  // Get translated title and content
  const title = getTranslation(promotion?.translations, language, 'title') || promotion?.title || 'No title';
  const content = getTranslation(promotion?.translations, language, 'content') || promotion?.content || 'No content';

  console.log(promotion);

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
          <h2 className="ml-2 mb-0 pr-4 title-toolbar" style={{ width: '100%', height: 'auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {title}
          </h2>
        </div>
        <img
          src={promotion?.imageUrl && promotion.imageUrl !== '' ? promotion.imageUrl : `${process.env.PUBLIC_URL}/assets/images/no-image.webp`}
          className="card-img-top"
          alt={title}
        />
        <hr />
        <div className="d-flex justify-content-between">
          <button className="btn">
            <i className="far fa-heart"></i> {promotion?.reacted}
          </button>
          <button className="btn">
            <i className="fa fa-share"></i> Share
          </button>
        </div>
        <div className="p-3">
          <h3 className="mt-3">{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    </CSSTransition>
  );
};

export default PromotionDetail;