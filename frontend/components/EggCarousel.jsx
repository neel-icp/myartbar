import React, { useRef, useEffect } from 'react';

import image1 from '/Eggs/EGGImages/01.png';
import image2 from '/Eggs/EGGImages/02.png';
import image3 from '/Eggs/EGGImages/03.png';
import image4 from '/Eggs/EGGImages/04.png';
import image5 from '/Eggs/EGGImages/05.png';
import image6 from '/Eggs/EGGImages/06.png';
import image7 from '/Eggs/EGGImages/07.png';
import image8 from '/Eggs/EGGImages/08.png';
import image9 from '/Eggs/EGGImages/09.png';
import image10 from '/Eggs/EGGImages/010.png';
import image11 from '/Eggs/EGGImages/011.png';
import image12 from '/Eggs/EGGImages/012.png';
import image13 from '/Eggs/EGGImages/013.png';
import image14 from '/Eggs/EGGImages/014.png';
import image15 from '/Eggs/EGGImages/015.png';
import image16 from '/Eggs/EGGImages/016.png';
import image17 from '/Eggs/EGGImages/017.png';
import image18 from '/Eggs/EGGImages/018.png';
import image19 from '/Eggs/EGGImages/019.png';
import image20 from '/Eggs/EGGImages/020.png';
import image21 from '/Eggs/EGGImages/021.png';
import image22 from '/Eggs/EGGImages/022.png';
import image23 from '/Eggs/EGGImages/023.png';
import image24 from '/Eggs/EGGImages/024.png';
import image25 from '/Eggs/EGGImages/025.png';
import image26 from '/Eggs/EGGImages/026.png';
import image27 from '/Eggs/EGGImages/027.png';
import image28 from '/Eggs/EGGImages/028.png';
import image29 from '/Eggs/EGGImages/029.png';
import image30 from '/Eggs/EGGImages/030.png';
import image31 from '/Eggs/EGGImages/031.png';
import image32 from '/Eggs/EGGImages/00.png';


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
    
  ];
  
const EggImageRow = () => {
  const rowRef = useRef(null);

useEffect(() => {
  const rowWidth = rowRef.current.offsetWidth;
  const imageCount = images.length;
  const animationDuration = (rowWidth / 100) * imageCount; // Adjust the animation duration based on the row width and image count
  const speedMultiplier = 10; // Adjust the speed multiplier (higher value for faster speed)

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
        width: `${images.length * 533.33}px`, // Adjust the width to accommodate all images (image width + margin-right)
      }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Item ${index + 1}`}
          style={{ width: 'auto', height: '300px', marginRight: '0px' }}
        />
      ))}
      {images.map((image, index) => (
        <img
          key={index + images.length}
          src={image}
          alt={`Item ${index + 1}`}
          style={{ width: 'auto', height: '300px', marginRight: '0px' }}
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
  <EggImageRow />
</div>
);

export default App;
