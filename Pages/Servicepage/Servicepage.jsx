import React from 'react'
import './Servicepage.css';
import Navbar from '../../components/Navbar/Navbar';
import Services from '../../components/Services/Services';
import Footer from '../../components/Footer/Footer';

const Servicepage = () => {
  return (
    <div className='Servicepagebody'>
        <div>
          <Navbar/> 
          <div className='container flex'>
            <div className='Servicepagebody-content'>
                
                <h1 className='text-brown fw-6 Servicepagebody-title'>Start-up mentor <span className='text-white' >and</span><span className='text-brown'> Life coach</span> <span className='text-white'> Page</span></h1>
            </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        </div>
        <div className='Service-box'>
            <Services/>
        </div>
        <div>
            <Footer/>
        </div>

    </div>
  )
}

export default Servicepage
