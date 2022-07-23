export const fetchExchangeRates = (baseCurrency) => {
  return new Promise((resolve, reject) => {
    let myHeaders = new Headers();
    myHeaders.append("apikey", "cMj2K0PqEDiFgvpd4XcQr4Rg3oaWGCoM");
  
    let requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
    fetch(`https://api.apilayer.com/exchangerates_data/latest?base=${baseCurrency}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      if (result.error) {
        reject(result.error)
      } else {
        const ratesList = Object.entries(result.rates).map(rate => {
          return {
            curr: rate[0],
            price: rate[1]
          }
        })
        resolve(ratesList)
      }
    })
  })
}

export const convertCurrency = (from, to, amount) => {
  return new Promise((resolve, reject) => {
    let myHeaders = new Headers();
    myHeaders.append("apikey", "cMj2K0PqEDiFgvpd4XcQr4Rg3oaWGCoM");
  
    let requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      if (result.error) {
        reject(result.error)
      } else {
        resolve(result.result)
      }
    })
  })
}


export const getUserCountryCurrency = () => {
  return new Promise(async (resolve) => {
    if (!window.navigator.geolocation) {
      resolve(null)
    }
    window.navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=7fd2548b107f4e6f92a48d5efe4346b8&language=uk`)
        .then(response => response.json())
        .then((results) => {
          const location = results.results[0].formatted
          const country = location.split(',').pop().trim()
          const countryCurrency = listCurrencies.find(listItem => listItem.country == country).currency
          resolve(countryCurrency)
        })
        .catch((_) => resolve(null))
    })
  })
}

let listCurrencies = [
  {
    country: 'Україна',
    currency: 'UAH'
  },
  {
    country: 'Польща',
    currency: 'PLN'
  },
  {
    country: 'Австрія',
    currency: 'EUR'
  },
  {
    country: 'Чехія',
    currency: 'CZK'
  },
  {
    country: 'Німеччина',
    currency: 'EUR'
  },
  {
    country: 'Данія',
    currency: 'DKK'
  },
  {
    country: 'Угорщина',
    currency: 'HUF'
  },
  {
    country: 'США',
    currency: 'USD'
  },
]