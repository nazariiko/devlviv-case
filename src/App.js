import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

import { setBaseCurrency } from './redux/baseCurrency/baseCurrencySlice';
import Header from './layout/Header';
import './style.scss';
import { getUserCountryCurrency } from './api/exchangeApi';

const Home = lazy(() => import('./pages/Home'))
const ExchangeRates = lazy(() => import('./pages/ExchangeRates'))

const App = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    async function fetchUserCountry() {
      const userCountyCurrency = await getUserCountryCurrency()
      dispatch(setBaseCurrency(userCountyCurrency))
    }
    fetchUserCountry()
  }, [])

  return (
    <Router>
      <Container maxWidth="md">
        <Header />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Suspense fallback={<CircularProgress />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rates" element={<ExchangeRates />} />
            </Routes>
          </Suspense>
        </Box>
      </Container>
    </Router>
  )
}

export default App