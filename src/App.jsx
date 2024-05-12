// HEllo this me ans qazzafi


import { useEffect, useState } from 'react';
import { InputBox } from './components';
import currencyConverterinfo from './Hooks/currencyConverterinfo';
import './App.css';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('PKR');
  const [convertedRate, setConvertedRate] = useState(0);
  
  const currencyData = currencyConverterinfo(from.toUpperCase())
  const options = Object.keys(currencyData)
  const convert = () => {
    setConvertedRate(amount * currencyData[to]);
  };

  return (
    <>
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
        <h1 className="text-2xl font-semibold mb-4">Currency Converter</h1>
        <div>
          <img
            className="w-full"
            src="https://images.pexels.com/photos/19869391/pexels-photo-19869391/free-photo-of-empty-street-in-manhattan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>

        <div className="flex flex-col space-y-4">
          <InputBox
            label="from"
            amount={amount}
            selectCurrency={from}
            currencyOptions={options}
            oncurrencychange={(currency) => setFrom(currency)}
            onchangeAmount={(amount) => setAmount(amount)}
          />
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Swap
          </button>
          <InputBox
            label="To"
            amount={convertedRate}
            selectCurrency={to}
            currencyOptions={options}
            oncurrencychange={(currency) => setTo(currency)}
          />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            onClick={convert}
          >
            Convert
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

