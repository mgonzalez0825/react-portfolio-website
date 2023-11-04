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
        <h4>Battle Knights</h4>
          <p className="project-description">
            An NFT battle game.Play,collect and win.  
          </p>
        <div className="project1-details">
          
          <a href="https://battleknights.xyz" target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
        </div>
        <h4>EMOS</h4>
          <p className="project-description">
            Employee Management System
          </p>
        <div className="project2-details">
          
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
