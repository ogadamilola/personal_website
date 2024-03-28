import React from 'react';
import './contact.css';
import Feature from '../feature/Feature';

const Contact = () => {
  return (
    <div className="dami__contact section__margin" id="contact">
      <div className="dami__contact-feature">
        <Feature title="Contact Me" text="I am currently open for business! Whether it be Photography, Website Building, or Music Features, you can contact me with the information shown here!"/>
      </div>

      <div className="dami__contact-heading">
        <h1 className="gradient__text">Dami Adetula</h1>
      </div>

      <div className="dami__contact-heading">
        <h1 className="gradient__text">Email: adetuladami@gmail.com</h1>
      </div>

      <div className="dami__contact-heading">
        <h1 className="gradient__text">Phone #: 306-227-5470</h1>
      </div>

      <div className="dami__copyright">
        <p>
          © 2024 Dami's Vision/Golden Globe Society
        </p>
      </div>


      



    </div>
  )
}

export default Contact 