import React from 'react';
// import styled, { keyframes } from 'styled-components';
import EggsImagerow from './EggsImageRow';
import { FaTwitter, FaTelegram, FaDiscord } from 'react-icons/fa'; // Import the icons you want

import styled from 'styled-components';
/*
// Keyframes
const ani = keyframes`
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

const ESpan = styled.span`
  font-size: ${props => props.fontSize || '1em'};
  margin-bottom: ${props => props.fontSize === '3em' ? '20px' : '10px'};
  font-family: 'Poppins', sans-serif; 
  font-style: italic ;
`;

const EggsContainer = styled.div`
display: flex;
justify-content: flex-start; // Align items to the left
align-items: flex-start;
padding: 40px; // Adjust as needed
position: relative;
z-index: 1;
`;

const EggsPuzzleInfoContainer = styled.div`
font-family: 'Comfortaa', cursive;
  font-weight: 900;
  text-align: left; // Ensure text is aligned to the left
  
`;

/*
const EggsPopout = styled.span`
  font-size: ${props => props.fontSize || '1em'};
  position: relative;
  display: inline-block;
  animation: ${ani} 1s infinite alternate cubic-bezier(0.860, 0.000, 0.070, 1.000);
  animation-delay: ${props => props.delay}s;
  margin-bottom: ${props => props.fontSize === '3em' ? '20px' : '10px'};
  
`;
*/

const EggsSpace = styled.span`
  font-size: ${props => props.fontSize || '1em'};
  margin-bottom: ${props => props.fontSize === '3em' ? '20px' : '10px'};
  
  
`;

const EggsText = styled.p`
text-align: left;
font-family: 'Comfortaa', cursive;
margin-right: 30px;
`;


const EggsSocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const EggsSocialIcon = styled.a`
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

const EggsInfo = () => {
    const titleText = "JUNE 15, 2022".split("");
    const collectionText = "COLLECTION OF 4444 NFTs".split("");
    const founderText = "ARTIST".split("");
    const n = titleText.length;
  
    return (
      <EggsContainer>
        <EggsPuzzleInfoContainer>
        {titleText.map((char, i) => char === ' ' ? <EggsSpace fontSize='3em' key={i}> </EggsSpace> : <ESpan key={i} fontSize='3em'>{char}</ESpan>)}
        <br />
        {collectionText.map((char, i) => char === ' ' ? <EggsSpace fontSize='2em' key={i+n}> </EggsSpace> : <ESpan key={i+n} delay={-1 * i / n / 2} fontSize='2em'>{char}</ESpan>)}
        <br />
        {founderText.map((char, i) => char === ' ' ? <EggsSpace fontSize='2em' key={i+2*n}> </EggsSpace> : <ESpan key={i+2*n} delay={-1 * i / n / 2} fontSize='2em'>{char}</ESpan>)}
        <br />
          <EggsText>
          "The" Eggs Collection, an innovative NFT series encapsulating the abstract simplicity and intricacy of our digital age. This collection is the result of an exciting collaboration with Drakon NFTs.
          "The" Eggs Collection offers a novel perspective on digital art. Each piece in this collection is a unique exploration, expressed through art designed around the shape of an egg. These eggs, however, are not just static representations - they are poised to evolve, adding layers to their narrative and aesthetic allure.

          </EggsText>
          <EggsImagerow />
        </EggsPuzzleInfoContainer>
        <EggsSocialContainer>
          <EggsSocialIcon href="https://twitter.com/icdrakon" target="_blank"><FaTwitter /></EggsSocialIcon>
        <EggsSocialIcon href="https://discord.gg/57E2hDwHuJ" target="_blank"><FaDiscord /></EggsSocialIcon>
        <EggsSocialIcon href="https://h5aet-waaaa-aaaab-qaamq-cai.raw.ic0.app/p/drakon-nft" target="_blank">
          <img src="/dscvr.svg" alt="DSCVR" />
        </EggsSocialIcon>
        <EggsSocialIcon href="https://t5t44-naaaa-aaaah-qcutq-cai.raw.ic0.app/collection/k5osr-jyaaa-aaaam-qaoxq-cai/summary" target="_blank">
          <img src="/nftgeek.svg" alt="nftgeek" />
        </EggsSocialIcon>
     
        </EggsSocialContainer>
      </EggsContainer>
    );
  };
  
  export default EggsInfo;
