import React from 'react';
import { Box } from '@mui/material';

import Navigation from './Navigation';
import BaseCurrencySelect from '../components/BaseCurrencySelect';

const Header = () => {
  
  return (
    <Box 
      sx={{
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        columnGap: '40px'
      }}
    >
      <Navigation />
      <BaseCurrencySelect />
    </Box>
  );
};

export default Header;