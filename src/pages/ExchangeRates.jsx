import React from 'react';
import { Box } from '@mui/material';

import RatesList from '../components/RatesList';

const ExchangeRates = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <RatesList />
    </Box>
  );
};

export default ExchangeRates;