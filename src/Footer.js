import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer>
      Created by
      <a
        href=""
        target="_blank"
        rel="noreferrer"
        className="link"
      >
        {' '}
        David Pizarro
      </a>
      <a
        href="https://github.com/dpizapal"
        target="_blank"
        rel="noreferrer"
        className="icon"
        id="twitter"
      >
        <FaGithub className="fa" />
      </a>{' '}
      <a
        href="https://www.linkedin.com/in/david-pizarro-developer/"
        target="_blank"
        rel="noreferrer"
        className="icon"
        id="linkedin"
      >
        <FaLinkedin className="fa" />
      </a>
    </footer>
  );
};

export default Footer;