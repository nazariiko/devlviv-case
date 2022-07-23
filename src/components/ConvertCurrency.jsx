import React from 'react';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import { convertCurrency } from '../api/exchangeApi';


const ConvertCurrency = () => {
  const [inputValue, setInputValue] = React.useState('')
  const [convertingResult, setConvertingResult] = React.useState(null)
  const [loadingState, setLoadingState] = React.useState(null)

  const getConvertedResult = async () => {
    setLoadingState('loading')
    const splittedInput = inputValue.split(' ')
    const from = splittedInput[1]
    const to = splittedInput[3]
    const amount = +splittedInput[0]
    convertCurrency(from, to, amount)
    .then(result => {
      const convertingResultValue = `${amount} ${from} = ${result} ${to}`
      setConvertingResult(convertingResultValue)
      setLoadingState('success')
    })
    .catch(() => {
      setLoadingState('error')
      setConvertingResult(null)
    })
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        columnGap: '30px',
        marginTop: '50px'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          columnGap: '5px',
          marginBottom: '20px',
        }}
      >
        <TextField 
          id="outlined-basic" 
          label="15 USD in UAH" 
          variant="outlined"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)} 
        />
        <IconButton color="primary" aria-label="add to shopping cart" onClick={getConvertedResult} >
          <KeyboardArrowRightIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%'
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
          loadingState == 'success' && convertingResult ? <Typography align='center'>{convertingResult}</Typography> : ''
        }
      </Box>
    </Box>
  );
};

export default ConvertCurrency;