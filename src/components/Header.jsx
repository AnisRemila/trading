import React from 'react';
import "../Styles/Header.css";
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <div>
        <section className='h-wrapper'>
          <div className="h-container flexCenter">
           <div className='h-logo'><Link to="/">Trading Lab</Link></div>

           <div className='centerElements flexCenter'>
             <Link to="">Home</Link>
             <Link to="">Our Programs</Link>
             <Link to=""></Link>
             <Link to=""></Link>
           </div>

           <div className='flexCenter'>
              <button className='signIn'>
               <Link className='link' to="/login"><CgProfile className='signInLogo' size={30} /> <span>Sign In</span></Link>
              </button>
              

             <button className='start'>
              <Link className='startLink' to="/login">Get Started</Link>
             </button>

           </div>

          </div>


        </section>
      
    </div>
  );
};

export default Header;
