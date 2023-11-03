import React, {useState,useEffect} from 'react';
import './Header.css'; // Import the CSS file


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
// Use useEffect to close the menu when the screen size exceeds a certain width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(true); // Close the menu on larger screens
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header>
      <div className="left-section">
        <h1>Manny Gonzalez</h1>
      </div>
      <div className="right-section">
        
      <button className="menu-toggle" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
        <nav className={menuOpen ? 'show' : ''}>
          <a href="#about">About</a>
          {/* <a href="#projects">Projects</a> */}
          
          <div className="dropdown">
            <button className="dropbtn">Projects</button>
            <div className="dropdown-content">
              <a href="https://battleknights.xyz" target="_blank" rel="noopener noreferrer">Battle Knights</a>
              <a href="https://emos.netlify.app" target="_blank" rel="noopener noreferrer">Emos</a>
              
            </div>
          </div>



          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
