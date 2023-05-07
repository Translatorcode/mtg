import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  askingPrice: 0,
  downPaymentAmount: 0,
  downPaymentPercent: 0,
  mortgageRate: 0,
  amortizationPeriod: 0,
  paymentFrequency: 0,
  totalMortgageAmount: null,
  monthlyPayment: null,
  principalPaid: null,
  interestPaid: null,
  payoffdate: null,
};

export const mortgageSlice = createSlice({
  name: 'mortgageCalc',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    updateAskingPrice: (state, action) => {
      state.askingPrice = action.payload;
    },
    updateDownPaymentAmount: (state, action) => {
      const downPaymentAmount = action.payload;
      if (!isNaN(downPaymentAmount)) {
        state.downPaymentAmount = Math.round(Number(downPaymentAmount));
        state.downPaymentPercent = Math.round((downPaymentAmount / state.askingPrice) * 10000) / 100;
      }
    },

    updateDownPaymentPercent: (state, action) => {
      const downPaymentPercent = action.payload;
      if (!isNaN(downPaymentPercent)) {
        state.downPaymentPercent = action.payload;
        state.downPaymentAmount = Math.round((downPaymentPercent / 100) * state.askingPrice);
      }
    },

    updateMortgageRate: (state, action) => {
      state.mortgageRate = action.payload;
    },
    updateAmortizationPeriod: (state, action) => {
      state.amortizationPeriod = action.payload;
    },
    updatePaymentFrequency: (state, action) => {
      state.paymentFrequency = action.payload;
    },
    submit: (state, action) => {
      /////////////
      const askingPrice = parseFloat(state.askingPrice);
      const downPaymentAmount = parseFloat(state.downPaymentAmount);
      if (!isNaN(askingPrice) && !isNaN(downPaymentAmount)) {
        state.totalMortgageAmount = askingPrice - downPaymentAmount;
      }
      /////////////

      const actualRateValue = state.mortgageRate / 12 / 100;
      const interestFactor = actualRateValue + 1;
      const amortizationMonths = state.amortizationPeriod * 12;
      const power = Math.pow(interestFactor, amortizationMonths);

      const topForumla = actualRateValue * power;
      const bottomFormula = power - 1;

      const formulaDivide = topForumla / bottomFormula;
      console.log(topForumla, bottomFormula, formulaDivide);
      state.monthlyPayment = Number((state.totalMortgageAmount * formulaDivide).toFixed(4));
    },
  },
});

export const {
  setLoading,
  setError,
  updateAskingPrice,
  updateDownPaymentAmount,
  updateDownPaymentPercent,
  updateMortgageRate,
  updateAmortizationPeriod,
  updatePaymentFrequency,
  submit,
} = mortgageSlice.actions;

export default mortgageSlice.reducer;
export const mortgageSelector = (state) => state.mortgageCalc;
