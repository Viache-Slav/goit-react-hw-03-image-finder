
import React, { useState, useEffect } from 'react';
import css from 'components/Modal/Modal.module.css'

const Modal = ({ largeImageURL, onClose }) => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const handleImageClick = () => {
    setIsImageExpanded(!isImageExpanded);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [onClose]);

  return (
    <div className={css.Overlay} onClick={onClose}>
      <div className={css.Modal}>
        <img className={css.Image}
          src={largeImageURL}
          alt="modal"
          onClick={handleImageClick}
        />
      </div>
    </div>
  );
};

export default Modal;
