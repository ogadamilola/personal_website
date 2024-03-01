import React from 'react';
import './photography.css';
import { Feature } from '../../components';
import { TandR, artwork, cityGirl, jonahFront, jonahSide, jonahPaint, josh, rob, robert} from './imports';


const Photography = () => {
  return (
    <div className="dami__photography section__margin" id="photography">
      <div className="dami__photography-feature">
        <Feature title="Photography" text="The place where light, shadow, and perspective converge to tell a story – my photography gallery. From my view, each click of my camera is an opportunity to immortalize the beauty our world possesses, mainly in the form of human beings. My journey in photography, a path I embarked upon as a child, has been a voyage of discovery and expression – each frame a testament to my love for this art form and each image a person just like me and you in their full beauty and glory, waiting to be enjoyed by anyone willing to view them."/>
      </div>
      <div className="dami__photography-heading">
        <h1 className="gradient__text">Capturing The Moment</h1>
        <a href="https://instagram.com/damis.vision" target="_blank" rel="noopener noreferrer" >
        <p>Check Out More</p>
        </a>
      </div>
      <div className="dami__photography-container">

      <div>
        <img src={robert} alt="robert" />
      </div>
      
      <div>
        <img src={artwork} alt="artwork" />
      </div>

      <div>
        <img src={jonahFront} alt="jonahFront" />
      </div>

      <div>
        <img src={TandR} alt="TandR" />
      </div>

      <div>
          <video controls autoPlay muted loop>
            <source src={cityGirl} type="video/mp4" />
          </video>
      </div>

      <div>
        <img src={jonahPaint} alt="jonahPaint" />
      </div>

      <div>
          <video controls autoPlay muted loop>
            <source src={josh} type="video/mp4" />
          </video>
      </div>

      <div>
        <img src={jonahSide} alt="jonahSide" />
      </div>

      <div>
        <img src={rob} alt="rob" />
      </div>

      </div> 
    </div>
  )
}

export default Photography 