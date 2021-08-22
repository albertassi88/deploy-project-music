import React from 'react';
import '../style/Loading.css';

function Loading() { 
    return (
      <div className="center">
        <div className="text">Loading....</div>
        <div className="ring"></div>
      </div>
    );
}

export default Loading;