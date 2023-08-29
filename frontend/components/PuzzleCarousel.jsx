import React, { useRef, useEffect } from 'react';

import image1 from '/Puzzle/PUZZLEGENZ/01.png';
import image2 from '/Puzzle/PUZZLEGENZ/02.png';
import image3 from '/Puzzle/PUZZLEGENZ/03.png';
import image4 from '/Puzzle/PUZZLEGENZ/04.png';
import image5 from '/Puzzle/PUZZLEGENZ/05.png';
import image6 from '/Puzzle/PUZZLEGENZ/06.png';
import image7 from '/Puzzle/PUZZLEGENZ/07.png';
import image8 from '/Puzzle/PUZZLEGENZ/08.png';
import image9 from '/Puzzle/PUZZLEGENZ/09.png';
import image10 from '/Puzzle/PUZZLEGENZ/010.png';
import image11 from '/Puzzle/PUZZLEGENZ/011.png';
import image12 from '/Puzzle/PUZZLEGENZ/012.png';
import image13 from '/Puzzle/PUZZLEGENZ/013.png';
import image14 from '/Puzzle/PUZZLEGENZ/014.png';
import image15 from '/Puzzle/PUZZLEGENZ/015.png';
import image16 from '/Puzzle/PUZZLEGENZ/016.png';
import image17 from '/Puzzle/PUZZLEGENZ/017.png';
import image18 from '/Puzzle/PUZZLEGENZ/018.png';
import image19 from '/Puzzle/PUZZLEGENZ/019.png';
import image20 from '/Puzzle/PUZZLEGENZ/020.png';
import image21 from '/Puzzle/PUZZLEGENZ/021.png';
import image22 from '/Puzzle/PUZZLEGENZ/022.png';
import image23 from '/Puzzle/PUZZLEGENZ/023.png';
import image24 from '/Puzzle/PUZZLEGENZ/024.png';
import image25 from '/Puzzle/PUZZLEGENZ/025.png';
import image26 from '/Puzzle/PUZZLEGENZ/026.png';
import image27 from '/Puzzle/PUZZLEGENZ/027.png';
import image28 from '/Puzzle/PUZZLEGENZ/028.png';
import image29 from '/Puzzle/PUZZLEGENZ/029.png';
import image30 from '/Puzzle/PUZZLEGENZ/030.png';
import image31 from '/Puzzle/PUZZLEGENZ/031.png';
import image32 from '/Puzzle/PUZZLEGENZ/032.png';
import image33 from '/Puzzle/PUZZLEGENZ/033.png';
import image34 from '/Puzzle/PUZZLEGENZ/034.png';
import image35 from '/Puzzle/PUZZLEGENZ/035.png';
import image36 from '/Puzzle/PUZZLEGENZ/036.png';
import image37 from '/Puzzle/PUZZLEGENZ/037.png';
import image38 from '/Puzzle/PUZZLEGENZ/038.png';
import image39 from '/Puzzle/PUZZLEGENZ/039.png';
import image40 from '/Puzzle/PUZZLEGENZ/040.png';
import image41 from '/Puzzle/PUZZLEGENZ/041.png';
import image42 from '/Puzzle/PUZZLEGENZ/042.png';
import image43 from '/Puzzle/PUZZLEGENZ/043.png';
import image44 from '/Puzzle/PUZZLEGENZ/044.png';
import image45 from '/Puzzle/PUZZLEGENZ/045.png';
import image46 from '/Puzzle/PUZZLEGENZ/046.png';
import image47 from '/Puzzle/PUZZLEGENZ/047.png';
import image48 from '/Puzzle/PUZZLEGENZ/048.png';
import image49 from '/Puzzle/PUZZLEGENZ/049.png';
import image50 from '/Puzzle/PUZZLEGENZ/050.png';
import image51 from '/Puzzle/PUZZLEGENZ/051.png';
import image52 from '/Puzzle/PUZZLEGENZ/052.png';
import image53 from '/Puzzle/PUZZLEGENZ/053.png';
import image54 from '/Puzzle/PUZZLEGENZ/054.png';
import image55 from '/Puzzle/PUZZLEGENZ/055.png';
import image56 from '/Puzzle/PUZZLEGENZ/056.png';
import image57 from '/Puzzle/PUZZLEGENZ/057.png';
import image58 from '/Puzzle/PUZZLEGENZ/058.png';
import image59 from '/Puzzle/PUZZLEGENZ/059.png';
import image60 from '/Puzzle/PUZZLEGENZ/060.png';
import image61 from '/Puzzle/PUZZLEGENZ/061.png';
import image62 from '/Puzzle/PUZZLEGENZ/062.png';
import image63 from '/Puzzle/PUZZLEGENZ/063.png';
import image64 from '/Puzzle/PUZZLEGENZ/064.png';
import image65 from '/Puzzle/PUZZLEGENZ/065.png';
import image66 from '/Puzzle/PUZZLEGENZ/066.png';
import image67 from '/Puzzle/PUZZLEGENZ/067.png';
import image68 from '/Puzzle/PUZZLEGENZ/00.png';




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
  image35,
  image36,
  image37,
  image38,
  image39,
  image40,
  image41,
  image42,
  image43,
  image44,
  image45,
  image46,
  image47,
  image48,
  image49,
  image50,
  image51,
  image52,
  image53,
  image54,
  image55,
  image56,
  image57,
  image58,
  image59,
  image60,
  image61,
  image62,
  image63,
  image64,
  image65,
  image66,
  image67,
  image68,
];


const ImageRow = () => {
  const rowRef = useRef(null);

  useEffect(() => {
    const rowWidth = rowRef.current.offsetWidth;
    const imageCount = images.length;
    const animationDuration = (rowWidth / 100) * imageCount; // Adjust the animation duration based on the row width and image count
    const speedMultiplier = 30; // Adjust the speed multiplier (higher value for faster speed)

    const marqueeAnimation = `marquee ${animationDuration / speedMultiplier}s linear infinite`;
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
          width: `${images.length * 300}px`, // Adjust the width to accommodate all images
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Item ${index + 1}`}
            style={{ width: '300px', height: '300px', marginRight: '0px' }}
          />
        ))}
        {images.map((image, index) => (
          <img
            key={index + images.length}
            src={image}
            alt={`Item ${index + 1}`}
            style={{ width: '300px', height: '300px', marginRight: '0px' }}
          />
        ))}
      </div>
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </div>
  );
};



const App = () => (
  <div style={{ overflow: 'hidden' }}>
    <ImageRow />
  </div>
);

export default App;
