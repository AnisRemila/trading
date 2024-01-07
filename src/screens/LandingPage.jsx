import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import "../Styles/LandingPage.css";
import Program from '../components/Program';
import Discover from '../components/Discover';

const LandingPage = () => {
  return (
    <div>
      <Header/>
      <Hero />
      <Program />
      <Discover />
    </div>
  );
};

export default LandingPage;
