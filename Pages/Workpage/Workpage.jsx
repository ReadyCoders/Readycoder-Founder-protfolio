import React from 'react'
import'./Workpage.css';
import Navbar from '../../components/Navbar/Navbar';
import Work from '../../components/Work/Work';
import Footer from'../../components/Footer/Footer';
import WorkProcess from'../../components/WorkProcess/WorkProcess';

const Workpage = () => {
  return (
    <div>
        <div className='Workpagebody'>
           <Navbar/>
           <div className='container flex'>
            <div className='Workpagebody-content'>
                
                <h1 className='text-white fw-6 Workpagebody-title'>My <span className='text-brown'> Work </span> Page</h1>
                {/* { <div className='btn-groups flex'>
                  <button type = "button" className='btn-item bg-brown fw-4 ls-2'>See Works</button>
                  <button type = "button" className='btn-item bg-dark fw-4 ls-2'>Contact Me</button>
                </div> } */}
            </div>
        </div> 
        </div>

        <div>
            <Work/>
        </div>
        <div>
            <WorkProcess/>
        </div>
        <div>
            <Footer/>
        </div>
      
    </div>
  )
}

export default Workpage
