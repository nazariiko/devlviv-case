import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const RatesListItem = ({ baseCurrency, curr , price }) => {
  let formattedPrice = price > 1 ? price.toFixed(2) : price.toPrecision(2)

  return (
    <Grid item xs={3}>
      <Typography align='center'>1 {baseCurrency} = {formattedPrice} {curr}</Typography>
    </Grid>
  );
};

export default RatesListItem;