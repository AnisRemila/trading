import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import "../Styles/LandingPage.css";
import Program from '../components/Program';
import Discover from '../components/Discover';
import Join from '../components/Join';
import Potential from '../components/Potential';
import Reviews from '../components/Reviews';

const LandingPage = () => {
  return (
    <div>
      <Header/>
      <Hero />
      <Program />
      <Discover />
      <Join />
      <Potential />
      <Reviews />
    </div>
  );
};

export default LandingPage;
