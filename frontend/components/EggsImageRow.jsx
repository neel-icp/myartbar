import React from 'react';
import './EggsImageRow.css';

const imagesData = [
    { src: '/Eggs/EGGVideos/09.mp4', alt: 'Image 1', text: 'ANIMATED SPECIAL EGGs', description: 'MINT NO: 1-20', totalNFTs: 'TOTAL NFTs: 20', isVideo: true },
    { src: '/Eggs/EGGImages/026.png', alt: 'Image 2', text: '"THE" EGGS', description: 'MINT NO: 21-4444 ', totalNFTs: 'TOTAL NFTs: 10' },
];

const EggsImagerow = () => {
  return (
    <div className="Eggsimage-row-container">
      {imagesData.map((image, index) => (
        <div key={index}>
          <div className="Eggsimage-container">
            {image.isVideo ? (
              <video src={image.src} alt={image.alt} className="Eggsimage" autoPlay muted loop />
            ) : (
              <img src={image.src} alt={image.alt} className="Eggsimage" />
            )}
          </div>
          <p className="Eggsimage-text">{image.text}</p>
          <p className="Eggsimage-description">{image.description}</p>
          <p className="Eggsimage-total-nfts">{image.totalNFTs}</p>
        </div>
      ))}
    </div>
  );
};

export default EggsImagerow;
