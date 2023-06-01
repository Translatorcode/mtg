import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-body-tertiary shadow-sm p-3 mb-5 bg-white '>
        <div className='container-fluid'>
          <a className='navbar-brand fw-bold text-custom-four' href='/'>
            MortgageLytics
          </a>

          <button
            className='navbar-toggler navbar-toggle-custom '
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <i className='navbar-toggler-icon navbar-icon-custom'></i>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto my-2 mb-lg-0 gap-5'>
              <Link activeClass='active' to='section2' spy={true} smooth={true} offset={-70} duration={500}>
                <li className='nav-item'>
                  <a className='nav-link text-primary-custom fw-semibold' href='#'>
                    About
                  </a>
                </li>
              </Link>
              <Link activeClass='active' to='section3' spy={true} smooth={true} offset={-70} duration={500}>
                <li className='nav-item'>
                  <a className='nav-link text-primary-custom fw-semibold' aria-current='page' href='#'>
                    Faq
                  </a>
                </li>
              </Link>
              <Link activeClass='active' to='section1' spy={true} smooth={true} offset={-70} duration={500}>
                <li className='nav-item'>
                  <a className='nav-link text-primary-custom fw-semibold' href='#'>
                    Calculator
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
