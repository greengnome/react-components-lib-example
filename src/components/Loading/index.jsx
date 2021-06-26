import React from 'react';
import PropTypes from 'prop-types';

import classes from './style.module.css';

const Loading = ({ loadingText }) => {
  return (
    <div className={classes['loading-wrapper']}>
      <h1 className={classes['loading-text']}>{loadingText}</h1>
    </div>
  );
};

Loading.propTypes = {
  loadingText: PropTypes.string,
};

Loading.defaultProps = {
  loadingText: 'Loading.....',
};

export default Loading;
