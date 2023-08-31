import React from 'react';
// import styled, { keyframes } from 'styled-components';
import styled from 'styled-components'; 
import OffspringsImagerow from './OffspringsImageRow';
import { FaTwitter, FaTelegram, FaDiscord } from 'react-icons/fa'; // Import the icons you want
 // Import the icons you want

// Keyframes
/* const ani = keyframes`
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
`; */

// Styled components
const OSpan = styled.span`
  font-size: ${props => props.fontSize || '1em'};
  margin-bottom: ${props => props.fontSize === '3em' ? '20px' : '10px'};
  font-family: 'Poppins', sans-serif; 
  font-style: italic ;

`;


const OffspringsContainer = styled.div`
  display: flex;
  justify-content: flex-start; // Align items to the left
  align-items: flex-start;
  padding: 40px; // Adjust as needed
  z-index: 1;
`;

const OffspringsInfoContainer = styled.div`
font-family: 'Comfortaa', cursive;
  font-weight: 900;
  text-align: left; // Ensure text is aligned to the left
`;


/* const OffspringsPopout = styled.span`
  font-size: ${props => props.fontSize || '1em'};
  position: relative;
  display: inline-block;
  animation: ${ani} 1s infinite alternate cubic-bezier(0.860, 0.000, 0.070, 1.000);
  animation-delay: ${props => props.delay}s;
  margin-bottom: ${props => props.fontSize === '3em' ? '20px' : '10px'};
`;
*/
const OffspringsSpace = styled.span`
  font-size: ${props => props.fontSize || '1em'};
  margin-bottom: ${props => props.fontSize === '3em' ? '20px' : '10px'};

`;

const OffspringsText = styled.p`
  text-align: left;
  font-family: 'Comfortaa', cursive;
`;

const OffspringsSocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const OffspringsSocialIcon = styled.a`
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

const OffspringsInfo = () => {
  const titleText = "JANUARY 5, 2023".split("");
  const collectionText = "COLLECTION OF 1111 NFTs".split("");
  const founderText = "ARTIST".split("");
  const n = titleText.length;

  return (
    <OffspringsContainer>
      <OffspringsInfoContainer>
      {titleText.map((char, i) => char === ' ' ? <OffspringsSpace fontSize='3em' key={i}> </OffspringsSpace> : <OSpan key={i} fontSize='3em'>{char}</OSpan>)}
      <br />
        {collectionText.map((char, i) => char === ' ' ? <OffspringsSpace fontSize='2em' key={i+n}> </OffspringsSpace> : <OSpan key={i+n} delay={-1 * i / n / 2} fontSize='2em'>{char}</OSpan>)}
        <br />
        {founderText.map((char, i) => char === ' ' ? <OffspringsSpace fontSize='2em' key={i+2*n}> </OffspringsSpace> : <OSpan key={i+2*n} delay={-1 * i / n / 2} fontSize='2em'>{char}</OSpan>)}
        <br />
        <OffspringsText>
        The Offspring is the next exciting phase of The Eggs Collection, The Eggs have hatched! In a reduced collection of only 1111 Offspring, there are special baby dragons that hatch from special community collaborated eggs as well as a whole range of rare and unique special baby dragons. 
The Offspring are 3D animated and will play a pivotal role in the series. Bringing you The Offsprings!
        </OffspringsText>
        <OffspringsImagerow />
      </OffspringsInfoContainer>
      <OffspringsSocialContainer>
        <OffspringsSocialIcon href="https://twitter.com/icdrakon" target="_blank"><FaTwitter /></OffspringsSocialIcon>
        <OffspringsSocialIcon href="https://discord.gg/57E2hDwHuJ" target="_blank"><FaDiscord /></OffspringsSocialIcon>
        <OffspringsSocialIcon href="https://h5aet-waaaa-aaaab-qaamq-cai.raw.ic0.app/p/drakon-nft" target="_blank">
          <img src="/dscvr.svg" alt="DSCVR" />
        </OffspringsSocialIcon>
        <OffspringsSocialIcon href="https://t5t44-naaaa-aaaah-qcutq-cai.raw.ic0.app/collection/rmuyo-kyaaa-aaaag-qbkaq-cai/summary" target="_blank">
          <img src="/nftgeek.svg" alt="nftgeek" />
        </OffspringsSocialIcon>
      </OffspringsSocialContainer>
    </OffspringsContainer>
  );
};

export default OffspringsInfo;
