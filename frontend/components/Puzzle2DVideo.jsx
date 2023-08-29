import React, { useRef, useEffect } from 'react';

// Import videos
import video1 from '/Puzzle/PUZZLE2D/POSITIONS/00.mp4';
import video2 from '/Puzzle/PUZZLE2D/POSITIONS/1.mp4';
import video3 from '/Puzzle/PUZZLE2D/POSITIONS/2.mp4';
import video4 from '/Puzzle/PUZZLE2D/POSITIONS/3.mp4';
import video5 from '/Puzzle/PUZZLE2D/POSITIONS/4.mp4';
import video6 from '/Puzzle/PUZZLE2D/POSITIONS/5.mp4';
import video7 from '/Puzzle/PUZZLE2D/POSITIONS/6.mp4';
import video8 from '/Puzzle/PUZZLE2D/POSITIONS/7.mp4';



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
];



const PuzzleVideoRow = () => {
  const rowRef = useRef(null);

  useEffect(() => {
    const rowWidth = rowRef.current.offsetWidth;
    const videoCount = videos.length;
    const animationDuration = (rowWidth / 100) * videoCount; // Adjust the animation duration based on the row width and video count
    const speedMultiplier = 8; // Adjust the speed multiplier (higher value for faster speed)

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
          width: `${videos.length * 200}px`, // Adjust the width to accommodate all videos
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
            style={{ width: '200px', height: '200px', marginRight: '0px' }}
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
            style={{ width: '200px', height: '200px', marginRight: '0px' }}
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
    <PuzzleVideoRow />
  </div>
);

export default App;
