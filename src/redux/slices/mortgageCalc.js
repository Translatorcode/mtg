import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  // error: null,
  askingPrice: 500000,
  downPaymentAmount: 100000,
  downPaymentPercent: 20,
  mortgageRate: 5.59,
  amortizationPeriod: 25,
  paymentFrequency: 1,
  mortgageTerm: 3,
  totalMortgageAmount: null,
  monthlyPayment: null,
  biweeklyPayment: null,
  weeklyPayment: null,
  principalPaid: null,
  interestPaid: null,
  totalPaid: null,
  remainingBalance: null,
  amortizationChart: [],
};

export const mortgageSlice = createSlice({
  name: 'mortgageCalc',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    // setError: (state, { payload }) => {
    //   state.error = payload;
    //   state.loading = false;
    // },
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
      if (state.askingPrice <= 0 || state.downPaymentPercent <= 4.9 || state.mortgageRate === 0) {
        return;
      }

      /*Loan Amount */
      const askingPrice = state.askingPrice;
      const downPaymentAmount = state.downPaymentAmount;
      const totalMortgageAmount = askingPrice - downPaymentAmount;
      state.totalMortgageAmount = totalMortgageAmount;

      /*Monthly Interest Rate */
      let monthlyInterestRate = state.mortgageRate / 100 / 12;
      const interestFactor = monthlyInterestRate + 1;
      const amortizationMonths = state.amortizationPeriod * 12;
      const power = Math.pow(interestFactor, amortizationMonths);

      /*Monthly/BiWeekly/Weekly Payment */
      const monthlyPayment = Number(
        ((state.totalMortgageAmount * (monthlyInterestRate * power)) / (power - 1)).toFixed()
      );
      state.monthlyPayment = monthlyPayment;
      const biweeklyPayment = Number(((state.monthlyPayment * 12) / 26).toFixed());
      state.biweeklyPayment = biweeklyPayment;
      const weeklyPayment = Number(((state.monthlyPayment * 12) / 52).toFixed());
      state.weeklyPayment = weeklyPayment;

      /////
      /*Principal Paid and Interest Paid after mortgage term  */
      const paymentsPerYear = state.paymentFrequency === 1 ? 12 : state.paymentFrequency === 2 ? 26 : 52;
      const totalPayments = state.mortgageTerm * paymentsPerYear;
      // const totalPayments = state.mortgageTerm * 12;
      let balanceRemaining = state.totalMortgageAmount;

      let principalPaid = 0;
      let interestPaid = 0;

      let interestRatebasedonPayment;
      if (state.paymentFrequency === 2) {
        interestRatebasedonPayment = (monthlyInterestRate * 12) / 26;
      } else if (state.paymentFrequency === 4) {
        interestRatebasedonPayment = (monthlyInterestRate * 12) / 52;
      } else {
        interestRatebasedonPayment = monthlyInterestRate;
      }

      for (let i = 1; i <= totalPayments; i++) {
        const monthlyInterest = balanceRemaining * interestRatebasedonPayment;

        interestPaid += monthlyInterest;

        const paymentAmount =
          state.paymentFrequency === 1
            ? monthlyPayment
            : state.paymentFrequency === 2
            ? biweeklyPayment
            : state.paymentFrequency === 4
            ? weeklyPayment
            : 0;

        const monthlyPrincipal = paymentAmount - monthlyInterest;

        balanceRemaining -= monthlyPrincipal;
        principalPaid += monthlyPrincipal;

        if (i % amortizationMonths === 0) {
          balanceRemaining *= (1 + monthlyInterestRate) ** amortizationMonths;
        }
      }
      ////SCHEDULE
      const amortizationChart = [];
      const totalPaymentsAM = state.amortizationPeriod * paymentsPerYear;
      let balanceRemainingAM = state.totalMortgageAmount;
      let remainingPayments = totalPaymentsAM;

      while (remainingPayments > 0) {
        const paymentsPerYear = state.paymentFrequency === 1 ? 12 : state.paymentFrequency === 2 ? 26 : 52;
        const currentYearPayments = Math.min(remainingPayments, paymentsPerYear);

        let principalYear = 0;
        let interestYear = 0;
        let paymentAmountYear = 0;

        for (let i = 0; i < currentYearPayments; i++) {
          const paymentAmount =
            state.paymentFrequency === 1
              ? monthlyPayment
              : state.paymentFrequency === 2
              ? biweeklyPayment
              : state.paymentFrequency === 4
              ? weeklyPayment
              : 0;

          const interestPerPayment = balanceRemainingAM * interestRatebasedonPayment;
          const principalPerPayment = paymentAmount - interestPerPayment;
          balanceRemainingAM -= principalPerPayment;

          principalYear += principalPerPayment;
          interestYear += interestPerPayment;
          paymentAmountYear += paymentAmount;
        }

        const payment = {
          year: amortizationChart.length + 1,
          principal: Number(principalYear.toFixed()),
          interest: Number(interestYear.toFixed()),
          paymentAmount: Number(paymentAmountYear.toFixed()),
          balanceRemaining: Number(balanceRemainingAM.toFixed()),
        };
        amortizationChart.push(payment);

        remainingPayments -= currentYearPayments;
      }

      state.amortizationChart = amortizationChart;
      state.principalPaid = Number(principalPaid.toFixed());
      state.interestPaid = Number(interestPaid.toFixed());
      state.totalPaid = Number((principalPaid + interestPaid).toFixed());
      state.remainingBalance = Number((totalMortgageAmount - principalPaid).toFixed());
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
