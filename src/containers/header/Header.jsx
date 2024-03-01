import React from 'react';
import './header.css';
import headshot from '../../assets/headshot.jpg'

const Header = () => {
  return (
    <div className="dami__header section__padding" id="home">
      <div className="dami__header-content">
        <h1 className="gradient__text">
          Welcome To My World!
        </h1>
        <p> Join me as we embark on a journey through Code, Visuals, Fashion/Lifestyle, and Melodies!</p>
      </div>
      <div className="dami__header-image">
        <img src={headshot} alt="headshot" />
      </div>
    </div>
  )
}

export default Header 