import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TermSummary from './TermSummary';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { motion } from 'framer-motion';

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

  //reformat state
  const formatNumberWithCommas = (number) => {
    if (number !== null && number !== undefined) {
      return number.toLocaleString();
    } else {
      return '-';
    }
  };

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
            <label htmlFor='asking-price' className='text-custom-one fw-semibold mb-1'>
              Asking Price &nbsp;
              <TooltipIcon content='The list price of the home you&rsquo;re interested in buying.' placement='right' />
            </label>
            <div>
              <div className='input-group mb-0'>
                <span className='input-group-text rounded-0' id='asking-price-addon'>
                  $
                </span>
                <input
                  type='number'
                  className={`form-control ${isAskingPriceInvalid ? 'is-invalid' : ''}`}
                  placeholder='Enter Amount'
                  aria-label='Enter asking price'
                  aria-describedby='asking-price-addon'
                  id='asking-price'
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
        <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className='row p-3 '>
            <div className='col-lg-6 d-flex flex-column justify-content-between'>
              <div className='row mt-2'>
                <label htmlFor='down-payment' className='text-custom-one fw-semibold mb-1'>
                  Down Payment &nbsp;
                  <TooltipIcon
                    content='The upfront payment made towards the purchase of your house. Your down payment will vary based on the price of the home.'
                    placement='right'
                  />
                </label>

                <div className='input-group mb-3'>
                  <span className={true ? 'input-group-text rounded-0' : ''} id='down-paymentamount-addon'>
                    $
                  </span>
                  <input
                    type='number'
                    className={`form-control ${isDownPaymentAmountInvalid ? 'is-invalid' : ''} `}
                    placeholder='Enter amount'
                    aria-label='Enter down payment number'
                    aria-describedby='down-paymentamount-addon'
                    id='down-payment'
                    value={downPaymentAmount || ''}
                    onChange={(e) => dispatch(updateDownPaymentAmount(Number(e.target.value)))}
                    min='0'
                    required
                  />

                  <input
                    type='number'
                    className='form-control'
                    placeholder=' '
                    aria-label='Enter down payment percentage'
                    aria-describedby='down-paymentpercent-addon'
                    value={downPaymentPercent || ''}
                    onChange={(e) => dispatch(updateDownPaymentPercent(Number(e.target.value)))}
                    required
                  />
                  <span className='input-group-text' id='down-paymentpercent-addon'>
                    %
                  </span>
                  <div className='invalid-feedback'>Your down payment must be at least 5% of your home price.</div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <label htmlFor='mortgage-rate' className='text-custom-one fw-semibold mb-1'>
                    Mortgage rate &nbsp;
                    <TooltipIcon
                      content='The annual cost of borrowing money. It&rsquo;s a percent of the total amount you borrow to buy a home for the entire amortization.'
                      placement='right'
                    />
                  </label>

                  <div className='input-group mb-3 '>
                    <input
                      type='number'
                      className={`form-control ${isMortgageRateInvaild ? 'is-invalid' : ''} rounded-0`}
                      placeholder='Enter amount'
                      aria-label='Enter mortgage rate'
                      aria-describedby='mortgage-rate-addon'
                      value={mortgageRate || ''}
                      onChange={(e) => dispatch(updateMortgageRate(Number(e.target.value)))}
                      required
                    />
                    <span className='input-group-text' id='mortgage-rate-addon'>
                      %
                    </span>
                    <div className='invalid-feedback'>Please enter a valid mortgage rate.</div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <label htmlFor='amortization-period' className='text-custom-one fw-semibold mb-1'>
                    Amortization period &nbsp;
                    <TooltipIcon
                      content='The duration of time it takes to fully repay the mortgage through regular payments. Typically, amortization periods last about 25 to 30 years.'
                      placement='right'
                    />
                  </label>

                  <div className='input-group mb-3'>
                    <select
                      className='form-select rounded-0'
                      id='amortization-period'
                      aria-label='Select amortization period'
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
                  <label htmlFor='frequency-period' className='text-custom-one fw-semibold mb-1'>
                    Payment Frequency &nbsp;
                    <TooltipIcon
                      content='How frequently will you&rsquo;ll be making your regular mortgage payments'
                      placement='right'
                    />
                  </label>

                  <div className='input-group mb-3 select-container'>
                    <select
                      className='form-select rounded-0'
                      id='frequency-period'
                      aria-label='Select payment frequency period'
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
                  <label htmlFor='mortgage-term' className='text-custom-one fw-semibold mb-1'>
                    Mortgage Term &nbsp;
                    <TooltipIcon
                      content='The length of time you&rsquo;ll be committed to your current mortgage rate before you need to renew. '
                      placement='right'
                    />
                  </label>

                  <div className='input-group mb-3 select-container'>
                    <select
                      className='form-select rounded-0'
                      id='mortgage-term'
                      aria-label='Select mortgage term'
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
              <div className='row-md-12 p-3 text-center bg-light  d-inline-block d-md-inline-flex'>
                <div className='col-md-6 mb-2 mb-md-0'>
                  <p className='text-custom-five m-0  text-center text-md-start'>Total mortgage amount: </p>
                  <p className='fw-semibold m-0 t mx-auto text-center text-md-start'>
                    ${formatNumberWithCommas(totalMortgageAmount)}
                  </p>
                </div>
                <div className='col-md-6'>
                  <p className='text-custom-five m-0 text-center text-md-start'>
                    {paymentFrequency === 1
                      ? 'Monthly Payment'
                      : paymentFrequency === 2
                      ? 'Bi-Weekly Payment'
                      : paymentFrequency === 4
                      ? 'Weekly Payment'
                      : ''}
                  </p>
                  <p className='fw-semibold m-0 text-center text-md-start' id='mortgage-amount '>
                    {paymentFrequency === 1
                      ? `$${formatNumberWithCommas(monthlyPayment)}`
                      : paymentFrequency === 2
                      ? `$${formatNumberWithCommas(biweeklyPayment)}`
                      : paymentFrequency === 4
                      ? `$${formatNumberWithCommas(weeklyPayment)}`
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
