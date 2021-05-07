import React, { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
      <section>
      <h1 className = 'outer'>
        <i className = 'fas fa-exclamation-triangle' style = {{color: '#f0f8ff'}}/> Page Not Found
      </h1>
      <p className = 'message'>Sorry, this page does not exist</p>
      </section>
    </Fragment>
  );
};

export default NotFound;
