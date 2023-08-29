import React from 'react';
import './PuzzleCollections.css';

const Collections = () => {
  const repeatTimes = 20; // Repeat enough times to fill the screen
  const collectionsArr = new Array(repeatTimes).fill("ICPUZZLE");

  return (
    <div className="Pscroll-container">
      <div className="Pscroll-text">
        {collectionsArr.map((item, index) => (
          <h2 className={index % 2 === 0 ? 'Pfilled' : 'Poutline'} key={index}>{item}</h2>
        ))}
        {collectionsArr.map((item, index) => (
          <h2 className={index % 2 === 0 ? 'Pfilled' : 'Poutline'} key={index + repeatTimes}>{item}</h2>
        ))}
      </div>
    </div>
  );
};

export default Collections;
