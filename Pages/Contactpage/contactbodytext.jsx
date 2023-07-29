import React, { useRef, useState } from 'react';
import './contactbodytext.css';
import images from "../../constants/images";



const ContactBodyText = () => {

  return (
    <div>
      <div className='Contacttext section-p'>
        <div className='container'>
          <div className='Contacttext-content'>
            <div className='Contacttext-grid grid'>
              <img src={images.About_Alex} alt="" className='Contacttext-img mx-auto' />
              <div className='section-title'>
                <h3 className='text-brown'>Contacts</h3>
                <p className='text mx-auto'>The above provided email i.e, <span className='text-brown'>info@mayankjha.in</span> can be used to approach Mr.Mayank Jha inorder to discuss and solve all the queries related to business ideas and digital growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBodyText;
