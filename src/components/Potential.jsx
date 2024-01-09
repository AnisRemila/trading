import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Potential.css";

const Potential = () => {
  return (
    <section className='potential-wrapper'>

        <div className="hero-container">

         <div className='flexColStartH potential-left'>

            <div className='potential-title'>
             <h1>
                Unlock Your Trading Potential Today
             </h1>
            </div>

            <div className='flexColStartH-des'>
            <div className="flexColStart hero-des">
            <span className='secondaryText'>Join our free training session or webinar to
                                           learn the secrets of successful gold trading.
              </span>
            </div>

            <div className="hero-buttons">
            <button className='start'><Link  className='startLink' to="/">Sign Up</Link> </button>
            <button className='signUp'><Link className='signUpLink' to="/">Learn More</Link> </button>
            </div>

            </div>

         </div>


        </div>
      
    </section>
  )
}

export default Potential
