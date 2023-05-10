import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  askingPrice: 0,
  downPaymentAmount: 0,
  downPaymentPercent: 0,
  mortgageRate: 5.59,
  amortizationPeriod: 25,
  paymentFrequency: 1,
  mortgageTerm: 3,
  totalMortgageAmount: null,
  monthlyPayment: null,
  principalPaid: null,
  interestPaid: null,
  totalPaid: null,
  remainingBalance: null,
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

    updateMortgageTerm: (state, action) => {
      state.mortgageTerm = action.payload;
    },
    submit: (state, action) => {
      /////////////
      const askingPrice = parseFloat(state.askingPrice);
      const downPaymentAmount = parseFloat(state.downPaymentAmount);
      const totalMortgageAmount =
        isNaN(askingPrice) || isNaN(downPaymentAmount) ? NaN : askingPrice - downPaymentAmount;
      state.totalMortgageAmount = totalMortgageAmount;

      /////////////
      const monthlyInterestRate = state.mortgageRate / 100 / 12;
      const interestFactor = monthlyInterestRate + 1;
      const amortizationMonths = state.amortizationPeriod * 12;
      const power = Math.pow(interestFactor, amortizationMonths);

      const monthlyPayment = Number(
        ((state.totalMortgageAmount * (monthlyInterestRate * power)) / (power - 1)).toFixed(4)
      );
      state.monthlyPayment = monthlyPayment;

      /////////////
      const totalPayments = state.mortgageTerm * 12;
      let balanceRemaining = state.totalMortgageAmount;

      let principalPaid = 0;
      let interestPaid = 0;

      for (let i = 1; i <= totalPayments; i++) {
        const monthlyInterest = balanceRemaining * monthlyInterestRate;
        interestPaid += monthlyInterest;
        const monthlyPrincipal = monthlyPayment - monthlyInterest;
        balanceRemaining -= monthlyPrincipal;
        principalPaid += monthlyPrincipal;
        if (i % amortizationMonths === 0) {
          balanceRemaining *= (1 + monthlyInterestRate) ** amortizationMonths;
        }
      }

      state.principalPaid = Number(principalPaid.toFixed().toLocaleString());
      state.interestPaid = Number(interestPaid.toFixed().toLocaleString());
      state.totalPaid = Number((principalPaid + interestPaid).toFixed().toLocaleString());
      state.remainingBalance = Number((totalMortgageAmount - principalPaid).toFixed().toLocaleString());
    },
  },
});

export const {
  setLoading,
  setError,
  updateAskingPrice,
  updateMortgageTerm,
  updateDownPaymentAmount,
  updateDownPaymentPercent,
  updateMortgageRate,
  updateAmortizationPeriod,
  updatePaymentFrequency,
  submit,
} = mortgageSlice.actions;

export default mortgageSlice.reducer;
export const mortgageSelector = (state) => state.mortgageCalc;
