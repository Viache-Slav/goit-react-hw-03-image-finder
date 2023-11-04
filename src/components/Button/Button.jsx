import React from 'react';
import css from 'components/Button/Button.module.css';

const Button = ({ onClick, isButtonVisible }) => (
  <button 
  type="button" 
  className={css.Button} 
  onClick={onClick}
  style={{ display: isButtonVisible ? 'block' : 'none' }}
  >
    Load More
  </button>
);

export default Button;
