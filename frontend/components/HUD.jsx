import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components'; // Don't forget to import styled-components
import './HUD.css'; 
import scrollIndicator from '/ScrollDown.svg'; 
import anotherIndicator from '/Scrolling.svg'; 
import unmuteSvg from '/unmute.svg';
import muteSvg from '/mute.svg';
import Modal from 'react-modal';
import LinkedinLogo from '/linkedin.svg';
import twitterLogo from '/twitter.svg';
import instagramLogo from '/instagram.svg';
import GithubLogo from '/github.svg';
import EmailLogo from '/contact.svg';

Modal.setAppElement('#root'); // change this to match the id of your root element

const ContactText = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -6.7vh;
  left: 50%;
  transform: translateX(-50%);
  user-select: none;
  z-index: 999;
  text-decoration: none; // to remove the default underline from the link
  color: black; // adjust the color as you wish
  background-color: white; // color of the button
  border-radius: 50px; // makes the button pill-shaped
  padding: 10px 30px; // adjusts the size of the button
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); // adds a small shadow
  transition: transform 0.3s ease-in-out; // for smooth transition

  &:hover {
    transform: translateX(-50%) scale(1.1); // enlarge the button on hover
  }
`;

const customStyles = {
  overlay: {
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // adds a semi-transparent background
  },
  content: {
    position: 'relative',  // allows for absolute positioning within the modal
    width: '50%',  // adjust as needed
    borderRadius: '15px',  // gives the modal rounded corners
    padding: '20px',
  }
};
const SocialLogo = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 5px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  font-size: 24px;
  color: lightgrey;
  cursor: pointer;
`;

const HUD = () => {
  const [scrollPosition, setScrollPosition] = useState(window.pageYOffset);
  const [svg, setSvg] = useState(scrollIndicator);
  const [audioOn, setAudioOn] = useState(false);
  const audioRef = useRef();

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  const handleAudioToggle = () => {
    setAudioOn(!audioOn);
    if (audioOn) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 0) {
      setSvg(anotherIndicator);
    } else {
      setSvg(scrollIndicator);
    }
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setSvg('');
    }
  }, [scrollPosition]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="hud">
        { svg && <img src={svg} alt="Scroll down indicator" width="70" height="70" /> }
      </div>
      <div className="audio-control">
        <audio ref={audioRef} src="/background-audio.mp3" loop muted={!audioOn}></audio>
        <img
          onClick={handleAudioToggle}
          src={audioOn ? muteSvg : unmuteSvg}
          alt="Toggle audio"
        />
      </div>
      <ContactText onClick={handleContactClick}>CONTACT</ContactText>
      <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Contact Modal"
      style={customStyles}
    >
      <CloseButton onClick={closeModal}>×</CloseButton>
      <h2>CONTACT</h2>
      <p>Here are few of the channels you can reach me on.</p>
      <ul>
        <li>
          <a href="https://twitter.com/icpuzzles">
            <SocialLogo src={twitterLogo} alt="Twitter logo" />
            Twitter
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/myartbar_/">
            <SocialLogo src={instagramLogo} alt="Instagram logo" />
            Instagram
          </a>
        </li>
        <li>
          <a href="https://github.com/neel-icp">
            <SocialLogo src={GithubLogo} alt="Github logo" />
            Github
          </a>
        </li>
        <li>
          <a href="neel.icp@gmail.com">
            <SocialLogo src={EmailLogo} alt="E-mail logo" />
            E-mail
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/neel-bhanushali-8928a7285">
            <SocialLogo src={LinkedinLogo} alt="Linkedin" />
            Linkedin
          </a>
        </li>
      </ul>
    </Modal>
  </>
);
};

export default HUD;
