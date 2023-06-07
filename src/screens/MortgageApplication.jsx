import React from 'react';
import Hero from '../components/Hero';
import MortgagePayCalc from '../components/MortgagePayCalc';
import Footer from '../components/Footer';
import AmortizationSchedule from '../components/AmortizationSchedule';
import AmortizationGraph from '../components/AmortizationGraph';
import About from '../components/About';
import Faq from '../components/Faq';
import { useSelector } from 'react-redux';

const Homepage = () => {
  const mortgage = useSelector((state) => state.mortgageCalc);
  const { loading } = mortgage;

  return (
    <>
      <Hero />
      {loading ? (
        <div className='container custom-container shadow-sm bg-white d-flex justify-content-center align-items-center'>
          <div className='spinner-border text-custom-four ' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <MortgagePayCalc />
          <AmortizationGraph />
          <AmortizationSchedule />
          <About />
          <Faq />
        </>
      )}
      <Footer />
    </>
  );
};

export default Homepage;
