import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import RatesListItem from '../components/RatesListItem';

import { fetchExchangeRates } from '../api/exchangeApi';

const RatesList = () => {
  const baseCurrency = useSelector((state) => state.baseCurrency.baseCurrency)
  const [rates, setRates] = React.useState([])
  const [loadingState, setLoadingState] = React.useState(null)

  React.useEffect(() => {
    if (!baseCurrency) return
    setLoadingState('loading')
    fetchExchangeRates(baseCurrency)
    .then(result => {
      setRates(result)
      setLoadingState('success')
    })
    .catch(() => {
      setLoadingState('error')
      setRates([])
    })
  }, [baseCurrency])

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
        loadingState == 'loading' &&
        <CircularProgress />
      }
      {
        loadingState == 'error' &&
        <Typography align='center'>api error :(</Typography>
      }
      {
        (loadingState == 'success' && rates.length) &&
        <Grid container spacing={1}>
          {
            rates.map(rate => <RatesListItem baseCurrency={baseCurrency} curr={rate.curr} price={rate.price} key={rate.curr} />)
          }
        </Grid>
      }
    </Box>
  );
};

export default RatesList;