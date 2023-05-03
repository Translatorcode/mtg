//initize our redux store
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mortgageCalc from './slices/mortgageCalc';

const reducer = combineReducers({
  mortgageCalc,
});

export default configureStore({
  reducer,
});
