import React from 'react';
import { Box } from '@mui/material';

import NavigationItem from '../components/NavigationItem';

const Navigation = () => {
  return (
    <Box 
      sx={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        columnGap: '10px'
      }}
    >
      <NavigationItem text="home" path="/" />
      <NavigationItem text="rates" path="/rates" />
    </Box>
  );
};

export default Navigation;