import React, { useState, useEffect } from 'react';
import { calculateBlackScholes } from '../../utils/calculations';

const BlackScholesCalculator: React.FC = () => {
  const [stockPrice, setStockPrice] = useState<string>('100');
  const [strikePrice, setStrikePrice] = useState<string>('100');
  const [timeToExpiry, setTimeToExpiry] = useState<string>('0.25');
  const [riskFreeRate, setRiskFreeRate] = useState<string>('0.05');
  const [volatility, setVolatility] = useState<string>('0.2');
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    if (stockPrice && strikePrice && timeToExpiry && riskFreeRate && volatility) {
      try {
        const calc = calculateBlackScholes(
          parseFloat(stockPrice),
          parseFloat(strikePrice),
          parseFloat(timeToExpiry),
          parseFloat(riskFreeRate),
          parseFloat(volatility)
        );
        setResult(calc);
      } catch (error) {
        console.error('Calculation error:', error);
      }
    }
  }, [stockPrice, strikePrice, timeToExpiry, riskFreeRate, volatility]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Black-Scholes Option Pricing</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Stock Price ($)
              </label>
              <input
                type="number"
                step="0.01"
                value={stockPrice}
                onChange={(e) => setStockPrice(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Strike Price ($)
              </label>
              <input
                type="number"
                step="0.01"
                value={strikePrice}
                onChange={(e) => setStrikePrice(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time to Expiration (years)
              </label>
              <input
                type="number"
                step="0.01"
                value={timeToExpiry}
                onChange={(e) => setTimeToExpiry(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Risk-Free Rate (decimal)
              </label>
              <input
                type="number"
                step="0.001"
                value={riskFreeRate}
                onChange={(e) => setRiskFreeRate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Volatility (decimal)
              </label>
              <input
                type="number"
                step="0.01"
                value={volatility}
                onChange={(e) => setVolatility(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Option Prices & Greeks</h3>
            {result && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-600">Call Price</p>
                    <p className="text-xl font-bold text-green-600">
                      ${result.callPrice.toFixed(2)}
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-600">Put Price</p>
                    <p className="text-xl font-bold text-red-600">
                      ${result.putPrice.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Greeks</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Delta</p>
                      <p className="font-medium">{result.delta.toFixed(4)}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Gamma</p>
                      <p className="font-medium">{result.gamma.toFixed(4)}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Theta</p>
                      <p className="font-medium">{result.theta.toFixed(4)}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Vega</p>
                      <p className="font-medium">{result.vega.toFixed(4)}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Rho</p>
                      <p className="font-medium">{result.rho.toFixed(4)}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackScholesCalculator;