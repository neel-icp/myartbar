import React from 'react';
import './PUZZLEGENZCOLLECTION.css';

const PuzzleGenzCollections = () => {
  const repeatTimes = 20;
  const collectionsArr = new Array(repeatTimes).fill("PUZZLE");

  return (
    <div className="PGscroll-container">
      <div className="PGscroll-text">
        {collectionsArr.map((item, index) => (
          <h2 className={index % 2 === 0 ? 'PGfilled' : 'PGoutline'} key={index}>{item}</h2>
        ))}
        {collectionsArr.map((item, index) => (
          <h2 className={index % 2 === 0 ? 'PGfilled' : 'PGoutline'} key={index + repeatTimes}>{item}</h2>
        ))}
        {collectionsArr.map((item, index) => (
          <h2 className={index % 2 === 0 ? 'PGfilled' : 'PGoutline'} key={index + 2 * repeatTimes}>{item}</h2>
        ))}
      </div>
    </div>
  );
};

export default PuzzleGenzCollections;
