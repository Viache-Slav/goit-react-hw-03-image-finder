import React from 'react';
import css from 'components/Button/Button.module.css';

const Button = ({ onClick }) => (
  <button type="button" className={css.Button} onClick={onClick}>
    Load More
  </button>
);

export default Button;
