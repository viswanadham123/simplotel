// App.js
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './App.css';

function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className="App">
      <header>
        <div className="mobile-nav-icon" onClick={toggleMobileNav}>
          <FaBars />
        </div>
        <nav className={isMobileNavOpen ? 'open' : ''}>
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#order">ORDER</a></li>
            <li><a href="#food">FOOD</a></li>
            <li><a href="#restaurant">RESTAURANT</a></li>
            <li><a href="#testimonial">TESTIMONIAL</a></li>
            <li><a href="#contact">CONTACT US</a></li>
          </ul>
        </nav>
      </header>
      <div className="body-container">
        {/* Container 1 */}
        <div className="column-container">
          <div className="left-side2">
            <h2>LOREM IPSUM</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              id est vitae dolor rhoncus tristique. Maecenas metus quam,
              rhoncus euismod lorem in, sollicitudin viverra eros. Donec
              dictum luctus quam ut tristique. Curabitur nec faucibus purus.
              Quisque congue sem nec justo mollis, in tincidunt erat pretium.
              Sed pulvinar, massa ac porta viverra.</p>
            <button>Click here</button>
          </div>
          <div className="right-side">
            <img src='./pexels-robin-stickel-70497.jpg' alt="Placeholder" />
          </div>
        </div>

        {/* Container 2 */}
        <div className="column-container">
          <div className="left-side">
            <img src='./pexels-mister-mister-3434523.jpg' alt="Second Placeholder" />
          </div>
          <div className="right-side">
            <div className="right-content">
              <p style={{ fontSize: "14px", textAlign: "left", paddingLeft: "5px" }}>LOREM IPSUM SET ADEMIR</p>
              <h2>LOREM IPSUM SET ADEMIR</h2>
              <p className="arrow">Click <span>&#8594;</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
