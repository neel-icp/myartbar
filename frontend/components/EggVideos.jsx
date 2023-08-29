import React, { useRef, useEffect } from 'react';

// Import videos
import video1 from '/Eggs/EGGVideos/00.mp4';
import video2 from '/Eggs/EGGVideos/01.mp4';
import video3 from '/Eggs/EGGVideos/02.mp4';
import video4 from '/Eggs/EGGVideos/03.mp4';
import video5 from '/Eggs/EGGVideos/04.mp4';
import video6 from '/Eggs/EGGVideos/05.mp4';
import video7 from '/Eggs/EGGVideos/06.mp4';
import video8 from '/Eggs/EGGVideos/07.mp4';
import video9 from '/Eggs/EGGVideos/08.mp4';
import video10 from '/Eggs/EGGVideos/09.mp4';
import video11 from '/Eggs/EGGVideos/010.mp4';
import video12 from '/Eggs/EGGVideos/011.mp4';
import video13 from '/Eggs/EGGVideos/012.mp4';
import video14 from '/Eggs/EGGVideos/013.mp4';
import video15 from '/Eggs/EGGVideos/014.mp4';
import video16 from '/Eggs/EGGVideos/015.mp4';
import video17 from '/Eggs/EGGVideos/016.mp4';
import video18 from '/Eggs/EGGVideos/017.mp4';


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
];

const EggVideoRow = () => {
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
          width: `${videos.length * 400}px`, // Adjust the width to accommodate all videos
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
    style={{ width: '400px', height: '400px', objectFit: 'cover', marginRight: '0px' }}
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
    style={{ width: '400px', height: '400px', objectFit: 'cover', marginRight: '0px' }}
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
    <EggVideoRow />
  </div>
);

export default App;
