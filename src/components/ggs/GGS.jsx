import React from 'react';
import './ggs.css';
import Feature from '../feature/Feature';
import { ggs0, ggs00, ggs2, ggs3, ggs4, ggs5, ggs6, ggs7, ggs8, ggs9, ggs10, ggs11} from '../../containers/photography/imports';
import {ggs} from '../brand/imports';

const GGS = () => {
  return (
    <div className="dami__ggs section__margin" id="golden-globe-society">
      <div className="dami__ggs-feature">
        <Feature title="Golden Globe Society" text="Inspired by King Midas. Legend has it that Midas asked the Gods that everything he touched would turn into gold. More than a brand, a collective built on hardwork, hustle and heart, among many in every situation. Expansion is inevitable, Whatever happens, happens."/>
      </div>
      <div className="dami__ggs-heading">
        <h1 className="gradient__text">Fashion, Lifestyle, and Community</h1>
        <a href="https://goldenglobesociety.com" target="_blank" rel="noopener noreferrer" >
        <p>Shop Now!</p>
        </a>
        
      </div>

      <div className='dami__ggs-logo'>
        <img src={ggs} alt='ggsLogo' />
      </div>

      <div className="dami__ggs-container">

      <div>
        <img src={ggs0} alt='ggs0' />
      </div>

      <div>
        <img src={ggs2} alt='ggs2' />
      </div>

      <div>
        <img src={ggs00} alt='ggs00' />
      </div>

      <div>
        <img src={ggs3} alt='ggs3' />
      </div>
      
      <div>
        <img src={ggs4} alt='ggs4' />
      </div>

      <div>
        <img src={ggs5} alt='ggs5' />
      </div>

      <div>
        <img src={ggs6} alt='ggs6' />
      </div>

      <div>
        <img src={ggs7} alt='ggs7' />
      </div>

      <div>
        <img src={ggs8} alt='ggs8' />
      </div>

      <div>
        <img src={ggs9} alt='ggs9' />
      </div>

      <div>
        <img src={ggs10} alt='ggs10' />
      </div>

      <div>
        <img src={ggs11} alt='ggs11' />
      </div>


      </div>




    </div>


    
  )
}

export default GGS 