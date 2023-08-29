import React from 'react';
import './Puzzle1Collections.css';

const Puzzle1Collections = () => {
  const repeatTimes = 20; // Repeat enough times to fill the screen
  const collectionsArr = new Array(repeatTimes).fill("");

  return (
    <div className="P1scroll-container">
      <div className="P1scroll-text">
        {collectionsArr.map((item, index) => (
          <h2 className={index % 2 === 0 ? 'P1filled' : 'P1outline'} key={index}>{item}</h2>
        ))}
      </div>
      <div className="P1scroll-text">
        {collectionsArr.map((item, index) => (
          <h2 className={index % 2 === 0 ? 'P1filled' : 'P1outline'} key={index + repeatTimes}>{item}</h2>
        ))}
      </div>
    </div>
  );
};

export default Puzzle1Collections;
