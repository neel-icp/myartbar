 import React, { useRef, useEffect } from 'react';

// Import videos
import video1 from '/Puzzle/PUZZLE3D/00.mp4';
import video2 from '/Puzzle/PUZZLE3D/01.mp4';
import video3 from '/Puzzle/PUZZLE3D/02.mp4';
import video4 from '/Puzzle/PUZZLE3D/03.mp4';
import video5 from '/Puzzle/PUZZLE3D/04.mp4';
import video6 from '/Puzzle/PUZZLE3D/05.mp4';
import video7 from '/Puzzle/PUZZLE3D/06.mp4';
import video8 from '/Puzzle/PUZZLE3D/07.mp4';
import video9 from '/Puzzle/PUZZLE3D/08.mp4';
import video10 from '/Puzzle/PUZZLE3D/09.mp4';
import video11 from '/Puzzle/PUZZLE3D/010.mp4';
import video12 from '/Puzzle/PUZZLE3D/011.mp4';
import video13 from '/Puzzle/PUZZLE3D/012.mp4';
import video14 from '/Puzzle/PUZZLE3D/013.mp4';
import video15 from '/Puzzle/PUZZLE3D/014.mp4';
import video16 from '/Puzzle/PUZZLE3D/015.mp4';
import video17 from '/Puzzle/PUZZLE3D/016.mp4';
import video18 from '/Puzzle/PUZZLE3D/017.mp4';
import video19 from '/Puzzle/PUZZLE3D/018.mp4';
import video20 from '/Puzzle/PUZZLE3D/019.mp4';
import video21 from '/Puzzle/PUZZLE3D/020.mp4';
import video22 from '/Puzzle/PUZZLE3D/021.mp4';
import video23 from '/Puzzle/PUZZLE3D/022.mp4';
import video24 from '/Puzzle/PUZZLE3D/023.mp4';
import video25 from '/Puzzle/PUZZLE3D/024.mp4';
import video26 from '/Puzzle/PUZZLE3D/025.mp4';
import video27 from '/Puzzle/PUZZLE3D/026.mp4';



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
  video22,
  video23,
  video24,
  video25,
  video26,
  video27,
];



const PuzzlesVideoRow = () => {
  const rowRef = useRef(null);

  useEffect(() => {
    const rowWidth = rowRef.current.offsetWidth;
    const videoCount = videos.length;
    const animationDuration = (rowWidth / 100) * videoCount; // Adjust the animation duration based on the row width and video count
    const speedMultiplier = 20; // Adjust the speed multiplier (higher value for faster speed)

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
    <PuzzlesVideoRow />
  </div>
);

export default App;
