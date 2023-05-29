import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const AmortizationSchedule = () => {
  const dispatch = useDispatch();

  const mortgage = useSelector((state) => state.mortgageCalc);
  const { amortizationChart } = mortgage;

  const currentYear = new Date().getFullYear();

  return (
    <div className='container bg-white shadow-sm mb-5'>
      <div class='border-top  mx-auto '></div>
      <div className='accordion accordion-flush' id='accordionFlushExample'>
        <div className='accordion-item'>
          <h2 className='accordion-header  pt-2 pb-2 ' id='flush-headingOne'>
            <button
              className='accordion-button collapsed fw-bold fs-5 '
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#flush-collapseOne'
              aria-expanded='false'
              aria-controls='flush-collapseOne'
            >
              Amortization Schedule
            </button>
          </h2>
          <div
            id='flush-collapseOne'
            className='accordion-collapse collapse'
            aria-labelledby='flush-headingOne'
            data-bs-parent='#accordionFlushExample'
          >
            <div className='accordion-body'>
              <table className='table table-striped'>
                <thead>
                  <tr className='bg-tertiary-custom'>
                    <th scope='col' className='text-custom-four text-white'>
                      Year
                    </th>
                    <th scope='col' className='text-custom-four text-white'>
                      Mortgage Payment
                    </th>
                    <th scope='col' className='text-custom-four text-white'>
                      Principal paid
                    </th>
                    <th scope='col' className='text-custom-four text-white'>
                      Interest paid
                    </th>
                    <th scope='col' className='text-custom-four text-white'>
                      Balance
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {amortizationChart.map((yearData, index) => (
                    <tr key={yearData.year}>
                      <td>{currentYear + index}</td>
                      <td>{yearData.paymentAmount}</td>
                      <td>{yearData.principal}</td>
                      <td>{yearData.interest}</td>
                      <td>{yearData.balanceRemaining < 0 ? 0 : yearData.balanceRemaining}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmortizationSchedule;
