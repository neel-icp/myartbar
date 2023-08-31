import React, { useRef, useEffect } from 'react';

// Import videos assets/Offsprings/OFFSPRINGSSPECIAL/OFFSPRINGSSPECIAL/0179.mp4
import video1 from '/Puzzle/PUZZLE3D/ORGY/00.mp4';
import video2 from '/Puzzle/PUZZLE3D/ORGY/01.mp4';
import video3 from '/Puzzle/PUZZLE3D/ORGY/02.mp4';
import video4 from '/Puzzle/PUZZLE3D/ORGY/03.mp4';
import video5 from '/Puzzle/PUZZLE3D/ORGY/04.mp4';
import video6 from '/Puzzle/PUZZLE3D/ORGY/05.mp4';
import video7 from '/Puzzle/PUZZLE3D/ORGY/06.mp4';
import video8 from '/Puzzle/PUZZLE3D/ORGY/07.mp4';
import video9 from '/Puzzle/PUZZLE3D/ORGY/08.mp4';
import video10 from '/Puzzle/PUZZLE3D/ORGY/09.mp4';
import video11 from '/Puzzle/PUZZLE3D/ORGY/010.mp4';
// Import thumbnails
import thumbnail1 from '/Puzzle/PUZZLE3D/ORGY/00_thumbnail.jpg';
import thumbnail2 from '/Puzzle/PUZZLE3D/ORGY/01_thumbnail.jpg';
import thumbnail3 from '/Puzzle/PUZZLE3D/ORGY/02_thumbnail.jpg';
import thumbnail4 from '/Puzzle/PUZZLE3D/ORGY/03_thumbnail.jpg';
import thumbnail5 from '/Puzzle/PUZZLE3D/ORGY/04_thumbnail.jpg';
import thumbnail6 from '/Puzzle/PUZZLE3D/ORGY/05_thumbnail.jpg';
import thumbnail7 from '/Puzzle/PUZZLE3D/ORGY/06_thumbnail.jpg';
import thumbnail8 from '/Puzzle/PUZZLE3D/ORGY/07_thumbnail.jpg';
import thumbnail9 from '/Puzzle/PUZZLE3D/ORGY/08_thumbnail.jpg';
import thumbnail10 from '/Puzzle/PUZZLE3D/ORGY/09_thumbnail.jpg';
import thumbnail11 from '/Puzzle/PUZZLE3D/ORGY/010_thumbnail.jpg';

// Thumbnails list
const thumbnails = [
  thumbnail1,
  thumbnail2,
  thumbnail3,
  thumbnail4,
  thumbnail5,
  thumbnail6,
  thumbnail7,
  thumbnail8,
  thumbnail9,
  thumbnail10,
  thumbnail11,
];

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
];

const PuzzlesOrgyRow = () => {
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
          width: `${videos.length * 400}px`, // Adjust the width to accommodate all videos
        }}
      >
        {videos.map((video, index) => (
          <video
            key={index}
            src={video}
            autoPlay
            poster={thumbnails[index]} // Add the poster attribute here
            loop
            muted
            playsInline // Add playsInline attribute
            style={{ width: '400px', height: '400px', marginRight: '0px' }}
          />
        ))}
        {videos.map((video, index) => (
          <video
            key={index + videos.length}
            src={video}
            autoPlay
            poster={thumbnails[index]} // Add the poster attribute here
            loop
            muted
            playsInline // Add playsInline attribute
            style={{ width: '400px', height: '400px', marginRight: '0px' }}
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
    <PuzzlesOrgyRow />
  </div>
);

export default App;
