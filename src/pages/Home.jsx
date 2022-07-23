import React from 'react';
import { Box } from '@mui/material';

import ConvertCurrency from '../components/ConvertCurrency';

const Home = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 300,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <ConvertCurrency />
    </Box>
  );
};

export default Home;