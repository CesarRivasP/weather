import React from 'react';

const Error = (props) => {
  return (
    <div className="col-sm-4 col-lg-6 container mt-4">
      <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">Error</h4>
        <p>{ props.message }</p>
      </div>
    </div>
  );
}

export default Error;
