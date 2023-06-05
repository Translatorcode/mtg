import React from 'react';
import HeroImageTwo from '../otherassets/MortgageHeroTwo.png';
import { motion } from 'framer-motion';
import { Link, animateScroll as scroll } from 'react-scroll';

const Hero = () => {
  return (
    <section className='hero overflow-hidden' id='top'>
      <div className='container mt-5 pt-4 pb-4'>
        <div className='row no-gutters align-items-center justify-content-between'>
          <div className='col-md-6 order-md-1 order-last'>
            <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
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

                <Link
                  activeClass='active'
                  to='section1'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={100}
                  className='text-decoration-none'
                  role='button'
                >
                  <button type='button' className='btn btn-dark btn-lg shadow rounded-pill fs-6'>
                    Get Started
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
          <div className='col-md-6 d-lg-block order-md-2 order-first '>
            <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className='hero-image-content d-flex justify-content-center'>
                <img src={HeroImageTwo} className='img-fluid' alt='house' />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
