import React from 'react';
import './About.css';
import profilePicture from '../images/profilePicture.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="about-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={profilePicture} alt="Manny Gonzalez" />
          </div>
          <div className="about-text">
            <p>
              Manuel "Manny" Gonzalez is a full stack software engineer who achieved a Bachelor's of Science Degree in Software Engineering at Miami Dade College, Miami, Florida. He enjoys creating web applications that are user-friendly with React, Spring Boot, and Node.js. He could, and sometimes does, spend all day trying to implement the best solution in his code. Other than programming, some of the things that Manny loves to do include all kinds of outdoor activities and sports. Manny is a problem-solver with an analytical and driven mindset always ready for new challenges.
            </p>
            <div className="about-links">
              <a href="https://www.linkedin.com/in/manuel-gonzalez-a84610195/" target="_blank" rel="noopener noreferrer">
                <i> <FontAwesomeIcon icon={faLinkedin} size="xl" /></i>
                LinkedIn
              </a>
              <a href="https://github.com/mgonzalez0825" target="_blank" rel="noopener noreferrer">
                <i> <FontAwesomeIcon icon={faGithub} size="xl" /></i>
                GitHub
              </a>
              <a href="/MannyGonzalezResume.pdf" download="MannyGonzalezResume.pdf">
                <i><FontAwesomeIcon icon={faDownload} size="xl" /></i>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
