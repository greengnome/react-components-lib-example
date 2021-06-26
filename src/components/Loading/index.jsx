import React from 'react';

import classes from './style.module.css';

const Loading = () => {
  return (
    <div className={classes['loading-wrapper']}>
      <h1 className={classes['loading-text']}>Loading...</h1>
    </div>
  );
};

export default Loading;
