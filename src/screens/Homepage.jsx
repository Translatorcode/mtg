import React from 'react';
import HeroImage from '../otherassets/HeroImage.png';
import MortgagePayCalc from '../components/MortgagePayCalc';

// Bootstrap Note
// In Bootstrap, when you define a class with a breakpoint-specific suffix (such as sm, md, lg, xl, or xxl), the styles defined in that class will only apply to the element when the screen width is equal to or greater than the breakpoint size.

// If you don't specify a breakpoint-specific suffix, the styles defined in that class will apply to the element at all screen sizes, including those below the breakpoint size

const Homepage = () => {
  return (
    <>
      <section className='hero overflow-hidden'>
        <div className='container col-bg-light-blue mt-5 p-5'>
          <div className='row no-gutters align-items-center justify-content-between'>
            <div className='col-md-6 order-md-1 order-last'>
              <div className='hero-content text-center text-md-start  mt-md-0 mt-5'>
                <h1 className='display-1 lh-1 mb-3 text-secondary-custom fw-bold '>
                  Mortgage
                  <span className='text-custom-two '> payment calculator.</span>
                </h1>
                <p className='hero-subheading fw-semibold mb-4'>Calculate your way to financial freedom.</p>
              </div>
            </div>
            <div className='col-md-6 d-lg-block order-md-2 order-first'>
              <div className='hero-image-content d-flex align-items-center'>
                <img src={HeroImage} className='img-fluid' alt='house' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <MortgagePayCalc />
    </>
  );
};

export default Homepage;
