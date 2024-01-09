import React from 'react';
import "../Styles/Reviews.css";
import { FaStar } from "react-icons/fa";
import profileImg from "../assets/placeholder.jpg";
import { BiLogoWordpress } from "react-icons/bi";



const Reviews = () => {
  return (
    <section className='potential-wrapper'>

        <div className="reviews-container">

        {/* top */}
           <div className="flexColStart potential-title">
                               
                 <h1>
                    Happy Clients
                 </h1>

                 <p>Read what out successful clients have to say</p>

           </div>

           {/* bottom */}
           <div className="reviews">
             
              <div className="reviewBox">

                 <div className="ratings">
                    <FaStar size={20}/><FaStar size={20}/><FaStar size={20}/><FaStar size={20}/><FaStar size={20}/>
                 </div>

                 <div className="review">
                    <p>TradingLab's training has been a game-changer for me.
                        I've learned valuable strategies that have helped me achieve
                        consistent profits in trading.
                    </p>
                 </div>

                 <div className="info">
                    
                    <div className="clientInfo">

                        <img src={profileImg} alt="" className="profileImg" />
                        
                        <div>
                            <h4>John Doe</h4>
                            <p>Trader, XYZ Company</p>
                        </div>
                        
                    </div>

                    <div className="company">
                        <BiLogoWordpress size={25} className='wLogo' /><p>Webflow</p>
                    </div>

                 </div>

              </div>

              <div className="reviewBox">

                 <div className="ratings">
                 <FaStar size={20}/><FaStar size={20}/><FaStar size={20}/><FaStar size={20}/><FaStar size={20}/>
                 </div>

                 <div className="review">
                    <p>TradingLab's training has been a game-changer for me.
                        I've learned valuable strategies that have helped me achieve
                        consistent profits in trading.
                    </p>
                 </div>

                 <div className="info">
                    
                    <div className="clientInfo">

                        <img src={profileImg} alt="" className="profileImg" />
                        
                        <div>
                            <h4>John Doe</h4>
                            <p>Trader, XYZ Company</p>
                        </div>
                        
                    </div>

                    <div className="company">
                        <p>Webflow</p>
                    </div>

                 </div>

              </div>

           </div>

        </div>
      
    </section>
  );
};

export default Reviews;
