import React, { useRef, useEffect } from 'react';

// Import videos
import video1 from '/Offsprings/00.mp4';
import video2 from '/Offsprings/01.mp4';
import video3 from '/Offsprings/02.mp4';
import video4 from '/Offsprings/03.mp4';
import video5 from '/Offsprings/04.mp4';
import video6 from '/Offsprings/05.mp4';
import video7 from '/Offsprings/06.mp4';
import video8 from '/Offsprings/07.mp4';
import video9 from '/Offsprings/08.mp4';
import video10 from '/Offsprings/09.mp4';
import video11 from '/Offsprings/010.mp4';
import video12 from '/Offsprings/011.mp4';
import video13 from '/Offsprings/012.mp4';
import video14 from '/Offsprings/013.mp4';
import video15 from '/Offsprings/014.mp4';
import video16 from '/Offsprings/015.mp4';
import video17 from '/Offsprings/016.mp4';
import video18 from '/Offsprings/017.mp4';
import video19 from '/Offsprings/018.mp4';
import video20 from '/Offsprings/019.mp4';
import video21 from '/Offsprings/020.mp4';
import video22 from '/Offsprings/021.mp4';
import video23 from '/Offsprings/022.mp4';
import video24 from '/Offsprings/023.mp4';
import video25 from '/Offsprings/024.mp4';
import video26 from '/Offsprings/025.mp4';
import video27 from '/Offsprings/026.mp4';
import video28 from '/Offsprings/027.mp4';
import video29 from '/Offsprings/00044.mp4';
import video30 from '/Offsprings/00052.mp4';
import video31 from '/Offsprings/00082.mp4';
import video32 from '/Offsprings/00104.mp4';
import video33 from '/Offsprings/00116.mp4';
import video34 from '/Offsprings/00124.mp4';
import video35 from '/Offsprings/00125.mp4';
import video36 from '/Offsprings/00235.mp4';
import video37 from '/Offsprings/00279.mp4';
import video38 from '/Offsprings/00284.mp4';
import video39 from '/Offsprings/00449.mp4';
import video40 from '/Offsprings/00846.mp4';
import video41 from '/Offsprings/00850.mp4';
import video42 from '/Offsprings/00862.mp4';
import video43 from '/Offsprings/01021.mp4';
import video44 from '/Offsprings/01023.mp4';
import video45 from '/Offsprings/01097.mp4';
import video46 from '/Offsprings/01108.mp4';



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
  video28,
  video29,
  video30,
  video31,
  video32,
  video33,
  video34,
  video35,
  video36,
  video37,
  video38,
  video39,
  video40,
  video41,
  video42,
  video43,
  video44,
  video45,
  video46,
 
];

const OffspringVideoRow = () => {
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
    <OffspringVideoRow />
  </div>
);

export default App;
