import { Link, animateScroll as scroll } from 'react-scroll';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className='footer bg-dark-custom p-4 mt-5'>
      <div className='container'>
        <div className='col-lg-12 '>
          <div className='row'>
            <h4 className='text-custom-six fw-bold'>Disclaimer</h4>
            <p className='text-custom-six'>
              Please note that the calculations provided by this mortgage calculator are approximate and intended for
              informational purposes only. The actual payment amounts, including interest rates, terms, and fees, may
              vary and will be determined by the financial institution or lender at the time of your mortgage
              application. We strongly advise against relying solely on the information or results obtained from this
              mortgage calculator when making financial decisions.
            </p>

            <p className='text-custom-six'>
              It is crucial to consult with your bank or a qualified mortgage specialist to obtain accurate and
              personalized advice tailored to your specific circumstances. Using this app does not constitute a formal
              mortgage application or guarantee loan approval. The calculations provided are based on certain
              assumptions and general financial parameters, which may not reflect the complete picture of your financial
              situation.
            </p>
          </div>

          <div className='row'>
            <footer className='align-items-center justify-content-between row border-top pt-3'>
              <div className='col-sm-auto'>
                <small className='mb-2 text-custom-six'>@ MortgagaLytics {currentYear}. All Right Reserved</small>
              </div>
              <div className='col-sm-auto'>
                <div className='me-auto nav gap-3'>
                  <Link
                    activeClass='active'
                    to='section2'
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={300}
                    className='text-decoration-none text-custom-six'
                    role='button'
                  >
                    About
                  </Link>
                  <Link
                    activeClass='active'
                    to='section3'
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={300}
                    className='text-decoration-none text-custom-six'
                    role='button'
                  >
                    Faq
                  </Link>
                  <Link
                    activeClass='active'
                    to='section1'
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={300}
                    className='text-decoration-none text-custom-six'
                    role='button'
                  >
                    Calculator
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
