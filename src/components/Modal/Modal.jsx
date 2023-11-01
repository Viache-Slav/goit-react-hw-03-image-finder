
import React, { useState } from 'react';
import css from 'components/Modal/Modal.module.css'

const Modal = ({ largeImageURL, onClose }) => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const handleImageClick = () => {
    console.log('Image clicked');
    setIsImageExpanded(!isImageExpanded);
  };

  return (
    <div className={css.Overlay} onClick={onClose}>
      <div className={css.Modal}>
        <img
          src={largeImageURL}
          alt="modal"
          className={`${css.Image} ${isImageExpanded ? css.Expanded : ''}`}
          onClick={handleImageClick}
        />
      </div>
    </div>
  );
};

export default Modal;
