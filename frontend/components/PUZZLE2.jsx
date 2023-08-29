import React from 'react';
import './Puzzle2Collections.css';

const Puzzle2Collections = () => {
  const repeatTimes = 20; // Repeat enough times to fill the screen
  const collectionsArr = new Array(repeatTimes).fill("");

  return (
    <div className="P2scroll-container">
      <div className="P2scroll-text">
        {collectionsArr.map((item, index) => (
          <h2 className={index % 2 === 0 ? 'P2filled' : 'P2outline'} key={index}>{item}</h2>
        ))}
      </div>
      <div className="P2scroll-text">
        {collectionsArr.map((item, index) => (
          <h2 className={index % 2 === 0 ? 'P2filled' : 'P2outline'} key={index + repeatTimes}>{item}</h2>
        ))}
      </div>
    </div>
  );
};

export default Puzzle2Collections;
