import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Counseling.css';
import Footer from '../../components/Footer/Footer'
import CounselingAbout from './CounselingAbout';
function Counseling() {
    return (
        <div>
           <div className='bodypage' >
               <Navbar />
               <div className='container flex' id='texcontain'>
                   <div className='Counseling-content'>
                     
                     <h1 className='text-white  Counseling-title'>
                        How can <span className='text-brown'>we help</span> you
                     </h1>
                     <br />
                     <button type = "button" className='btn-item bg-dark fw-4 ls-2 start-box'>LET START</button>
                   </div>
               </div>
               
           </div>
           <div>
            <CounselingAbout/>
           </div>
           <div>
            <Footer/>
           </div>
       </div> 
    );
}

export default Counseling;
