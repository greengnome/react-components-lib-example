import React from 'react';

import classes from './style.module.css';

const Greeting = ({ name }) => {
  return (
    <div className={classes.greeting}>
      Hello <code className={classes.name}>{name}</code>
    </div>
  );
};

export default Greeting;
