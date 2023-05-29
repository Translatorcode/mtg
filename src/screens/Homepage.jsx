import React from 'react';
import HeroImage from '../otherassets/HeroImage.png';
import MortgageImage from '../otherassets/Mortgage-Hero-Image.jpg';
import HeroImageTwo from '../otherassets/MortgageHeroTwo.png';
import MortgagePayCalc from '../components/MortgagePayCalc';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import AmortizationSchedule from '../components/AmortizationSchedule';
import AmortizationGraph from '../components/AmortizationGraph';

// Bootstrap Note
// In Bootstrap, when you define a class with a breakpoint-specific suffix (such as sm, md, lg, xl, or xxl), the styles defined in that class will only apply to the element when the screen width is equal to or greater than the breakpoint size.

// If you don't specify a breakpoint-specific suffix, the styles defined in that class will apply to the element at all screen sizes, including those below the breakpoint size

const Homepage = () => {
  return (
    <>
      <section className='hero overflow-hidden'>
        <div className='container mt-5 pt-4 pb-4'>
          <div className='row no-gutters align-items-center justify-content-between'>
            <div className='col-md-6 order-md-1 order-last'>
              <div className='hero-content text-center text-md-start  mt-md-0 mt-5'>
                <h1 className='display-3 lh-1 mb-3 text-custom-one '>
                  Mortgages&nbsp;
                  <span className='fw-bold'>Made Simple</span>, Your Dreams&nbsp;
                  <span className='fw-bold'>Made Possible</span>
                </h1>
                <p className='hero-subheading fw-semibold mb-4'>
                  Unlock your homeownership dreams with our user-friendly calculator. Calculate your monthly payment and
                  access a summary of the mortgage term.
                </p>

                <button type='button' className='btn btn-dark btn-lg shadow rounded-pill fs-6'>
                  Get Started
                </button>
              </div>
            </div>
            <div className='col-md-6 d-lg-block order-md-2 order-first '>
              <div className='hero-image-content d-flex justify-content-center'>
                <img src={HeroImageTwo} className='img-fluid' alt='house' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <MortgagePayCalc />
      <AmortizationGraph />
      <AmortizationSchedule />
      <Faq />
      <Footer />
    </>
  );
};

export default Homepage;
