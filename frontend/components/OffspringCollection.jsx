import React from 'react';
import './OffspringsCollections.css';

const OffspringCollections = () => {
  const repeatTimes = 20; // Repeat enough times to fill the screen
  const collectionsArr = new Array(repeatTimes).fill("OFFSPRINGS");

  return (
    <div className="Oscroll-container">
      <div className="Oscroll-text">
        {collectionsArr.map((item, index) => (
          <h2 className={index % 2 === 0 ? 'Ofilled' : 'Ooutline'} key={index}>{item}</h2>
        ))}
      </div>
      <div className="Oscroll-text">
        {collectionsArr.map((item, index) => (
          <h2 className={index % 2 === 0 ? 'Ofilled' : 'Ooutline'} key={index + repeatTimes}>{item}</h2>
        ))}
      </div>
    </div>
  );
};

export default OffspringCollections;
