import React from 'react';
import './brand.css';
import {ggs, spotify, appleMusic, youtube, soundcloud, instagram, github, flickr} from './imports';

const Brand = () => {
  return (
    <div className="dami__brand section__padding">
      <div>
        <a href="https://goldenglobesociety.com/" target="_blank" rel="noopener noreferrer" className="ggs">
          <img src={ggs} alt="ggs" />
        </a>
      </div>
      <div>
        <a href="https://open.spotify.com/artist/2WTIzRTbQAwXTtNlj1wTuX?si=gxNd8RMzRS-7jrIY4VOqHw" target="_blank" rel="noopener noreferrer">
          <img src={spotify} alt="spotify" />
        </a>
      </div>
      <div>
        <a href="https://music.apple.com/ca/artist/ogadamilola/1609748822" target="_blank" rel="noopener noreferrer">
          <img src={appleMusic} alt="appleMusic" />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/damis.vision" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="instagram" />
        </a>
      </div>
      <div>
        <a href="https://www.youtube.com/@ogadamilola7596" target="_blank" rel="noopener noreferrer">
          <img src={youtube} alt="youtube" />
        </a>
      </div>
      <div>
        <a href="https://soundcloud.com/dami-adetula" target="_blank" rel="noopener noreferrer">
          <img src={soundcloud} alt="soundcloud" />
        </a>
      </div>
      <div>
        <a href="https://www.flickr.com/photos/192695913@N02/" target="_blank" rel="noopener noreferrer">
          <img src={flickr} alt="flickr" />
        </a>
      </div>
      <div>
        <a href="https://github.com/ogadamilola" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="github" />
        </a>
      </div>
    </div>
  )
}


export default Brand 