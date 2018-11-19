import React, { Component } from 'react';
import './App.css';
import logo from './Assets/LogoV.png';
import profile from './Assets/Vania2.jpg';
import AboutMe from './Components/About-me/About-me';
import Skills from './Components/Skills/Skills';
import SocialNetwork from './Components/Social-Network/Social-network';
import Projects from './Components/Projects/Projects';
import FooterC from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="container-grid">
        <div className="header">
          <img
            src={logo}
            className="logo"
            alt="Vania Ramírez, Front-End Developer logo"
          />
        </div>

        <div className="profile">
          <a className="profile-card">
            <img
              src={profile}
              className="logo profile-pic shadow"
              alt="Vania Ramírez photograph"
            />
          </a>
        </div>

        <div className="nav-bar shadow" />

        <div className="about-me">
          <AboutMe />
        </div>
        <div className="cv" />

        <div className="skills mt-10">
          <Skills />
        </div>
        <div className="projects">
          <Projects />
        </div>
        <div className="social-feed">
          <SocialNetwork />
        </div>
        <div className="footer-area">
          <FooterC />
        </div>
        <div className="contact">
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;

/*
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStroopwafel,
  faEnvelope,
  faEnvelopeOpen
} from '@fortawesome/free-solid-svg-icons';

library.add(faStroopwafel, faEnvelope, faEnvelopeOpen, faFacebook);


 <div className="slider">
          <SliderAboutMe />
        </div>
*/
