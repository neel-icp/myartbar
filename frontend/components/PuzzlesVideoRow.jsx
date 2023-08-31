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

import thumbnail1 from '/Puzzle/PUZZLE3D/00_thumbnail.jpg';
import thumbnail2 from '/Puzzle/PUZZLE3D/01_thumbnail.jpg';
import thumbnail3 from '/Puzzle/PUZZLE3D/02_thumbnail.jpg';
import thumbnail4 from '/Puzzle/PUZZLE3D/03_thumbnail.jpg';
import thumbnail5 from '/Puzzle/PUZZLE3D/04_thumbnail.jpg';
import thumbnail6 from '/Puzzle/PUZZLE3D/05_thumbnail.jpg';
import thumbnail7 from '/Puzzle/PUZZLE3D/06_thumbnail.jpg';
import thumbnail8 from '/Puzzle/PUZZLE3D/07_thumbnail.jpg';
import thumbnail9 from '/Puzzle/PUZZLE3D/08_thumbnail.jpg';
import thumbnail10 from '/Puzzle/PUZZLE3D/09_thumbnail.jpg';
import thumbnail11 from '/Puzzle/PUZZLE3D/010_thumbnail.jpg';
import thumbnail12 from '/Puzzle/PUZZLE3D/011_thumbnail.jpg';
import thumbnail13 from '/Puzzle/PUZZLE3D/012_thumbnail.jpg';
import thumbnail14 from '/Puzzle/PUZZLE3D/013_thumbnail.jpg';
import thumbnail15 from '/Puzzle/PUZZLE3D/014_thumbnail.jpg';
import thumbnail16 from '/Puzzle/PUZZLE3D/015_thumbnail.jpg';
import thumbnail17 from '/Puzzle/PUZZLE3D/016_thumbnail.jpg';
import thumbnail18 from '/Puzzle/PUZZLE3D/017_thumbnail.jpg';
import thumbnail19 from '/Puzzle/PUZZLE3D/018_thumbnail.jpg';
import thumbnail20 from '/Puzzle/PUZZLE3D/019_thumbnail.jpg';
import thumbnail21 from '/Puzzle/PUZZLE3D/020_thumbnail.jpg';
import thumbnail22 from '/Puzzle/PUZZLE3D/021_thumbnail.jpg';
import thumbnail23 from '/Puzzle/PUZZLE3D/022_thumbnail.jpg';
import thumbnail24 from '/Puzzle/PUZZLE3D/023_thumbnail.jpg';
import thumbnail25 from '/Puzzle/PUZZLE3D/024_thumbnail.jpg';
import thumbnail26 from '/Puzzle/PUZZLE3D/025_thumbnail.jpg';
import thumbnail27 from '/Puzzle/PUZZLE3D/026_thumbnail.jpg';

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
// Thumbnails array
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
  thumbnail12,
  thumbnail13,
  thumbnail14,
  thumbnail15,
  thumbnail16,
  thumbnail17,
  thumbnail18,
  thumbnail19,
  thumbnail20,
  thumbnail21,
  thumbnail22,
  thumbnail23,
  thumbnail24,
  thumbnail25,
  thumbnail26,
  thumbnail27,
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
            poster={thumbnails[index]} // Add the poster attribute here
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
            poster={thumbnails[index]} // Add the poster attribute here
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
