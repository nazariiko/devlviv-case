import React from 'react';
import { Box } from '@mui/material';

import Navigation from '../layout/Navigation';
import BaseCurrencySelect from './BaseCurrencySelect';

const Header = () => {
  React.useEffect(() => {
    console.log('header render');
  })
  
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