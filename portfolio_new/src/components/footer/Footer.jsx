import React from 'react';
import './footer.css'
import {AiOutlineFacebook, AiOutlineInstagram} from 'react-icons/ai'
import {FiGithub, FiLinkedin} from 'react-icons/fi'


function Footer() {
  return (
    <footer id='footer'>

      <ul className="permaLinks">
       <li><a href="#">Home</a></li>
       <li><a href="#about">About</a></li>
       <li><a href="#experience">Experience</a></li>
       <li><a href="#services">Services</a></li>
       <li><a href="#portfolio">Portfolio</a></li>
       <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/WorWave" target="_blank"><AiOutlineFacebook/></a>
        <a href="https://instagram.com/wave_passakorn" target="_blank"><AiOutlineInstagram/></a>
        <span className="mobile__socials">
        <a href="https://github.com/Passakorn-V" target="_blank"><FiGithub/></a>
        <a href="https://linkedin.com/in/passakorn-vanchana-b988b7284" target="_blank"><FiLinkedin/></a>
        </span>
      </div>

      <div className="footer__copyright">
        <small>&copy; Passakorn Creative Services 2024</small>
      </div>
    </footer>
  )
}

export default Footer