import React from 'react';
import './header.css';
import headshot from '../../assets/headshot.jpg'

const Header = () => {
  return (
    <div className="dami__header section__padding" id="home">
      <div className="dami__header-content">
        <h1 className="gradient__text">
          Welcome To Dami's Vision!
        </h1>
        <p>
           My name is Dami Adetula. I am currently a final year Computer Science Student at the University of Saskatchewan and the director of Dami's Vision, an official division of Golden Globe Society that offers Photography/Videography, Website Building, and Music services!
        </p>

        <p>
          Check out all my links in the icons below!
        </p>
      </div>
      <div className="dami__header-image">
        <img src={headshot} alt="headshot" />
      </div>
    </div>
  )
}

export default Header 