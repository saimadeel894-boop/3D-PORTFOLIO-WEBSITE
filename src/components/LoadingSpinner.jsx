import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner-circle"></div>
        <div className="spinner-circle spinner-circle-2"></div>
        <div className="spinner-circle spinner-circle-3"></div>
      </div>
      <p className="loading-text">Loading 3D Experience...</p>
    </div>
  );
};

export default LoadingSpinner;