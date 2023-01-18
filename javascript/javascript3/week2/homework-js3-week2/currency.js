const BASE_URL = 'https://v6.exchangerate-api.com/';
const API_KEY = 'e14e5488a61a9199a37de533';

const amount = document.getElementsByClassName('amount')[0];
const fromCurrency = document.getElementsByClassName('convert-from')[0];
const toCurrency = document.getElementsByClassName('convert-to')[0];
const convertButton = document.getElementsByClassName('convertion-button')[0];
const changeCurrencyButton = document.getElementsByClassName('change-currency-button')[0];
const result = document.getElementsByClassName('converted-currency')[0];
const rateFor1 = document.getElementsByClassName('rate')[0];
const defaultConvertTo = 'DKK'
const defaultConvertFrom = 'EUR'


const getRates = async (currency) => {
  try {
    const response = await fetch(`${BASE_URL}/v6/${API_KEY}/latest/${currency}`);
    if (response.status !== 200) {
      return 'Something went wrong';
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.error(e);
  }
};

const convertCurrency = async () => {
  if (amount.value === '') {
    alert(`amount is empty`);
  } else {
    const convertFromInfo = await getRates(fromCurrency.value);
    const rate = convertFromInfo.conversion_rates[toCurrency.value]
    console.log(fromCurrency.value);
    console.log(rate);
    const total = (amount.value * rate).toFixed(3);
    result.innerHTML = `${amount.value} ${fromCurrency.value} = ${total} ${toCurrency.value}`;
    rateFor1.innerHTML = `1 ${convertFromInfo.base_code} = ${rate} ${toCurrency.value}`
  }
};

const createCurrencyOption = (currencyName) => {
  const option = document.createElement('option');
  option.value = currencyName;
  option.innerHTML = currencyName;
  return option;
};

const changeCurrency = () => {
  const from = fromCurrency.value
    fromCurrency.value = toCurrency.value
    toCurrency.value = from
}

changeCurrencyButton.onclick = changeCurrency;
convertButton.onclick = convertCurrency;

window.onload = async () => {
  try {
    const data = await getRates('EUR')
    console.log(data.rates);
    const currencyCodes = Object.keys(data.conversion_rates);
    console.log(currencyCodes);
    currencyCodes.forEach((currencyCode) => {
      toCurrency.appendChild(createCurrencyOption(currencyCode));
      fromCurrency.appendChild(createCurrencyOption(currencyCode));
    });
    toCurrency.value = defaultConvertTo
    fromCurrency.value = defaultConvertFrom
  } catch (error) {
    console.log(error.message);
  }
};
