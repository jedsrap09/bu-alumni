import React from 'react';
import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <Spinner
        animation="border"
        variant="warning"
        style={{
            width: '100px',
            height: '100px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '400px',
            display: 'block'
        }}>
    </Spinner>
  );
};

export default Loader;