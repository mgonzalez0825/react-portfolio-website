import React, {useState} from 'react';
import './Header.css'; // Import the CSS file


const Header = () => {
  const [showMenu, setShowMenu] = useState(true);


  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  return (
    <header>
      <div className="left-section">
        <h1>Manny Gonzalez</h1>
      </div>
      <div className="right-section">
        
      <button className="menu-button" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
        <nav className={showMenu ? 'show' : ''}>
          <a href="#about">About</a>
          {/* <a href="#projects">Projects</a> */}
          
          <div className="dropdown">
            <button className="dropbtn">Projects</button>
            <div className="dropdown-content">
              <a href="https://battleknights.xyz" target="_blank" rel="noopener noreferrer">Battle Knights</a>
              <a href="#project2">Project 2</a>
            </div>
          </div>



          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
