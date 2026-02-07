import { combineReducers } from '@reduxjs/toolkit';
import authSlice from '../slices/authSlice';
import creditSlice from '../slices/creditSlice';

const rootReducer = combineReducers({
  userData: authSlice,
  creditData: creditSlice,
});

export default rootReducer;
