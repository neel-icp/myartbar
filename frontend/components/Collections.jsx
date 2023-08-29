import React from 'react';
import './Collections.css';

const Collections = () => {
  const repeatTimes = 20; // Repeat enough times to fill the screen
  const collectionsArr = new Array(repeatTimes).fill("COLLECTIONS");

  return (
    <div className="scroll-container">
      <div className="scroll-text">
        {collectionsArr.map((item, index) => (
          <h2 className={index % 2 === 0 ? 'filled' : 'outline'} key={index}>{item}</h2>
        ))}
      </div>
      <div className="scroll-text">
        {collectionsArr.map((item, index) => (
          <h2 className={index % 2 === 0 ? 'filled' : 'outline'} key={index + repeatTimes}>{item}</h2>
        ))}
      </div>
    </div>
  );
};

export default Collections;
