import React from 'react';
import "../Styles/Hero.css";
import { Link } from 'react-router-dom';
import heroImage from "../assets/placeholder.jpg";


const Hero = () => {
  return (
    <section className='hero-wrapper'>

      <div className=' hero-container'>

        <div className="imageContainer">
          <img src={heroImage} alt="" className='heroImage'/>
        </div> 

        {/* left side */}
        <div className='flexColStartH hero-left'>

          <div className='hero-title'>
           <h1>
              Unlock the secrets of gold trading
           </h1>
          </div>

        <div className='flexColStartH-des'>
        <div className="flexColStart hero-des">
          <span className='secondaryText'>Welcome to TradingLab, your ultimate resource for mastering the art of
              trading gold. Whether you're a beginner or an experienced trader, our
              comprehensive training programs will equip you with the knowledge and
              skills to succeed in the gold market.
            </span>
        </div>

        <div className="hero-buttons">
          <button className='start'><Link className='startLink' to="/">Learn More</Link> </button>
          <button className='signUp'><Link className='signUpLink' to="/">Sign Up</Link> </button>
        </div>

        </div>

        </div>

      </div>
      
    </section>
  )
}

export default Hero
