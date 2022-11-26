import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer>
      Created by
      <a
        href="/"
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
        id="gitHub"
      >
        <FaGithub className="fa" />
      </a>{' '}
      <a
        href="mailto:pizarro.developer@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="icon"
        id="mail"
      >
        <FaEnvelope className="fa" />
      </a>{' '}
      <a
        href="https://www.linkedin.com/in/david-pizarro-developer"
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