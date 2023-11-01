import React from 'react';

import css from 'components/Loader/loader.module.css'

const Loader = () => (
  <div className={css.Loader}>
    <div className={css.LoaderSpinner} />
  </div>
);

export default Loader;
