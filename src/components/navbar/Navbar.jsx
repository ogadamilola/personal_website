import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.png';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#photography">Photography</a></p>
    <p><a href="#programming">Programming</a></p>
    <p><a href="#golden-globe-society">Golden Globe Society</a></p>
    <p><a href="#music">Music</a></p>
    <p><a href="#contact">Contact</a></p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="dami__navbar">
      <div className="dami__navbar-links">
        <div className="dami__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="dami__navbar-links_container">
          <Menu />
        </div>
        <div className="dami__navbar-menu">
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className="dami__navbar-menu_container scale-up-center">
              <div className="dami__navbar-menu_container-links">
                <Menu />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
