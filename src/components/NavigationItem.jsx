import React from 'react';
import { Link } from "react-router-dom";
import { Typography } from '@mui/material';

const NavigationItem = ({ text, path }) => {
  return (
    <Link to={path}>
      <Typography
        variant="button"
        sx={{
          fontSize: 16,
        }}
      >
        {text}
      </Typography>
    </Link>
  );
};

export default NavigationItem;