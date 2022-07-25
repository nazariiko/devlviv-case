import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import RatesListItem from '../components/RatesListItem';

import { fetchExchangeRates } from '../api/exchangeApi';
import { useAsync } from '../hooks/useAsync';

const RatesList = () => {
  const baseCurrency = useSelector((state) => state.baseCurrency.baseCurrency)
  const { status, data, error } = useAsync(fetchExchangeRates, [baseCurrency], [baseCurrency])

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
      {
        status == 'pending' &&
        <CircularProgress />
      }
      {
        status == 'error' &&
        <Typography align='center'>api error :( {error}</Typography>
      }
      {
        (status == 'success' && data.length) &&
        <Grid container spacing={1} sx={{ paddingBottom: '20px' }}>
          {
            data.map(rate => <RatesListItem baseCurrency={baseCurrency} curr={rate.curr} price={rate.price} key={rate.curr} />)
          }
        </Grid>
      }
    </Box>
  );
};

export default RatesList;