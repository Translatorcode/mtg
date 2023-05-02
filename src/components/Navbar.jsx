import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-body-tertiary col-primary-custom '>
        <div className='container-fluid '>
          <a className='navbar-brand text-white' href='#'>
            MortgageLytics
          </a>
          <button
            className='navbar-toggler navbar-dark'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon navbar-dark'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0 '>
              <li className='nav-item'>
                <a className='nav-link text-custom-one ' href='#'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link text-custom-one' aria-current='page' href='#'>
                  Faq
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link text-custom-one ' href='#'>
                  Calculator
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
