import React from 'react';
import { BiSolidCube } from 'react-icons/bi';
import joinImage from "../assets/placeholder.jpg";
import "../Styles/Join.css";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

const Join = () => {
  return (
    <section className='join-wrapper'>

      <div className=' join-container'>

        {/* left side */}
        <div className='flexColStart join-left'>

          <div className='join-title'>
          <BiSolidCube size={60} className='joinIcon' />
           <h1>
             Unlock Financial Opportunities with TradingLab.
           </h1>
          </div>

        <div className="join-2ndTitle">
            <p>Learn to trade gold and gain valuable skills for financial success. Join
                TradingLab today and start your journey towards a brighter future.
                </p>
        </div>

        <div className="join-buttons">

              <button className='join'><Link className='joinLink' to="/">Enroll</Link> </button> 
              <button className='c'><Link className='joinLink' to="/">Contact<IoIosArrowForward size={20}/></Link> </button> 


        </div>

        </div>

        {/* right side */}

        <div className='flexColStart join-right'>
          <img src={joinImage} alt="" className='joinImage'/>
        </div>

      </div>
      
      
    </section>
  );
};

export default Join;
