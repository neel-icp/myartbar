import React, { useRef, useEffect } from 'react';

// Import images
import image1 from '/Puzzle/PUZZLE2D/PUZZLEPIECES/01.png';
import image2 from '/Puzzle/PUZZLE2D/PUZZLEPIECES/02.png';
import image3 from '/Puzzle/PUZZLE2D/PUZZLEPIECES/03.png';
import image4 from '/Puzzle/PUZZLE2D/PUZZLEPIECES/04.png';
import image5 from '/Puzzle/PUZZLE2D/PUZZLEPIECES/05.png';
import image6 from '/Puzzle/PUZZLE2D/PUZZLEPIECES/06.png';
import image7 from '/Puzzle/PUZZLE2D/PUZZLEPIECES/07.png';
import image8 from '/Puzzle/PUZZLE2D/PUZZLEPIECES/08.png';
import image9 from '/Puzzle/PUZZLE2D/PUZZLEPIECES/09.png';
import image10 from '/Puzzle/PUZZLE2D/PUZZLEPIECES/010.png';
import image11 from '/Puzzle/PUZZLE2D/PUZZLEPIECES/011.png';
import image12 from '/Puzzle/PUZZLE2D/PUZZLEPIECES/012.png';
import image13 from '/Puzzle/PUZZLE2D/PUZZLEPIECES/013.png';
import image14 from '/Puzzle/PUZZLE2D/PUZZLEPIECES/014.png';
import image15 from '/Puzzle/PUZZLE2D/PUZZLEPIECES/015.png';
import image16 from '/Puzzle/PUZZLE2D/PUZZLEPIECES/016.png';
import image17 from '/Puzzle/PUZZLE2D/PUZZLEPIECES/017.png';
import image18 from '/Puzzle/PUZZLE2D/PUZZLEPIECES/018.png';
import image19 from '/Puzzle/PUZZLE2D/PUZZLEPIECES/019.png';
import image20 from '/Puzzle/PUZZLE2D/PUZZLEPIECES/020.png';
import image21 from '/Puzzle/PUZZLE2D/PUZZLEPIECES/021.png';
import image22 from '/Puzzle/PUZZLE2D/PUZZLEPIECES/022.png';
import image23 from '/Puzzle/PUZZLE2D/PUZZLEPIECES/023.png';
import image24 from '/Puzzle/PUZZLE2D/PUZZLEPIECES/024.png';
import image25 from '/Puzzle/PUZZLE2D/PUZZLEPIECES/025.png';
import image26 from '/Puzzle/PUZZLE2D/PUZZLEPIECES/026.png';
import image27 from '/Puzzle/PUZZLE2D/PUZZLEPIECES/027.png';
import image28 from '/Puzzle/PUZZLE2D/PUZZLEPIECES/028.png';
import image29 from '/Puzzle/PUZZLE2D/PUZZLEPIECES/029.png';
import image30 from '/Puzzle/PUZZLE2D/PUZZLEPIECES/030.png';
import image31 from '/Puzzle/PUZZLE2D/PUZZLEPIECES/031.png';
import image32 from '/Puzzle/PUZZLE2D/PUZZLEPIECES/032.png';
import image33 from '/Puzzle/PUZZLE2D/PUZZLEPIECES/033.png';
import image34 from '/Puzzle/PUZZLE2D/PUZZLEPIECES/00.png';


const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
    image27,
    image28,
    image29,
    image30,
    image31,
    image32,
    image33,
    image34,
  ];
  

const Puzzle2DImageRow = () => {
    const rowRef = useRef(null);
  
    useEffect(() => {
      const rowWidth = rowRef.current.offsetWidth;
      const imageCount = images.length;
      const animationDuration = (rowWidth / 100) * imageCount; // Adjust the animation duration based on the row width and image count
      const speedMultiplier = 10; // Adjust the speed multiplier (higher value for faster speed)
  
      const marqueeAnimation = `marqueeLeftToRight ${animationDuration / speedMultiplier}s linear infinite`;
      rowRef.current.style.animation = marqueeAnimation;
    }, []);
  
    return (
      <div
        style={{
          display: 'flex',
          overflow: 'hidden',
          width: '100vw',
        }}
      >
        <div
          ref={rowRef}
          style={{
            display: 'flex',
            animationDelay: '0s', // Delay the animation start to ensure seamless loop
            width: `${images.length * 100}px`, // Adjust the width to accommodate all images
          }}
        >
          {images.map((image, index) => (
            <img
              key={index + images.length}
              src={image}
              alt={`Item ${index + 1}`}
              style={{ width: '100px', height: '100px', marginRight: '0px' }}
            />
          ))}
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Item ${index + 1}`}
              style={{ width: '100px', height: '100px', marginRight: '0px' }}
            />
          ))}
          {images.map((image, index) => (
            <img
              key={index + images.length * 2}
              src={image}
              alt={`Item ${index + 1}`}
              style={{ width: '100px', height: '100px', marginRight: '0px' }}
            />
          ))}
        </div>
        <style>
          {`
            @keyframes marqueeLeftToRight {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(0%);
              }
            }
          `}
        </style>
      </div>
    );
  };
  
  const App = () => (
    <div style={{ overflow: 'hidden' }}>
      <Puzzle2DImageRow />
    </div>
  );
  
  export default App;