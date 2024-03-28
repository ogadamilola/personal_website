import React from 'react';
import './music.css';
import { Feature } from '../../components';

const Music = () => {
  return (
    <div className="dami__music section__margin" id="music">
      <div className="dami__music-feature">
        <Feature title="Music" text="When I'm not getting crushed by the weight of school and various endeavors, I like to unwind by making music. I initially started making music as a joke because I was a bored teenager trying to escape boredom amidst the coronavirus pandemic. My friends laughed at my music (as was intended), but one of my good friends told me to take it seriously and actually try so I did. My first attempts at making real music were okay at best, but definitely very good for a beginner that really had no idea what they were doing. I like to describe my style as a mix of Drill, Melodic Rap, with some RnB. Making music is one of my biggest passions and one of my personal escapes from reality. I aim to make music that everyone can relate to in some way, but most importantly something anyone can enjoy no matter what one regularly listens to."/>
      </div>
      <div className="dami__ggs-container">

        <iframe 
          title="Music Album Embeded" 
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" 
          frameBorder="0" 
          height="200" 
          style={{width: '100%', maxWidth: '660px', overflow: 'hidden', borderRadius: '10px', }} 
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
          src="https://embed.music.apple.com/ca/album/alone-feat-gl3nn-ciara/1732071368?i=1732071370">
        </iframe>

        <iframe 
          title="Music Album Embeded"
          style={{borderRadius:"12px"}} 
          src="https://open.spotify.com/embed/track/5fb8zHgfWdalE2Lfvkjj5F?utm_source=generator" 
          width="100%" 
          height="352" 
          frameBorder="0"
          allowfullscreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy">
        </iframe>

        <iframe 
          title="Music Album Embeded"
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" 
          frameborder="0" 
          height="200" 
          style={{width:"100%", maxWidth: "660px", overflow:"hidden", borderRadius:"10px"}} 
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
          src="https://embed.music.apple.com/ca/album/let-me-love-you-feat-boy-wonder/1690082723?i=1690082724">
        </iframe>

        <iframe 
          title='Music Album Embeded'
          style={{borderRadius:"12px"}} 
          src="https://open.spotify.com/embed/track/3pvdB6jnWqFjQ0poRzee1S?utm_source=generator" 
          width="100%" 
          height="352" 
          frameBorder="0" 
          allowfullscreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy">
        </iframe>

        <iframe 
          title="Music Album Embeded" 
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" 
          frameBorder="0" 
          height="200" 
          style={{width: '100%', maxWidth: '660px', overflow: 'hidden', borderRadius: '10px', }} 
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
          src="https://embed.music.apple.com/ca/album/slow-down-feat-gl3nn/1622774184?i=1622774185">
        </iframe>

        <iframe 
          title='Music Album Embeded'
          style={{borderRadius:"12px"}} 
          src="https://open.spotify.com/embed/track/1sLgGQBioggGazdOvShHmL?utm_source=generator" 
          width="100%" 
          height="352" 
          frameBorder="0"
          allowfullscreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy">
        </iframe>

      </div>
    </div>
  );
}

export default Music;
