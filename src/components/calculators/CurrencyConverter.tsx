import React, { useState, useEffect } from 'react';
import { convertCurrency, exchangeRates } from '../../utils/calculations';

const CurrencyConverter: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [fromCurrency, setFromCurrency] = useState<string>('');
  const [toCurrency, setToCurrency] = useState<string>('');
  const [result, setResult] = useState<number>(0);

  const currencies = Object.keys(exchangeRates);

  useEffect(() => {
    if (amount && fromCurrency && toCurrency) {
      const converted = convertCurrency(parseFloat(amount), fromCurrency, toCurrency);
      setResult(converted);
    }
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Currency Converter</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                From Currency
              </label>
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {currencies.map(currency => (
                  <option key={currency} value={currency}>{currency}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                To Currency
              </label>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {currencies.map(currency => (
                  <option key={currency} value={currency}>{currency}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Conversion Result</h3>
            <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
              <p className="text-lg text-gray-600 mb-2">
                {parseFloat(amount).toLocaleString()} {fromCurrency}
              </p>
              <p className="text-sm text-gray-400 mb-2">=</p>
              <p className="text-3xl font-bold text-blue-600">
                {result.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {toCurrency}
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Exchange Rate: 1 {fromCurrency} = {(exchangeRates[toCurrency] / exchangeRates[fromCurrency]).toFixed(4)} {toCurrency}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;