import React from 'react';
//import styled, { keyframes } from 'styled-components';
import ICPuzzleImagerow from './ICPuzzleImagerow';
import { FaTwitter, FaTelegram, FaDiscord } from 'react-icons/fa';
import styled from 'styled-components';

// Keyframes
/*const ani = keyframes`
  0%, 30% {
    transform: translate3d(0,0,0);
    text-shadow: 0em 0em 0 lightblue;
    color: black;
  }
  70%, 100% {
    transform: translate3d(0.08em,-0.08em,0);
    text-shadow: -0.08em 0.08em lightblue;
    color: black;
  }
`;*/

// Styled components

const ICPuzzleContainer = styled.div`

  display: flex;
  justify-content: flex-start; // Align items to the left
  align-items: flex-start;
  padding: 40px; // Adjust as needed
`;

const ICPuzzleInfoContainer = styled.div`
  font-family: 'Comfortaa', cursive;
  font-weight: 900;
  text-align: left; // Ensure text is aligned to the left
`;

/*
const ICPuzzlePopout = styled.span`
  font-size: ${props => props.fontSize || '1em'};
  position: relative;
  display: inline-block;
  animation: ${ani} 1s infinite alternate cubic-bezier(0.860, 0.000, 0.070, 1.000);
  animation-delay: ${props => props.delay}s;
  margin-bottom: ${props => props.fontSize === '3em' ? '20px' : '10px'};
`;
*/
const ICSpan = styled.span`
  font-size: ${props => props.fontSize || '1em'};
  margin-bottom: ${props => props.fontSize === '3em' ? '20px' : '10px'};
  font-family: 'Poppins', sans-serif; 
`;
const ICPuzzleSpace = styled.span`
  font-size: ${props => props.fontSize || '1em'};
  margin-bottom: ${props => props.fontSize === '3em' ? '20px' : '10px'};
`;

const ICPuzzleText = styled.p`
  text-align: left;
  font-family: 'Comfortaa', cursive;
`;

const ICPuzzleSocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ICPuzzleSocialIcon = styled.a`
color: inherit;
margin-bottom: 20px;
position: relative;  // this is necessary for z-index to work
z-index: 6;  // higher than 5 as requested

img {
  width: 20px; // Adjust the width as needed
  height: 20px; // Adjust the height as needed
  position: relative;  // this is necessary for z-index to work
}
`;

const ICPuzzleInfo = () => {
  const titleText = "AUGUST 27, 2021".split("");
  const collectionText = "COLLECTION OF 3534 NFTs".split("");
  const founderText = "FOUNDER & ARTIST".split("");
  const n = titleText.length;

  return (
    <ICPuzzleContainer>
      <ICPuzzleInfoContainer>
      {titleText.map((char, i) => char === ' ' ? <ICPuzzleSpace fontSize='3em' key={i}> </ICPuzzleSpace> : <ICSpan key={i} fontSize='3em'>{char}</ICSpan>)}
        <br />
        {collectionText.map((char, i) => char === ' ' ? <ICPuzzleSpace fontSize='2em' key={i+n}> </ICPuzzleSpace> : <ICSpan key={i+n} delay={-1 * i / n / 2} fontSize='2em'>{char}</ICSpan>)}
        <br />
        {founderText.map((char, i) => char === ' ' ? <ICPuzzleSpace fontSize='2em' key={i+2*n}> </ICPuzzleSpace> : <ICSpan key={i+2*n} delay={-1 * i / n / 2} fontSize='2em'>{char}</ICSpan>)}
        <br />
        <ICPuzzleText>
        ICPuzzles serves as an NFT platform built on the IC. It empowers users to mint unique NFTs on a digital canvas, exclusively using elements from the ICPuzzle NFT Line. 
        ICPuzzle NFTs encapsulate concepts of individuality and community, mirroring the complexity of the human condition. Each piece symbolizes an individual's uniqueness within a greater whole. 
        The mission of Puzzle is to facilitate the creation of singular pieces of NFT art. These NFTs, composed of other Puzzle NFTs, are burned during the minting process, yielding a novel artwork.
        Each ICPuzzle NFT is a one-time asset within the platform, contributing to the creation of art before being consumed. Users manipulate pieces to form their digital mosaic, benefiting from the exclusivity of limited edition ICPuzzles.
        </ICPuzzleText>
        <ICPuzzleImagerow />
      </ICPuzzleInfoContainer>
      <ICPuzzleSocialContainer>
        <ICPuzzleSocialIcon href="https://twitter.com/icpuzzles" target="_blank"><FaTwitter /></ICPuzzleSocialIcon>
        <ICPuzzleSocialIcon href="https://t.me/puzzlebyN" target="_blank"><FaTelegram /></ICPuzzleSocialIcon>
        <ICPuzzleSocialIcon href="https://discord.gg/qRaxTfhbev" target="_blank"><FaDiscord /></ICPuzzleSocialIcon>
        <ICPuzzleSocialIcon href="https://az5sd-cqaaa-aaaae-aaarq-cai.ic0.app/u/myartbar" target="_blank">
          <img src="/distrikt.svg" alt="Distrikt" />
        </ICPuzzleSocialIcon>
        <ICPuzzleSocialIcon href="https://dscvr.one/u/IC-Puzzle" target="_blank">
          <img src="/dscvr.svg" alt="DSCVR" />
        </ICPuzzleSocialIcon>
        <ICPuzzleSocialIcon href="https://t5t44-naaaa-aaaah-qcutq-cai.raw.ic0.app/collection/owuqd-dyaaa-aaaah-qapxq-cai/summary" target="_blank">
          <img src="/Openchat.svg" alt="Openchat" />
        </ICPuzzleSocialIcon>
        <ICPuzzleSocialIcon href="https://nftgeek.com" target="_blank">
          <img src="/nftgeek.svg" alt="nftgeek" />
        </ICPuzzleSocialIcon>
      </ICPuzzleSocialContainer>
    </ICPuzzleContainer>
  );
};

export default ICPuzzleInfo;
