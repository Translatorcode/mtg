import PieChart from './DoughnutChart';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const TermSummary = () => {
  const mortgage = useSelector((state) => state.mortgageCalc);
  const { mortgageTerm, principalPaid, interestPaid, totalPaid, remainingBalance } = mortgage;

  const formatNumberWithCommas = (number) => {
    if (number !== null && number !== undefined) {
      return number.toLocaleString();
    } else {
      return '-';
    }
  };

  return (
    <div className='container  pt-4 pb-4  h-100 d-flex align-items-center flex-column shadow-sm' id='term-summary'>
      <h3 className='fw-bold fs-5 text-custom-two'>Mortgage Term Summary</h3>
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
                <td className='fw-semibold text-custom-four'>${formatNumberWithCommas(principalPaid)}</td>
              </tr>
              <tr>
                <td className='fw-semibold'>+ Interest Paid</td>
                <td className='fw-semibold text-custom-four'>${formatNumberWithCommas(interestPaid)}</td>
              </tr>
              <tr>
                <td className='fw-semibold'>= Total Paid</td>
                <td className='fw-semibold text-custom-four'>${formatNumberWithCommas(totalPaid)}</td>
              </tr>
              <tr>
                <td colSpan='2'>
                  <hr className='my-0 custom-hr' />
                </td>
              </tr>
              <tr>
                <td className='fw-semibold'>Remaining balance</td>
                <td className='fw-semibold text-custom-four'>${formatNumberWithCommas(remainingBalance)}</td>
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
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default TermSummary;
