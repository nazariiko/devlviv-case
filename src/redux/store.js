import { configureStore } from '@reduxjs/toolkit'

import baseCurrencyReducer from './baseCurrency/baseCurrencySlice';

export const store = configureStore({
  reducer: {
    baseCurrency: baseCurrencyReducer,
  },
})