'use client';

import { useState } from 'react';
import { currencyRates } from '@/data/currencyRates';

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [convertedAmount, setConvertedAmount] = useState(null);

  const currencyOptions = Object.keys(currencyRates).map(code => ({
    value: code,
    label: `${code} - ${currencyRates[code].name}`
  }));

  const convertCurrency = () => {
    if (!currencyRates[fromCurrency] || !currencyRates[fromCurrency].rates[toCurrency]) {
      alert("Conversion rate not available");
      return;
    }

    const rate = currencyRates[fromCurrency].rates[toCurrency];
    setConvertedAmount((amount * rate).toFixed(2));
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-white">Currency Converter</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-gray-300 mb-2">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg"
            min="0"
            step="0.01"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-300 mb-2">From</label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg"
            >
              {currencyOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">To</label>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg"
            >
              {currencyOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={convertCurrency}
            className="bg-green-600  hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition  duration-300"
        >
          Convert
        </button>

        {convertedAmount !== null && (
          <div className="mt-4 p-4 bg-gray-700 rounded-lg">
            <p className="text-gray-300">
              {amount} {fromCurrency} = 
            </p>
            <p className="text-2xl font-bold text-white">
              {convertedAmount} {toCurrency}
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Rate: 1 {fromCurrency} = {currencyRates[fromCurrency].rates[toCurrency]} {toCurrency}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}