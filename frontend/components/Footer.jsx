import React from 'react';
import TwitterLogo from '/twitter.svg'; // Import SVG
import LinkedinLogo from '/linkedin.svg';
import GithubLogo from '/github.svg';
import TelegramLogo from '/telegram.svg';
import EmailLogo from '/contact.svg';
import InstagramLogo from '/instagram.svg';

function Footer() {
    return (
      <div className="footer">
        <a className="footer-link" href="http://twitter.com/yourhandle">
          <img src={TwitterLogo} alt="Twitter logo" width="25" height="25" />
        </a>
        <a className="footer-link" href="http://linkedin.com/in/yourhandle">
          <img src={LinkedinLogo} alt="LinkedIn logo" width="25" height="25" />
        </a>
        <a className="footer-link" href="http://github.com/yourhandle">
          <img src={GithubLogo} alt="Github logo" width="25" height="25" />
        </a>
        <a className="footer-link" href="http://github.com/yourhandle">
          <img src={TelegramLogo} alt="Github logo" width="25" height="25" />
        </a>
        <a className="footer-link" href="http://github.com/yourhandle">
          <img src={InstagramLogo} alt="Github logo" width="25" height="25" />
        </a>
        <a className="footer-link" href="http://github.com/yourhandle">
          <img src={EmailLogo} alt="Github logo" width="25" height="25" />
        </a>
        <p>Copyright © Neel</p>
      </div>
    )
}

export default Footer;
