import React from 'react';
import './ICPuzzleImagerow.css'; // Assuming you have a CSS file for this component

// Mock data, replace with your own
const imagesData = [
  { src: '/Puzzle/PUZZLE2D/PUZZLEPIECES/021.png', alt: 'Image 1', text: 'IDENTITY', description: 'MINT NO: 1-310 ', description2 :'3256-3355, 3435-3534', totalNFTs: 'TOTAL NFTs: 506' },
  { src: '/Puzzle/PUZZLE2D/PUZZLEPIECES/028.png', alt: 'Image 2', text: 'POSITIONS', description: 'MINT NO: 3111-3245', totalNFTs: 'TOTAL NFTs: 135' },
  { src: '/Puzzle/PUZZLE2D/PUZZLEPIECES/031.png', alt: 'Image 3', text: 'ORGY', description: 'MINT NO: 3246-3255', totalNFTs: 'TOTAL NFTs: 10' },
  { src: '/Puzzle/PUZZLE2D/PUZZLEPIECES/Puzzles.png', alt: 'Image 4', text: 'PUZZLES', description: 'MINT NO: 3356-3434', totalNFTs: 'TOTAL NFTs: 79' },
  { src: '/Puzzle/PUZZLE2D/PUZZLEPIECES/Shapes.png', alt: 'Image 5', text: 'SHAPES', description: 'MINT NO: 311-3110', totalNFTs: 'TOTAL NFTs: 2800' },
];

const ICPuzzleImagerow = () => {
  return (
    <div className="image-row-container">
      {imagesData.map((image, index) => (
        <div className="image-container" key={index}>
          <div className="circle">
            <img src={image.src} alt={image.alt} className="image" />
          </div>
          <p className="image-text">{image.text}</p>
          <p className="image-description">{image.description}</p>
          <p className="image-description">{image.description2}</p>
          <p className="image-total-nfts">{image.totalNFTs}</p>
        </div>
      ))}
    </div>
  );
};


export default ICPuzzleImagerow;
