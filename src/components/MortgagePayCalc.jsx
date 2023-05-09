import { UserData } from '../Data';
import { useState } from 'react';
import PieChart from './PieChart';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateAskingPrice,
  updateDownPaymentAmount,
  updateDownPaymentPercent,
  updateMortgageTerm,
  updateMortgageRate,
  updateAmortizationPeriod,
  updatePaymentFrequency,
  submit,
} from '../redux/slices/mortgageCalc';

const MortgagePayCalc = () => {
  const dispatch = useDispatch();

  const mortgage = useSelector((state) => state.mortgageCalc);
  const {
    askingPrice,
    downPaymentAmount,
    downPaymentPercent,
    mortgageRate,
    mortgageTerm,
    amortizationPeriod,
    paymentFrequency,
    totalMortgageAmount,
    principalPaid,
    interestPaid,
    totalPaid,
    remainingBalance,
  } = mortgage;

  const handleAskingPriceChange = (e) => {
    const newAskingPrice = Number(e.target.value);
    dispatch(updateAskingPrice(newAskingPrice));
    if (!isNaN(downPaymentAmount) && !isNaN(downPaymentPercent)) {
      dispatch(updateDownPaymentPercent(downPaymentPercent));
    }
  };

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        labels: 'Users Gained',
        data: UserData.map((data) => data.userGain),
        backgroundColor: ['#585b96', '#91a321'],
      },
    ],
  });

  const [isAskingPriceInvalid, setIsAskingPriceInvalid] = useState(false);
  const [isDownPaymentAmountInvalid, setIsDownPaymentAmountInvalid] = useState(false);

  const handleSubmit = () => {
    if (isNaN(askingPrice) || !askingPrice) {
      setIsAskingPriceInvalid(true);
      return;
    }
    if (isNaN(downPaymentAmount) || !downPaymentAmount) {
      setIsDownPaymentAmountInvalid(true);
      return;
    }
    setIsAskingPriceInvalid(false);
    setIsDownPaymentAmountInvalid(false);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} noValidate>
      <div className='container border rounded mt-5 mb-5'>
        <div className='row'>
          <div className='col-md-6 p-4'>
            <h1 className='fw-bold fs-2 text-primary-custom'>Mortgage Payment Calculator</h1>
            <p className='text-custom-five  '>
              Use our calculator to find a home that fits within your desired price range.
            </p>
          </div>
          <div className='col-md-6 p-4'>
            <p>Asking Price</p>
            <div>
              <div className='input-group mb-3'>
                <span className='input-group-text' id='basic-addon1'>
                  $
                </span>
                <input
                  type='number'
                  className={`form-control ${isAskingPriceInvalid ? 'is-invalid' : ''}`}
                  placeholder='Enter Amount'
                  aria-label='Asking Price'
                  aria-describedby='basic-addon1'
                  id='askingPrice'
                  value={askingPrice || ''}
                  onChange={handleAskingPriceChange}
                  min='0'
                  required
                />
                <div className='invalid-feedback'>Please enter a valid asking price.</div>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className='row pb-3 pt-3'>
          <div className='col-md-5'>
            <p className='text-custom-four fw-semibold'>Down Payment</p>
            <div className='input-group mb-3'>
              <span className='input-group-text'>$</span>
              <input
                type='number'
                className={`form-control ${isDownPaymentAmountInvalid ? 'is-invalid' : ''}`}
                placeholder='Enter amount'
                aria-label='down payment number'
                value={downPaymentAmount || ''}
                onChange={(e) => dispatch(updateDownPaymentAmount(Number(e.target.value)))}
                min='0'
                required
              />

              <input
                type='number'
                className='form-control'
                placeholder=' '
                aria-label='down payment percentage'
                value={downPaymentPercent || ''}
                onChange={(e) => dispatch(updateDownPaymentPercent(Number(e.target.value)))}
                required
              />
              <span className='input-group-text'>%</span>
              <div className='invalid-feedback'>Please enter a valid down payment amount.</div>
            </div>

            <div className='row'>
              <div className='col-md-6'>
                <p className='text-custom-four fw-semibold'>Mortgage rate</p>
                <div className='input-group mb-3'>
                  <input
                    type='number'
                    className='form-control'
                    placeholder='Enter amount'
                    aria-label='Mortgage rate'
                    value={mortgageRate || ''}
                    onChange={(e) => dispatch(updateMortgageRate(Number(e.target.value)))}
                    required
                  />
                  <span className='input-group-text'>%</span>
                  <div className='invalid-feedback'>Please enter a valid mortgage rate.</div>
                </div>
              </div>
              <div className='col-md-6'>
                <p className='text-custom-four fw-semibold'>Amortization period</p>
                <div className='input-group mb-3'>
                  <select
                    className='form-select'
                    id='inputGroupSelect01'
                    value={amortizationPeriod}
                    onChange={(e) => dispatch(updateAmortizationPeriod(Number(e.target.value)))}
                  >
                    <option value='1' defaultValue>
                      1 year
                    </option>
                    <option value='2'>2 years</option>
                    <option value='3'>3 years</option>
                    <option value='4'>4 years</option>
                    <option value='5'>5 years</option>
                    <option value='6'>6 years</option>
                    <option value='7'>7 years</option>
                    <option value='8'>8 years</option>
                    <option value='9'>9 years</option>
                    <option value='10'>10 years</option>
                    <option value='11'>11 years</option>
                    <option value='12'>12 years</option>
                    <option value='13'>13 years</option>
                    <option value='14'>14 years</option>
                    <option value='15'>15 years</option>
                    <option value='16'>16 years</option>
                    <option value='17'>17 years</option>
                    <option value='18'>18 years</option>
                    <option value='19'>19 years</option>
                    <option value='20'>20 years</option>
                    <option value='21'>21 years</option>
                    <option value='22'>22 years</option>
                    <option value='23'>23 years</option>
                    <option value='24'>24 years</option>
                    <option value='25'>25 years</option>
                    <option value='26'>26 years</option>
                    <option value='27'>27 years</option>
                    <option value='28'>28 years</option>
                    <option value='29'>29 years</option>
                    <option value='30'>30 years</option>
                  </select>
                </div>
              </div>
            </div>

            {/* <div className='row'>
              <p className='text-custom-four fw-semibold'>Frequency</p>
            </div> */}
            <div className='row'>
              <div className='col-md-6'>
                <p className='text-custom-four fw-semibold'>Frequency</p>
                <div className='input-group mb-3 select-container'>
                  <select
                    className='form-select'
                    id='inputGroupSelect01'
                    value={paymentFrequency}
                    onChange={(e) => dispatch(updatePaymentFrequency(Number(e.target.value)))}
                  >
                    <option value='1' defaultValue>
                      Monthly
                    </option>
                    <option value='2'>Bi-Weekly</option>
                    <option value='4'>Weekly</option>
                  </select>
                </div>
              </div>
              <div className='col-md-6'>
                <p className='text-custom-four fw-semibold'>Mortgage Term</p>
                <div className='input-group mb-3 select-container'>
                  <select
                    className='form-select'
                    id='inputGroupSelect01'
                    value={mortgageTerm}
                    onChange={(e) => dispatch(updateMortgageTerm(Number(e.target.value)))}
                  >
                    <option value='1' defaultValue>
                      1 Year
                    </option>
                    <option value='2'>2 Year</option>
                    <option value='3'>3 Year</option>
                    <option value='4'>4 Year</option>
                    <option value='5'>5 Year</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='row m-0 pt-2 pb-3 '>
              <button
                type='submit'
                className='btn btn-primary w-100 col-primary-custom'
                onClick={(e) => {
                  e.preventDefault(); // prevent default form submission
                  dispatch(submit());
                  handleSubmit();
                }}
              >
                Submit
              </button>
            </div>

            <div className='row text-center'>
              <div className='col'>
                <p className='text-custom-five m-0'>Total mortgage amount</p>
              </div>
              <div className='col'>
                <p className='fw-semibold m-0'>{totalMortgageAmount}</p>
              </div>
            </div>
            {/* <form onSubmit={(e) => e.preventDefault()}>
            <input type='text' />
            <button type='submit' className='btn btn-primary' onClick={() => console.log('Click')}>
              Submit
            </button>
          </form> */}
          </div>
          <div className='col-md-7'>
            {/* <div className='container  rounded pt-4 pb-4 text-center fw-semibold col-bg-light-blue h-100 d-flex align-items-center  justify-content-between flex-column'> */}
            <div className='container rounded pt-4 pb-4 col-bg-light-blue h-100 d-flex align-items-center flex-column '>
              <h2 className='fw-bold fs-5 text-primary-custom'>Mortgage Term Summary</h2>
              <p className='fw-light text-custom-five'>{mortgageTerm} year fixed (closed)</p>
              <div className='row w-100'>
                <div className='col-md-5'>
                  <table className='table table-borderless position-relative'>
                    <tbody>
                      <tr>
                        <td colSpan='2'>
                          <hr className='my-0' />
                        </td>
                      </tr>
                      <tr>
                        <td>+ Principal Paid</td>
                        <td className='fw-semibold'>{principalPaid}</td>
                      </tr>
                      <tr>
                        <td>+ Interest Paid</td>
                        <td className='fw-semibold'>{interestPaid}</td>
                      </tr>
                      <tr>
                        <td>= Total Paid</td>
                        <td className='fw-semibold'>{totalPaid}</td>
                      </tr>
                      <tr>
                        <td colSpan='2'>
                          <hr className='my-0' />
                        </td>
                      </tr>
                      {/* <hr className='m-0 position-absolute w-100' /> */}
                      <tr>
                        <td>Remaining balance</td>
                        <td className='fw-semibold'>{remainingBalance}</td>
                      </tr>
                      <tr>
                        <td colSpan='2'>
                          <hr className='my-0' />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='col-md-6'>
                  {/* <div className='container w-80'>
                    <PieChart chartData={userData} />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default MortgagePayCalc;
