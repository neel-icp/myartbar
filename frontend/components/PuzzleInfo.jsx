import React from 'react';
// import styled, { keyframes } from 'styled-components';
import styled from 'styled-components'; 
import PuzzleImagerow from './PuzzleImageRow';
import { FaTwitter, FaTelegram, FaDiscord } from 'react-icons/fa'; // Import the icons you want


const Portal = ({ children }) => {
  return ReactDOM.createPortal(
    children,
    document.getElementById('portal-root')  // Make sure to create this div in your html
  );
};
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
`;
*/
// Styled components

const Container = styled.div`
  display: flex;
  justify-content: flex-start; // Align items to the left
  align-items: flex-start;
  padding: 40px; // Adjust as needed
  position: relative;
  z-index: 1;
`;


const PuzzleInfoContainer = styled.div`
font-family: 'Comfortaa', cursive;
  font-weight: 900;
  text-align: left; // Ensure text is aligned to the left
`;

/*
const Popout = styled.span`
  font-size: ${props => props.fontSize || '1em'};
  position: relative;
  display: inline-block;
  animation: ${ani} 1s infinite alternate cubic-bezier(0.860, 0.000, 0.070, 1.000);
  animation-delay: ${props => props.delay}s;
  margin-bottom: ${props => props.fontSize === '3em' ? '20px' : '10px'};
`; */
/* Replace Popout with this Span styled component */
const Span = styled.span`
  font-size: ${props => props.fontSize || '1em'};
  margin-bottom: ${props => props.fontSize === '3em' ? '20px' : '10px'};
  font-family: 'Poppins', sans-serif; 
  font-style: italic ;
  
`;

/* And replace the usage of Popout in your component render function */


const Space = styled.span`
  font-size: ${props => props.fontSize || '1em'};
  margin-bottom: ${props => props.fontSize === '3em' ? '20px' : '10px'};
`;

const Text = styled.p`
  text-align: left;
  font-family: 'Comfortaa', cursive;
  margin-right: 30px;
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;  
  
`;

const SocialIconLink = styled.a`
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


const PuzzleInfo = () => {
  const titleText = "SEPTEMBER 2, 2022".split("");
  const collectionText = "COLLECTION OF 3693 NFTs".split("");
  const founderText = "FOUNDER & ARTIST".split("");
  const n = titleText.length;

  return (
    <Container>
      <PuzzleInfoContainer>
      {titleText.map((char, i) => char === ' ' ? <Space fontSize='3em' key={i}> </Space> : <Span key={i} fontSize='3em'>{char}</Span>)}
      <br />
        {collectionText.map((char, i) => char === ' ' ? <Space fontSize='2em' key={i+n}> </Space> : <Span key={i+n} delay={-1 * i / n / 2} fontSize='2em'>{char}</Span>)}
        <br />
        {founderText.map((char, i) => char === ' ' ? <Space fontSize='2em' key={i+2*n}> </Space> : <Span key={i+2*n} delay={-1 * i / n / 2} fontSize='2em'>{char}</Span>)}
        <br />
        <Text>
        Introducing Puzzles GenZ(3D) - A curated assembly of 3693 unique, 3D, collectible NFTs. This exquisite assortment encapsulates an array of imaginative puzzles, drawing inspiration from the foundational concept of ICPuzzles, one of the earliest collections on the IC NFT platform.
  
        These NFTs characterize a broad spectrum of existence. Some are solitary, embracing the freedom of individuality and independence, while others are entwined in the mesmerizing dance of connection and companionship.
  
        Transcending into a new dimension, these NFTs mark the evolution of the ICPuzzles collection into the mesmerizing realm of 3D - The Puzzles GenZ. They capture the spirit of the GenZ era in a visual symphony of puzzle shapes, illuminating a lifestyle rich with aesthetics and design.
        </Text>
        <PuzzleImagerow />
      </PuzzleInfoContainer>
      <SocialContainer>
        <SocialIconLink  href="https://twitter.com/icpuzzles" target="_blank"><FaTwitter /></SocialIconLink>
        <SocialIconLink href="https://t.me/puzzlebyN" target="_blank"><FaTelegram /></SocialIconLink>
        <SocialIconLink href="https://discord.gg/qRaxTfhbev" target="_blank"><FaDiscord /></SocialIconLink>
        <SocialIconLink href="https://az5sd-cqaaa-aaaae-aaarq-cai.ic0.app/u/myartbar" target="_blank">
          <img src="/distrikt.svg" alt="Distrikt" />
        </SocialIconLink>
        <SocialIconLink href="https://dscvr.one/u/IC-Puzzle" target="_blank">
          <img src="/dscvr.svg" alt="DSCVR" />
        </SocialIconLink>
        <SocialIconLink href="https://t5t44-naaaa-aaaah-qcutq-cai.raw.ic0.app/collection/owuqd-dyaaa-aaaah-qapxq-cai/summary" target="_blank">
          <img src="/Openchat.svg" alt="Openchat" />
        </SocialIconLink>
        <SocialIconLink href="https://t5t44-naaaa-aaaah-qcutq-cai.raw.ic0.app/collection/owuqd-dyaaa-aaaah-qapxq-cai/summary" target="_blank">
          <img src="/nftgeek.svg" alt="nftgeek" />
        </SocialIconLink>
      </SocialContainer>
    </Container>
  );
  
};

export default PuzzleInfo;