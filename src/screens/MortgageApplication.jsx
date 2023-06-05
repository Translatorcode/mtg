import React from 'react';
import Hero from '../components/Hero';
import MortgagePayCalc from '../components/MortgagePayCalc';
import Footer from '../components/Footer';
import AmortizationSchedule from '../components/AmortizationSchedule';
import AmortizationGraph from '../components/AmortizationGraph';
import About from '../components/About';
import Faq from '../components/Faq';

const Homepage = () => {
  return (
    <>
      <Hero />
      <MortgagePayCalc />
      <AmortizationGraph />
      <AmortizationSchedule />
      <About />
      <Faq />
      <Footer />
    </>
  );
};

export default Homepage;
