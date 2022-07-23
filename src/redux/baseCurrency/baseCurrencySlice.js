import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  baseCurrency: ''
}

export const baseCurrencySlice = createSlice({
  name: 'baseCurrency',
  initialState,
  reducers: {
    setBaseCurrency: (state, action) => {
      state.baseCurrency = action.payload
    },
  },
})

export const { setBaseCurrency } = baseCurrencySlice.actions
export default baseCurrencySlice.reducer