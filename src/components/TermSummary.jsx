import PieChart from './DoughnutChart';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const TermSummary = () => {
  const dispatch = useDispatch();

  const mortgage = useSelector((state) => state.mortgageCalc);
  const { mortgageTerm, principalPaid, interestPaid, totalPaid, remainingBalance } = mortgage;

  return (
    <div className='container  pt-4 pb-4  h-100 d-flex align-items-center flex-column shadow-sm'>
      <h2 className='fw-bold fs-5 text-custom-two'>Mortgage Term Summary</h2>
      <p className='fw-light text-custom-five'>{remainingBalance ? `${mortgageTerm} year fixed (closed)` : null}</p>
      <div className='row w-100'>
        <div className='col-md-6 col-md-12 col-lg-6  d-flex flex-column justify-content-center'>
          <table className='table table-borderless position-relative '>
            <tbody>
              <tr>
                <td colSpan='2'>
                  <hr className='my-0 custom-hr' />
                </td>
              </tr>
              <tr>
                <td className='fw-semibold'>&nbsp;Principal Paid</td>
                <td className='fw-semibold text-custom-four'>${principalPaid ?? '-'}</td>
              </tr>
              <tr>
                <td className='fw-semibold'>+ Interest Paid</td>
                <td className='fw-semibold text-custom-four'>${interestPaid ?? '-'}</td>
              </tr>
              <tr>
                <td className='fw-semibold'>= Total Paid</td>
                <td className='fw-semibold text-custom-four'>${totalPaid ?? '-'}</td>
              </tr>
              <tr>
                <td colSpan='2'>
                  <hr className='my-0 custom-hr' />
                </td>
              </tr>
              <tr>
                <td className='fw-semibold'>Remaining balance</td>
                <td className='fw-semibold text-custom-four'>${remainingBalance ?? '-'}</td>
              </tr>
              <tr>
                <td colSpan='2'>
                  <hr className='my-0 custom-hr' />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='col-md-6 d-md-none d-lg-block d-sm-block'>
          {remainingBalance !== null ? (
            <PieChart />
          ) : (
            <div className='bg-white p-4 rounded'>
              <h3 className='fs-5 fw-bold text-custom-four'>Important</h3>
              <p className='fs-6 text-custom-five'>
                The provided calculations are approximate and are intended for information purposes only. It should be
                noted that the actual payment amounts may vary and will be determined by your lender at the time of your
                loan application.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TermSummary;
