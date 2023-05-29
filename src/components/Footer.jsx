const Footer = () => {
  return (
    <footer className='footer bg-dark p-4'>
      <div className='container'>
        <div className='col-lg-12 '>
          <div className='row'>
            <h4 className='text-white'>Disclaimer</h4>
            <p className='text-white'>
              Please note that the calculations provided by this mortgage calculator are approximate and intended for
              informational purposes only. The actual payment amounts, including interest rates, terms, and fees, may
              vary and will be determined by the financial institution or lender at the time of your mortgage
              application. We strongly advise against relying solely on the information or results obtained from this
              mortgage calculator when making financial decisions.
            </p>

            <p className='text-white'>
              It is crucial to consult with your bank or a qualified mortgage specialist to obtain accurate and
              personalized advice tailored to your specific circumstances. Using this app does not constitute a formal
              mortgage application or guarantee loan approval. The calculations provided are based on certain
              assumptions and general financial parameters, which may not reflect the complete picture of your financial
              situation.
            </p>
          </div>
          <div className='row'>
            <div className='col-lg-4 text-center '>
              <a href='#'>About Us</a>
            </div>
            <div className='col-lg-4 text-center'>
              <a href='#'>Frequently Asked Questions</a>
            </div>
            <div className='col-lg-4 text-center'>
              <a href='#'>Mortgage Calculator</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
