import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { setBaseCurrency } from '../redux/baseCurrency/baseCurrencySlice';


const BaseCurrencySelect = () => {
  const baseCurrency = useSelector((state) => state.baseCurrency.baseCurrency)
  const dispatch = useDispatch()

  const handleChangeBaseCurrency = (event) => {
    const newBaseCurrency = event.target.value
    dispatch(setBaseCurrency(newBaseCurrency))
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="base-curr-select-label">Currency</InputLabel>
        <Select
          labelId="base-curr-select-label"
          id="base-curr-select"
          value={baseCurrency}
          label="Currency"
          onChange={handleChangeBaseCurrency}
        >
          {
            ['UAH', 'PLN', 'EUR', 'CZK', 'DKK', 'USD', 'HUF'].map(currency => {
              return <MenuItem value={currency} key={currency}>{currency}</MenuItem>
            })
          }
        </Select>
      </FormControl>
    </Box>
  );
};

export default BaseCurrencySelect;