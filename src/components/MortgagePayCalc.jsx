import { UserData } from '../Data';
import { useState } from 'react';
import PieChart from './PieChart';

const MortgagePayCalc = () => {
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

  return (
    <form onSubmit={(e) => e.preventDefault()}>
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
                  type='text'
                  className='form-control'
                  placeholder='Username'
                  aria-label='Username'
                  aria-describedby='basic-addon1'
                />
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
                className='form-control'
                placeholder='Enter amount'
                aria-label='down payment number'
              />
              <input type='number' className='form-control' placeholder=' ' aria-label='down payment percentage' />
              <span class='input-group-text'>%</span>
            </div>

            <div className='row'>
              <div className='col-md-6'>
                <p className='text-custom-four fw-semibold'>Mortgage rate</p>
                <div className='input-group mb-3'>
                  <input
                    type='number'
                    className='form-control'
                    placeholder='Enter amount'
                    aria-label='down payment number'
                  />
                  <span className='input-group-text'>%</span>
                </div>
              </div>
              <div className='col-md-6'>
                <p className='text-custom-four fw-semibold'>Amortization period</p>
                <div className='input-group mb-3'>
                  <select class='form-select' id='inputGroupSelect01'>
                    <option selected>Choose...</option>
                    <option value='1'>1 year</option>
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
                  </select>
                </div>
              </div>
            </div>

            <div className='row'>
              <p className='text-custom-four fw-semibold'>Frequency</p>
            </div>
            <div className='row'>
              <div className='col-md-8'>
                <div className='input-group mb-3 select-container'>
                  <select class='form-select' id='inputGroupSelect01'>
                    <option selected>Choose...</option>
                    <option value='1'>Monthly</option>
                    <option value='2'>Bi-Weekly</option>
                    <option value='3'>Weekly</option>
                  </select>
                </div>
              </div>
              <div className='col-md-4'>
                <button type='submit' className='btn btn-primary w-100' onClick={() => console.log('Click')}>
                  Submit
                </button>
              </div>
            </div>
            {/* <form onSubmit={(e) => e.preventDefault()}>
            <input type='text' />
            <button type='submit' className='btn btn-primary' onClick={() => console.log('Click')}>
              Submit
            </button>
          </form> */}
          </div>
          <div className='col-md-2'>
            <div className='container  rounded pt-4 pb-4 text-center fw-semibold col-bg-light-blue h-100 d-flex align-items-center  justify-content-between flex-column'>
              <div className='col'>
                <p className=' mb-0 text-custom-five'>Mortgage Amount</p>
                <hr className='mt-1 mb-1 ' />
                <p>$376,900</p>
              </div>
              <div className='col'>
                <p className='mb-0 text-custom-five'>Total Interest</p>
                <hr className='mt-1 mb-1' />
                <p>$106,900</p>
              </div>
              <div className='col'>
                <p className='mb-0 text-custom-five'>Estimate Payoff Date</p>
                <hr className='mt-1 mb-1' />
                <p className='mb-0'>April 2053</p>
              </div>
            </div>
          </div>
          <div className='col-md-5'>
            <div className='container'>
              <PieChart chartData={userData} />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default MortgagePayCalc;
