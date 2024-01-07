import React from 'react';
import "../Styles/Discover.css";
import discoverImage from "../assets/placeholder.jpg";
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

const Discover = () => {
  return (
    <section className='discover-wrapper'>

        <div className='discover-container'>

           {/* top */}
           <div className='flexColStartD discover-title'>

            <p>Discover</p>
            <div className="flexColStartD1">
            <h1>Unlock the Secrets of Successful</h1>
            <h1>Gold Trading</h1>
            </div>

            <div className="flexColStartD1">
            <p>Our comprehensive training courses cover market analysis, risk management, and effective</p>
            <p>trading strategies. Whether you're a beginner or an experienced trader, we have the resources to</p>
            <p>help you succeed.</p>
            </div>

           </div>

           {/* bottom */}
           <div className="discover-courses">

            <div className="courseBox">

                <img src={discoverImage} alt="" className="course-img" />

                <h1 className="courseTitle">Expert Market Analysis and Insights</h1>

                <p>Stay ahead of the market with our expert analysis and
                   insights. Our team of experienced traders will provide
                   you with valuable information to make informed
                   trading decisions.
                </p>
            </div>

            <div className="courseBox">

                <img src={discoverImage} alt="" className="course-img" />

                <h1 className="courseTitle">Expert Risk Management Techniques</h1>

                <p>Stay ahead of the market with our expert analysis and
                   insights. Our team of experienced traders will provide
                   you with valuable information to make informed
                   trading decisions.
                </p>
            </div>

            <div className="courseBox">

                <img src={discoverImage} alt="" className="course-img" />

                <h1 className="courseTitle">Develop Winning Trading Strategies</h1>

                <p>Stay ahead of the market with our expert analysis and
                   insights. Our team of experienced traders will provide
                   you with valuable information to make informed
                   trading decisions.
                </p>
            </div>

           </div>

           <div className="buttons">

           <button className='enroll'><Link className='enrollLink' to="/">Enroll</Link> </button> 
           <button className='c'><Link className='enrollLink' to="/">Contact<IoIosArrowForward size={20}/></Link> </button> 


           </div>

        </div>
      
    </section>
  );
};

export default Discover;
