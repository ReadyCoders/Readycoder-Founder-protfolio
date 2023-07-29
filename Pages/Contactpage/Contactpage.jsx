import React from 'react';
import './Contactpage.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ContactBodyText from './contactbodytext'; 

const Contactpage = () => {
  return (
    <div>
      <div className='Contactpagebody'>
        <Navbar />
        <div className='container flex'>
          <div className='Contactpagebody-content'>
            <h1 className='text-white fw-6 Contactpagebody-title'>To  obtain the right solutions for yout digital business contact.<br></br> Email:<span className='text-brown'>info@mayankjha.in</span> </h1>
            
          </div>
        </div>
      </div>
      <ContactBodyText />
      <Footer />
    </div>
  );
};

export default Contactpage;
