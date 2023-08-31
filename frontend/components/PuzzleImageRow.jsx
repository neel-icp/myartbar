import React from 'react';
import './PuzzleImagerow.css';

import thumbnail1 from '/Puzzle/PUZZLE3D/02_thumbnail.jpg';
import thumbnail2 from '/Puzzle/PUZZLE3D/ORGY/09_thumbnail.jpg';
import thumbnail3 from '/Puzzle/PUZZLE3D/010_thumbnail.jpg';
import thumbnail4 from '/Puzzle/PUZZLE3D/020_thumbnail.jpg';



const imagesData = [
    { src: '/Puzzle/PUZZLE3D/02.mp4',thumbnail: thumbnail1, alt: 'Image 2', text: 'TOYS', description: 'MINT NO: 1-84', totalNFTs: 'TOTAL NFTs: 84', isVideo: true },
    { src: '/Puzzle/PUZZLE3D/ORGY/09.mp4',thumbnail: thumbnail2, alt: 'Image 4', text: 'ORGY', description: 'MINT NO: 85-93, 179-180', totalNFTs: 'TOTAL NFTs: 10', isVideo:true },
    { src: '/Puzzle/PUZZLE3D/010.mp4',thumbnail: thumbnail3, alt: 'Image 3', text: 'POSITIONS', description: 'MINT NO: 94-177', totalNFTs: 'TOTALNFTs: 84', isVideo:true },
    { src: '/Puzzle/PUZZLE3D/020.mp4',thumbnail: thumbnail4, alt: 'Image 5', text: 'OGs', description: 'MINT NO: 1-190', totalNFTs: 'TOTAL NFTs: 190',isVideo:true },
    { src: '/Puzzle/PUZZLEGENZ/02.png', alt: 'Image 1', text: '3D GENZ IDENTITY', description: 'MINT NO: 181-3693 ', totalNFTs: 'TOTAL NFTs: 3513' },
];

const PuzzleImagerow = () => {
  return (
    <div className="Puzzleimage-row-container">
      {imagesData.map((image, index) => (
        <div key={index}>
          <div className="Puzzleimage-container">
            {image.isVideo ? (
              <video src={image.src} alt={image.alt} className="Puzzleimage" autoPlay muted loop poster={image.thumbnail} />
            ) : (
              <img src={image.src} alt={image.alt} className="Puzzleimage" />
            )}
          </div>
          <p className="Puzzleimage-text">{image.text}</p>
          <p className="Puzzleimage-description">{image.description}</p>
          <p className="Puzzleimage-total-nfts">{image.totalNFTs}</p>
        </div>
      ))}
    </div>
  );
};

export default PuzzleImagerow;
