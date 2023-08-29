import React from 'react';
import './OffspringsImageRow.css';

const imagesData = [
    { src: '/Offsprings/OFFSPRINGSSPECIAL/08.mp4', alt: 'Image 1', text: 'SPECIAL EGGS HATCHTED OFFSPRINGS', description: 'MINT NO: 1-20', totalNFTs: 'TOTAL NFTs: 20', isVideo: true },
    { src: '/Offsprings/00124.mp4', alt: 'Image 2', text: 'OFFSPRINGS', description: 'MINT NO: 21-1111 ', totalNFTs: 'TOTAL NFTs: 1091', isVideo: true },
];

const OffspringsImagerow = () => {
  return (
    <div className="Offspringsimage-row-container">
      {imagesData.map((image, index) => (
        <div key={index}>
          <div className="Offspringsimage-container">
            {image.isVideo ? (
              <video src={image.src} alt={image.alt} className="Offspringsimage" autoPlay muted loop />
            ) : (
              <img src={image.src} alt={image.alt} className="Offspringsimage" />
            )}
          </div>
          <p className="Offspringsimage-text">{image.text}</p>
          <p className="Offspringsimage-description">{image.description}</p>
          <p className="Offspringsimage-total-nfts">{image.totalNFTs}</p>
        </div>
      ))}
    </div>
  );
};

export default OffspringsImagerow;
