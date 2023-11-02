// Projects.js
// import battleKnights from '../images/battleKnights.jpeg';
import React from 'react';
import './Projects.css'; // Import the CSS file

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="projects-title">Projects</h2>
        <div className="project-cards">
        <div className="project1-details">
          <h3>Battle Knights</h3>
          <p className="project-description">
            An NFT battle game.Play,collect and win.  
          </p>
          <a href="https://battleknights.xyz" target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
        </div>
        <div className="project2-details">
          <h3>EMOS</h3>
          <p className="project-description">
            Employee Management System
          </p>
          <a href="https://emos.netlify.app" target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
