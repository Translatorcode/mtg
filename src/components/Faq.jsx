const Faq = () => {
  return (
    <div className='container'>
      <p className='fw-bold fs-2'>Frequently asked questions</p>
      <div class='accordion' id='accordionExample'>
        <div class='border-top border-bottom'>
          <h2 class='accordion-header ' id='headingOne'>
            <button
              class='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseOne'
              aria-expanded='true'
              aria-controls='collapseOne'
            >
              What is a mortgage payment?
            </button>
          </h2>
          <div
            id='collapseOne'
            class='accordion-collapse collapse'
            aria-labelledby='headingOne'
            data-bs-parent='#accordionExample'
          >
            <div class='accordion-body'>
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
        <div class='border-bottom'>
          <h2 class='accordion-header' id='headingTwo'>
            <button
              class='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseTwo'
              aria-expanded='false'
              aria-controls='collapseTwo'
            >
              What is the mortgage principal?
            </button>
          </h2>
          <div
            id='collapseTwo'
            class='accordion-collapse collapse'
            aria-labelledby='headingTwo'
            data-bs-parent='#accordionExample'
          >
            <div class='accordion-body'>
              The mortgage principal refers to the initial amount of money borrowed from a lender to purchase a property
              . It represents the total loan amount that needs to be repaid over a specific period, typically through
              regular mortgage payments. Let's say you want to purchase a home for $300,000. You have saved up $50,000
              for a down payment, so you need to borrow $250,000 from a lender. The $250,000 is the mortgage principal -
              the initial amount of money borrowed to purchase the property.
            </div>
          </div>
        </div>
        <div class='border-bottom'>
          <h2 class='accordion-header' id='headingThree'>
            <button
              class='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseThree'
              aria-expanded='false'
              aria-controls='collapseThree'
            >
              How do I calculate my mortgage payment?
            </button>
          </h2>
          <div
            id='collapseThree'
            class='accordion-collapse collapse'
            aria-labelledby='headingThree'
            data-bs-parent='#accordionExample'
          >
            <div class='accordion-body'>
              Calculating your mortgage payment is an important step in understanding the financial commitment involved
              in homeownership. The <strong>MortgageLytics mortgage calculator</strong> can help you get an idea of how
              much your mortgage payment could be by using some key variables:
              <p className='mt-3'>
                <span className='text-decoration-underline'> Total principal amount: </span>&nbsp; This is the purchase
                price minus your down payment
              </p>
              <p className='mt-3'>
                <span className='text-decoration-underline'> Term and Interest rate:</span>&nbsp; Choose a term and
                interest rate that best suits your needs and your timeline.
              </p>
              <p className='mt-3'>
                <span className='text-decoration-underline'> Amortization period:</span>&nbsp; Decide on the length of
                time you will take to repay the mortgage in full. Payment
              </p>
              <p className='mt-3'>
                <span className='text-decoration-underline'> Payment Frequency:</span>&nbsp; Select how often you would
                like to make payments on your mortgage.
              </p>
            </div>
          </div>
        </div>
        <div class='border-bottom'>
          <h2 class='accordion-header ' id='headingFour'>
            <button
              class='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseFour'
              aria-expanded='true'
              aria-controls='collapseFour'
            >
              What&rsquo;s the difference between a fixed rate and a variable rate mortgage?
            </button>
          </h2>
          <div
            id='collapseFour'
            class='accordion-collapse collapse'
            aria-labelledby='headingFour'
            data-bs-parent='#accordionExample'
          >
            <div class='accordion-body'>
              <p>
                <strong> Fixed Rate Mortgage:</strong> &nbsp;A fixed-rate mortgage is a type of home loan where the
                interest rate remains constant throughout the entire loan term. This means that your monthly mortgage
                payment remains the same over the life of the loan. With a fixed rate mortgage, you have the advantage
                of knowing exactly how much your monthly payment will be, providing stability and predictability for
                your budgeting. It is an ideal option if you prefer steady payments and want to protect yourself from
                potential interest rate fluctuations in the market.
              </p>
              <p>
                <strong> Variable Rate Mortgage:</strong> &nbsp;The interest rate on a variable-rate mortgage is subject
                to market conditions and may vary over the duration of your mortgage. With a variable-rate mortgage,
                your interest rate is tied to the lender's prime rate, which in turn is influenced by the Bank of Canada
                rate. If the lender's prime rate changes, your mortgage payment could either increase or decrease
                depending on the rate adjustment. In some cases, your payment amount may remain constant, but the
                allocation between principal and interest portions of the payment may be adjusted to accommodate changes
                in the lender's prime rate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
