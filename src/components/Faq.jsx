const Faq = () => {
  return (
    <section className='pt-5' id='section3'>
      <h2 className='fw-bold fs-2 text-center mb-5'>FAQ</h2>
      <div className='container mb-5 shadow-sm bg-white'>
        <div className='accordion' id='accordionExample'>
          <div className='border-bottom pt-2 pb-2 '>
            <h3 className='accordion-header' id='headingOne'>
              <button
                className='accordion-button collapsed fs-5 fw-semibold '
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseOne'
                aria-expanded='true'
                aria-controls='collapseOne'
              >
                What is a mortgage payment?
              </button>
            </h3>
            <div
              id='collapseOne'
              className='accordion-collapse collapse show'
              aria-labelledby='headingOne'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body text-custom-five '>
                A mortgage payment refers to the sum of money you regularly contribute to your mortgage, usually on a
                bi-weekly or monthly schedule. These payments consist of two components: the mortgage principal, which
                represents the borrowed amount, and the interest, which signifies the additional cost imposed by the
                lender on the principal. Initially, when you commence making mortgage payments, a significant proportion
                of your payment is allocated to cover the interest. However, over time, as you gradually reduce your
                mortgage balance, the interest portion diminishes, allowing a larger share of your payment to be applied
                towards the repayment of the principal.
              </div>
            </div>
          </div>
          <div className='border-bottom pt-2 pb-2 bg-white'>
            <h3 className='accordion-header' id='headingTwo'>
              <button
                className='accordion-button collapsed fs-5 fw-semibold'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseTwo'
                aria-expanded='false'
                aria-controls='collapseTwo'
              >
                What is the mortgage principal?
              </button>
            </h3>
            <div
              id='collapseTwo'
              className='accordion-collapse collapse'
              aria-labelledby='headingTwo'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body text-custom-five'>
                The mortgage principal refers to the initial amount of money borrowed from a lender to purchase a
                property . It represents the total loan amount that needs to be repaid over a specific period, typically
                through regular mortgage payments. Let's say you want to purchase a home for $300,000. You have saved up
                $50,000 for a down payment, so you need to borrow $250,000 from a lender. The $250,000 is the mortgage
                principal - the initial amount of money borrowed to purchase the property.
              </div>
            </div>
          </div>
          <div className='border-bottom pt-2 pb-2 bg-white'>
            <h3 className='accordion-header' id='headingThree'>
              <button
                className='accordion-button collapsed fs-5 fw-semibold'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseThree'
                aria-expanded='false'
                aria-controls='collapseThree'
              >
                How do I calculate my mortgage payment?
              </button>
            </h3>
            <div
              id='collapseThree'
              className='accordion-collapse collapse'
              aria-labelledby='headingThree'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body text-custom-five'>
                Calculating your mortgage payment is an important step in understanding the financial commitment
                involved in homeownership. The{' '}
                <strong className='text-custom-two'>MortgageLytics mortgage calculator</strong> can help you get an idea
                of how much your mortgage payment could be by using some key variables:
                <p className='mt-3'>
                  <span className='text-decoration-underline text-custom-two'> Total principal amount: </span>&nbsp;
                  This is the purchase price minus your down payment
                </p>
                <p className='mt-3'>
                  <span className='text-decoration-underline text-custom-two'> Term and Interest rate:</span>&nbsp;
                  Choose a term and interest rate that best suits your needs and your timeline.
                </p>
                <p className='mt-3'>
                  <span className='text-decoration-underline text-custom-two'> Amortization period:</span>&nbsp; Decide
                  on the length of time you will take to repay the mortgage in full. Payment
                </p>
                <p className='mt-3'>
                  <span className='text-decoration-underline text-custom-two'> Payment Frequency:</span>&nbsp; Select
                  how often you would like to make payments on your mortgage.
                </p>
              </div>
            </div>
          </div>
          <div className='border-bottom pt-2 pb-2 bg-white'>
            <h3 className='accordion-header ' id='headingFour'>
              <button
                className='accordion-button collapsed fs-5 fw-semibold'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseFour'
                aria-expanded='true'
                aria-controls='collapseFour'
              >
                What&rsquo;s the difference between a fixed rate and a variable rate mortgage?
              </button>
            </h3>
            <div
              id='collapseFour'
              className='accordion-collapse collapse'
              aria-labelledby='headingFour'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <p className='text-custom-five'>
                  <strong className='text-custom-two'> Fixed Rate Mortgage:</strong> &nbsp;A fixed-rate mortgage is a
                  type of home loan where the interest rate remains constant throughout the entire loan term. This means
                  that your monthly mortgage payment remains the same over the life of the loan. With a fixed rate
                  mortgage, you have the advantage of knowing exactly how much your monthly payment will be, providing
                  stability and predictability for your budgeting. It is an ideal option if you prefer steady payments
                  and want to protect yourself from potential interest rate fluctuations in the market.
                </p>
                <p className='text-custom-five'>
                  <strong className='text-custom-two'> Variable Rate Mortgage:</strong> &nbsp;The interest rate on a
                  variable-rate mortgage is subject to market conditions and may vary over the duration of your
                  mortgage. With a variable-rate mortgage, your interest rate is tied to the lender's prime rate, which
                  in turn is influenced by the Bank of Canada rate. If the lender's prime rate changes, your mortgage
                  payment could either increase or decrease depending on the rate adjustment. In some cases, your
                  payment amount may remain constant, but the allocation between principal and interest portions of the
                  payment may be adjusted to accommodate changes in the lender's prime rate.
                </p>
              </div>
            </div>
          </div>
          <div className=' border-bottom pt-2 pb-2 bg-white'>
            <h3 className='accordion-header ' id='headingFive'>
              <button
                className='accordion-button collapsed fs-5 fw-semibold'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseFive'
                aria-expanded='true'
                aria-controls='collapseFive'
              >
                What is a mortgage amortization period?
              </button>
            </h3>
            <div
              id='collapseFive'
              className='accordion-collapse collapse'
              aria-labelledby='headingFive'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <p className='text-custom-five'>
                  The mortgage amortization period refers to the length of time it takes to repay your mortgage loan in
                  full. It is the duration over which you make regular mortgage payments to gradually reduce your
                  outstanding balance. The length of the amortization period can vary and is typically expressed in
                  years. Common amortization periods are 15, 20, 25, or 30 years, although other options may be
                  available. Choosing a longer amortization period typically results in lower monthly payments, but you
                  end up paying more interest over the life of the mortgage. Conversely, opting for a shorter
                  amortization period means higher monthly payments but less interest paid overall.
                </p>
              </div>
            </div>
          </div>
          <div className='pt-2 pb-2 bg-white'>
            <h3 className='accordion-header ' id='headingSix'>
              <button
                className='accordion-button collapsed fs-5 fw-semibold'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseSix'
                aria-expanded='true'
                aria-controls='collapseSix'
              >
                How can you pay off your mortgage faster?
              </button>
            </h3>
            <div
              id='collapseSix'
              className='accordion-collapse collapse'
              aria-labelledby='headingSix'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <p className='text-custom-five'>
                  Paying off your mortgage faster can lead to significant savings in interest, potentially saving you
                  thousands of dollars. However, it's important to note that methods for accelerating mortgage payments
                  will require larger monthly payments, although for a shorter duration. Remember to review your
                  mortgage agreement and consult with your lender to understand any prepayment penalties or specific
                  terms related to paying off your mortgage faster. With that said, here are some strategies to expedite
                  your mortgage payoff:
                </p>
                <p className='text-custom-five'>
                  <strong className='text-custom-two'>Accelerate your payment schedule:</strong> &nbsp; Instead of
                  making monthly payments, you can switch to a more frequent schedule, such as bi-weekly payments. This
                  strategy helps you pay off your mortgage faster and reduces the overall interest paid.
                </p>

                <p className='text-custom-five'>
                  <strong className='text-custom-two'>Make lump sum payments:</strong> &nbsp; If you come into a lump
                  sum amount, such as a tax refund, inheritance, or work bonus, applying it towards your mortgage can
                  reduce the outstanding balance and can shorten the loan term. Of course, this option depends on your
                  financial capability.
                </p>
                <p className='text-custom-five'>
                  <strong className='text-custom-two'>Increase your monthly mortgage payments:</strong> &nbsp; By
                  allocating a higher amount towards your mortgage every month, you can effectively reduce the time it
                  takes to fully pay off your mortgage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
