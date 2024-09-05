import React, { useState } from 'react';
import '../Styles/Navbar.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <nav class="navbar navbar-expand-lg bg-black  " data-bs-theme="dark"  >
      <div class="container-fluid">
        <a class="navbar-brand p-3" href="#">NAGA</a>
        <button class="navbar-toggler"
          type="button"
          onClick={handleMenuToggle}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div  className={`collapse navbar-collapse  justify-content-center ${isMenuOpen ? 'show' : ''}`}
          id="navbarNav">
          <ul class="navbar-nav gap-3 ">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#home" onClick={handleMenuToggle}>Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about" onClick={handleMenuToggle}>About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#skills" onClick={handleMenuToggle}>Skills</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects" onClick={handleMenuToggle}>Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#certificate" onClick={handleMenuToggle}>Certificate</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact" onClick={handleMenuToggle}>Contact</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



