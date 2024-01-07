import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Program.css";
import { BiSolidCube } from "react-icons/bi";
import programImage from "../assets/placeholder.jpg";

const Program = () => {
  return (
    <section className='program-wrapper'>

      <div className=' program-container'>

        {/* left side */}
        <div className='flexColStart program-left'>

          <div className='program-title'>
           <h2>
             Unlock the secrets of gold trading with TradingLab's comprehensive training program.
           </h2>
          </div>

        <div className="program-2ndTitle">
            <p>Learn the strategies and techniques needed to succeed in the gold market.</p>
            <p>Join TradingLab today!</p>
        </div>

        <div className="flexColStart program-des">
          <span className='secondaryTextP'><BiSolidCube size={20} className='boxIcon' />Expert guidance for profitable gold trading</span>
          <span className='secondaryTextP'><BiSolidCube size={20} className='boxIcon' />Stay ahead of the competition with TradingLab's gold trading insights.</span>
          <span className='secondaryTextP'><BiSolidCube size={20} className='boxIcon' />Maximize your profits with TradingLab's gold trading expertise.</span>
        </div>
{/* 
        <div className="program-buttons">
          <button className='start'><Link className='startLink' to="/">Learn More</Link> </button>
          <button className='signUp'><Link className='signUpLink' to="/">Sign Up</Link> </button>
        </div> */}

        </div>

        {/* right side */}

        <div className='flexColStart program-right'>
          <img src={programImage} alt="" className='programImage'/>
        </div>

      </div>
      
    </section>
  );
};

export default Program;
