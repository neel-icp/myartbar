import React from 'react';
import './EGGCollections.css';

const EggsCollections = () => {
  const repeatTimes = 20; // Repeat enough times to fill the screen
  const collectionsArr = new Array(repeatTimes).fill(" ''THE'' EGGS");

  return (
    <div className="Escroll-container">
      <div className="Escroll-text">
        {collectionsArr.map((item, index) => (
          <h2 className={index % 2 === 0 ? 'Efilled' : 'Eoutline'} key={index}>{item}</h2>
        ))}
      </div>
      <div className="Escroll-text">
        {collectionsArr.map((item, index) => (
          <h2 className={index % 2 === 0 ? 'Efilled' : 'Eoutline'} key={index + repeatTimes}>{item}</h2>
        ))}
      </div>
    </div>
  );
};

export default EggsCollections;
