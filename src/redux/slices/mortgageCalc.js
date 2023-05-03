import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  error: null,
  askingPrice: null,
  downPaymentAmount: 0,
  downPaymentPrecent: 0,
  mortgageRate: 2.5,
  amortizationPeriod: 25,
  paymentFrequency: 12,
  mortgageAmount: null,
  totalinterest: null,
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
      state.downPaymentAmount = action.payload;
      state.downPaymentPercent = (action.payload / state.askingPrice) * 100;
    },

    updateDownPaymentPercent: (state, action) => {
      state.downPaymentPrecent = action.payload;
      state.downPaymentAmount = (action.payload / 100) * state.askingPrice;
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
} = mortgageSlice.actions;

export default mortgageSlice.reducer;
export const mortgageSelector = (state) => state.mortgageCalc;
