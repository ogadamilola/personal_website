import React from 'react';
import './programming.css';
import { Feature } from '../../components';
import { javaLogo, javaScriptLogo, scalaLogo, pythonLogo, cLogo } from '../../containers/photography/imports';

const Programming = () => {
  return (
    <div className="dami__programming section__margin" id="programming">
      <div className="dami__programming-feature">
        <Feature title="Programming" text="As a final year Computer Science student at the University of Saskatchewan, I've embarked on a journey through the intricate world of algorithms, data structures, and software design. This experience has enabled me to explore and learn a variety of programming languages, such as C, Java, Javascript, Python, and many more. My ultimate goal is to work as a Cyber Security personnel or Software Engineer, as these fields require constant learning and versatile problem solving skills, and I'm always down for a challenge."/>
      </div>
      <div className="dami__programming-heading">
        <h1 className="gradient__text">Cultivation Through Code</h1>
        <a href="https://github.com/ogadamilola" target="_blank" rel="noopener noreferrer" >
        <p>See My Projects Here!</p>
        </a>
      </div>
      <div className="dami__programming-container">

      <div>
        <img src={cLogo} alt='cLogo' />
      </div>

      <div>
        <img src={javaScriptLogo} alt='jsLogo' />
      </div>

      <div>
        <img src={javaLogo} alt='javaLogo' />
      </div>

      <div>
        <img src={pythonLogo} alt='pythonLogo' />
      </div>

      <div>
        <img src={scalaLogo} alt='scalaLogo' />
      </div>

      <div className='dami__programming-paragraph' style={{ gridColumn: "1 / -1" }}>
        <p>This section is currently under construction (and will be perpetually) as I continue to create a wide range of projects to showcase. This website itself stands as a testament to my passion for technology and my capabilities as a developer. Designed and built from the ground up, it reflects my personal aesthetic and technical skills, serving not only as a portfolio but also as a personal project that challenges and expands my web development expertise. This website will never fully be finished, as I will continue to work on it and upgrade it as often as possible. My ultimate goal with this website is to have a central hub that showcases everything I enjoy, as well as a home for my ideas and anything I might find useful that will not only make my life easier, but hopefully yours as well.</p>
      </div>

    </div>

    


    </div>
  )
}

export default Programming 