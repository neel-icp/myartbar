import React from 'react';
import './Loading.css';

const Loading = ({ isLoading }) => {
    return (
      <div className={`loading-container ${isLoading ? '' : 'hidden'}`}>
        <div className="loading-bar"></div>
      </div>
    );
  };  

export default Loading;
