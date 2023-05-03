import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  askingPrice: '',
  downPaymentAmount: '',
  downPaymentPercent: '',
  mortgageRate: '',
  amortizationPeriod: '',
  paymentFrequency: '',
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
