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

// Import thumbnails
import thumbnail1 from '/Offsprings/OFFSPRINGSSPECIAL/00_thumbnail.jpg';
import thumbnail2 from '/Offsprings/OFFSPRINGSSPECIAL/01_thumbnail.jpg';
import thumbnail3 from '/Offsprings/OFFSPRINGSSPECIAL/02_thumbnail.jpg';
import thumbnail4 from '/Offsprings/OFFSPRINGSSPECIAL/03_thumbnail.jpg';
import thumbnail5 from '/Offsprings/OFFSPRINGSSPECIAL/04_thumbnail.jpg';
import thumbnail6 from '/Offsprings/OFFSPRINGSSPECIAL/05_thumbnail.jpg';
import thumbnail7 from '/Offsprings/OFFSPRINGSSPECIAL/06_thumbnail.jpg';
import thumbnail8 from '/Offsprings/OFFSPRINGSSPECIAL/07_thumbnail.jpg';
import thumbnail9 from '/Offsprings/OFFSPRINGSSPECIAL/08_thumbnail.jpg';
import thumbnail10 from '/Offsprings/OFFSPRINGSSPECIAL/09_thumbnail.jpg';
import thumbnail11 from '/Offsprings/OFFSPRINGSSPECIAL/010_thumbnail.jpg';
import thumbnail12 from '/Offsprings/OFFSPRINGSSPECIAL/011_thumbnail.jpg';
import thumbnail13 from '/Offsprings/OFFSPRINGSSPECIAL/012_thumbnail.jpg';
import thumbnail14 from '/Offsprings/OFFSPRINGSSPECIAL/013_thumbnail.jpg';
import thumbnail15 from '/Offsprings/OFFSPRINGSSPECIAL/014_thumbnail.jpg';
import thumbnail16 from '/Offsprings/OFFSPRINGSSPECIAL/015_thumbnail.jpg';
import thumbnail17 from '/Offsprings/OFFSPRINGSSPECIAL/016_thumbnail.jpg';
import thumbnail18 from '/Offsprings/OFFSPRINGSSPECIAL/017_thumbnail.jpg';
import thumbnail19 from '/Offsprings/OFFSPRINGSSPECIAL/018_thumbnail.jpg';
import thumbnail20 from '/Offsprings/OFFSPRINGSSPECIAL/019_thumbnail.jpg';
import thumbnail21 from '/Offsprings/OFFSPRINGSSPECIAL/020_thumbnail.jpg';

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
    <OffspringSpecialvideoRow />
  </div>
);

export default App;
