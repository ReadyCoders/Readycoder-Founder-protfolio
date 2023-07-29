import React from 'react'
import'./CounselingAbout.css';
import counsilimage from'../../assets/images/counsilimage.jpeg';
// import images from "../../constants/images";
{/* <img src={}  className='counil' alt="emty" /> */}
// Counselingaboutpage
// 
// Counselingabout-title
const CounselingAbout = () => {
  return (
    <div>
      <div className='Counselingabout section-p'>
        <div className='container'>
          <div className='Counselingabout-content'>
            <div className='Counselingabout-grid grid'>
              <img src={counsilimage} alt="" className='Counselingabout-img mx-auto' />
              <div className='section-title'>
                <h3 className='text-dark'>About<span className='text-brown'>Counseling</span></h3>
                <p className='text mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Numquam culpa distinctio mollitia consectetur dolore! Iusto dolores reprehenderit at
                 ad! Molestiae.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default CounselingAbout
