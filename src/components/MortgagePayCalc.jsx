import { useState } from 'react';
import PieChart from './DoughnutChart';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TermSummary from './TermSummary';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { motion } from 'framer-motion';

////////////////
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

// ToolTip SetUp
const renderTooltip = (content) => <Tooltip id={`tooltip-${content}`}>{content}</Tooltip>;

const TooltipIcon = ({ content, placement }) => {
  return (
    <OverlayTrigger placement={placement} overlay={renderTooltip(content)}>
      <i className='bi bi-question-circle-fill  ' data-bs-toggle='tooltip' overlay={renderTooltip(content)}></i>
    </OverlayTrigger>
  );
};

//Main Component
const MortgagePayCalc = () => {
  const dispatch = useDispatch();

  const mortgage = useSelector((state) => state.mortgageCalc);
  const {
    loading,
    error,
    askingPrice,
    downPaymentAmount,
    downPaymentPercent,
    mortgageRate,
    mortgageTerm,
    amortizationPeriod,
    paymentFrequency,
    totalMortgageAmount,
    monthlyPayment,
    biweeklyPayment,
    weeklyPayment,
  } = mortgage;

  const [isAskingPriceInvalid, setIsAskingPriceInvalid] = useState(false);
  const [isDownPaymentAmountInvalid, setIsDownPaymentAmountInvalid] = useState(false);
  const [isMortgageRateInvaild, setIsMortgageRateInvaild] = useState(false);

  const handleAskingPriceChange = (e) => {
    //get target value
    const newAskingPrice = Number(e.target.value);
    //set target value as the new asking price
    dispatch(updateAskingPrice(newAskingPrice));
    //if downPayment amount and percent are numberes
    if (!isNaN(downPaymentAmount) && !isNaN(downPaymentPercent)) {
      //changes the downPaymentAmount to reflect the downPaymentPercent
      dispatch(updateDownPaymentPercent(downPaymentPercent));
    }

    // Trigger validation
    if (isNaN(newAskingPrice) || !newAskingPrice || newAskingPrice <= 0) {
      setIsAskingPriceInvalid(true);
    } else {
      setIsAskingPriceInvalid(false);
    }
  };

  useEffect(() => {
    if (mortgageRate === 0) {
      setIsMortgageRateInvaild(true);
    } else {
      setIsMortgageRateInvaild(false);
    }

    if (isNaN(downPaymentAmount) || downPaymentPercent <= 4.9) {
      setIsDownPaymentAmountInvalid(true);
    } else {
      setIsDownPaymentAmountInvalid(false);
    }
    dispatch(submit());
  }, [
    askingPrice,
    downPaymentAmount,
    downPaymentPercent,
    mortgageRate,
    mortgageTerm,
    amortizationPeriod,
    paymentFrequency,
    dispatch,
  ]);

  return (
    <form onSubmit={(e) => e.preventDefault()} noValidate id='section1'>
      <div className='container bg-white shadow-sm p-3 mb-5 mt-5 '>
        <div className='row mb-0 pb-0'>
          <div className='col-lg-6 p-4'>
            <h2 className='fw-bold fs-2 text-custom-four'>Mortgage Payment Calculator</h2>
            <p className='text-custom-two mb-0 '>
              Use our calculator to find a home that fits within your desired price range.
            </p>
          </div>
          <div className='col-lg-6 p-4'>
            <p className='text-custom-one  fw-semibold mb-1'>
              Asking Price &nbsp;
              <TooltipIcon content='The list price of the home you&rsquo;re interested in buying.' placement='right' />
            </p>
            <div>
              <div className='input-group mb-0'>
                <span className='input-group-text rounded-0' id='basic-addon1'>
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
          <hr className='mb-0' />
        </div>
        <motion.div
          initial={{ opacity: 0, y: -100 }} // Animation for the first child (text)
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className='row p-3 '>
            <div className='col-lg-6 d-flex flex-column justify-content-center justify-content-between'>
              <div className='row mt-2'>
                <p className='text-custom-one fw-semibold mb-1'>
                  Down Payment &nbsp;
                  <TooltipIcon
                    content='The upfront payment made towards the purchase of your house. Your down payment will vary based on the price of the home.'
                    placement='right'
                  />
                </p>

                <div className='input-group mb-3'>
                  <span className='input-group-text rounded-0'>$</span>
                  <input
                    type='number'
                    className={`form-control ${isDownPaymentAmountInvalid ? 'is-invalid' : ''} `}
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
                  <div className='invalid-feedback'>Your down payment must be at least 5% of your home price.</div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <p className='text-custom-one fw-semibold mb-1'>
                    Mortgage rate &nbsp;
                    <TooltipIcon
                      content='The annual cost of borrowing money. It’s a percent of the total amount you borrow to buy a home for the entire amortization.'
                      placement='right'
                    />
                  </p>
                  <div className='input-group mb-3 '>
                    <input
                      type='number'
                      className={`form-control ${isMortgageRateInvaild ? 'is-invalid' : ''} rounded-0`}
                      rounded-0
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
                  <p className='text-custom-one fw-semibold mb-1'>
                    Amortization period &nbsp;
                    <TooltipIcon
                      content='The duration of time it takes to fully repay the mortgage through regular payments. Typically, amortization periods last about 25 to 30 years.'
                      placement='right'
                    />
                  </p>
                  <div className='input-group mb-3'>
                    <select
                      className='form-select rounded-0'
                      id='inputGroupSelect01'
                      value={amortizationPeriod}
                      onChange={(e) => dispatch(updateAmortizationPeriod(Number(e.target.value)))}
                    >
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
              <div className='row'>
                <div className='col-md-6'>
                  <p className='text-custom-one fw-semibold mb-1'>
                    Payment Frequency &nbsp;
                    <TooltipIcon
                      content='How frequently will you&rsquo;ll be making your regular mortgage payments'
                      placement='right'
                    />
                  </p>
                  <div className='input-group mb-3 select-container'>
                    <select
                      className='form-select rounded-0'
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
                  <p className='text-custom-one fw-semibold mb-1'>
                    Mortgage Term &nbsp;
                    <TooltipIcon
                      content='The length of time you&rsquo;ll be committed to your current mortgage rate before you need to renew. '
                      placement='right'
                    />
                  </p>
                  <div className='input-group mb-3 select-container'>
                    <select
                      className='form-select rounded-0'
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
              <div className='row-md-12 p-3 text-center bg-light  d-inline-block d-md-inline-flex '>
                <div className='col-md-6'>
                  <p className='text-custom-five m-0 text-start'>Total mortgage amount: </p>
                  <p className='fw-semibold m-0 text-start'>${totalMortgageAmount ?? '-'}</p>
                </div>
                <div className='col-md-6'>
                  <p className='text-custom-five m-0 text-start'>
                    {paymentFrequency === 1
                      ? 'Monthly Payment'
                      : paymentFrequency === 2
                      ? 'Bi-Weekly Payment'
                      : paymentFrequency === 4
                      ? 'Weekly Payment'
                      : ''}
                  </p>
                  <p className='fw-semibold m-0 text-start'>
                    {paymentFrequency === 1
                      ? `$${monthlyPayment ?? '-'}`
                      : paymentFrequency === 2
                      ? `$${biweeklyPayment ?? '-'}`
                      : paymentFrequency === 4
                      ? `$${weeklyPayment ?? '-'}`
                      : '-'}
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-6  pt-0 pt-3 pt-lg-0 '>
              <TermSummary />
            </div>
          </div>
        </motion.div>
      </div>
    </form>
  );
};

export default MortgagePayCalc;
