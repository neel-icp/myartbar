import React, { useRef, useEffect } from 'react';

// Import videos assets/Offsprings/OFFSPRINGSSPECIAL/OFFSPRINGSSPECIAL/0179.mp4
import video1 from '/Offsprings/OFFSPRINGSSPECIAL/00.mp4';
import video2 from '/Offsprings/OFFSPRINGSSPECIAL/01.mp4';
import video3 from '/Offsprings/OFFSPRINGSSPECIAL/02.mp4';
import video4 from '/Offsprings/OFFSPRINGSSPECIAL/03.mp4';
import video5 from '/Offsprings/OFFSPRINGSSPECIAL/04.mp4';
import video6 from '/Offsprings/OFFSPRINGSSPECIAL/05.mp4';
import video7 from '/Offsprings/OFFSPRINGSSPECIAL/06.mp4';
import video8 from '/Offsprings/OFFSPRINGSSPECIAL/07.mp4';
import video9 from '/Offsprings/OFFSPRINGSSPECIAL/08.mp4';
import video10 from '/Offsprings/OFFSPRINGSSPECIAL/09.mp4';
import video11 from '/Offsprings/OFFSPRINGSSPECIAL/010.mp4';
import video12 from '/Offsprings/OFFSPRINGSSPECIAL/011.mp4';
import video13 from '/Offsprings/OFFSPRINGSSPECIAL/012.mp4';
import video14 from '/Offsprings/OFFSPRINGSSPECIAL/013.mp4';
import video15 from '/Offsprings/OFFSPRINGSSPECIAL/014.mp4';
import video16 from '/Offsprings/OFFSPRINGSSPECIAL/015.mp4';
import video17 from '/Offsprings/OFFSPRINGSSPECIAL/016.mp4';
import video18 from '/Offsprings/OFFSPRINGSSPECIAL/017.mp4';
import video19 from '/Offsprings/OFFSPRINGSSPECIAL/018.mp4';
import video20 from '/Offsprings/OFFSPRINGSSPECIAL/019.mp4';
import video21 from '/Offsprings/OFFSPRINGSSPECIAL/020.mp4';

// Video list
const videos = [
  video1,
  video2,
  video3,
  video4,
  video5,
  video6,
  video7,
  video8,
  video9,
  video10,
  video11,
  video12,
  video13,
  video14,
  video15,
  video16,
  video17,
  video18,
  video19,
  video20,
  video21,
];

const OffspringSpecialvideoRow = () => {
  const rowRef = useRef(null);

  useEffect(() => {
    const rowWidth = rowRef.current.offsetWidth;
    const videoCount = videos.length;
    const animationDuration = (rowWidth / 100) * videoCount; // Adjust the animation duration based on the row width and video count
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
          width: `${videos.length * 300}px`, // Adjust the width to accommodate all videos
        }}
      >
        {videos.map((video, index) => (
          <video
            key={index}
            src={video}
            autoPlay
            loop
            muted
            playsInline // Add playsInline attribute
            style={{ width: '300px', height: '300px', marginRight: '0px' }}
          />
        ))}
        {videos.map((video, index) => (
          <video
            key={index + videos.length}
            src={video}
            autoPlay
            loop
            muted
            playsInline // Add playsInline attribute
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
    <OffspringSpecialvideoRow />
  </div>
);

export default App;
