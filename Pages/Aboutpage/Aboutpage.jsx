import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import'./Aboutpages.css';
import Footer from '../../components/Footer/Footer';
import About from '../../components/About/About';
const Aboutpage = () => {
  return (
    <div>
        <div className='Aboutbodypage'>
          <Navbar/>
          <div className='container flex'>
            <div className='Aboutbodypage-content'>
                {/* <h2 className='text-uppercase text-white op-07 fw-6 ls-2'>web design, branding, graphic</h2> */}
                <h1 className='text-white fw-6 Aboutbodypage-title'>Mayank Jha <span className='text-white'> is a </span><span className='text-brown fw-6 Aboutbodypage-title'> motivational speaker, start-tp mentor <span className='text-white fw-6 Aboutbodypage-title'> and </span>young entrepreneur </span> </h1>
                
            </div>
         </div>
        </div>
        <div>
          <About/>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
  )
}

export default Aboutpage
