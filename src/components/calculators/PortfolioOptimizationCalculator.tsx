import React, { useState, useEffect } from 'react';

const PortfolioOptimizationCalculator: React.FC = () => {
  const [stocks, setStocks] = useState<string>('');
  const [bonds, setBonds] = useState<string>('');
  const [reits, setReits] = useState<string>('');
  const [portfolioValue, setPortfolioValue] = useState<string>('');
  const [result, setResult] = useState<any>(null);

  // Historical average returns and volatilities
  const assetData = {
    stocks: { return: 10.0, volatility: 16.0 },
    bonds: { return: 4.5, volatility: 4.0 },
    reits: { return: 8.5, volatility: 20.0 }
  };

  useEffect(() => {
    const stocksPercent = parseFloat(stocks) / 100;
    const bondsPercent = parseFloat(bonds) / 100;
    const reitsPercent = parseFloat(reits) / 100;
    const total = stocksPercent + bondsPercent + reitsPercent;
    
    if (Math.abs(total - 1) < 0.01 && portfolioValue) { // Allow small rounding errors
      const value = parseFloat(portfolioValue);
      
      // Calculate weighted returns
      const expectedReturn = (
        stocksPercent * assetData.stocks.return +
        bondsPercent * assetData.bonds.return +
        reitsPercent * assetData.reits.return
      );
      
      // Simplified portfolio volatility calculation (assuming some correlation)
      const portfolioVolatility = Math.sqrt(
        Math.pow(stocksPercent * assetData.stocks.volatility, 2) +
        Math.pow(bondsPercent * assetData.bonds.volatility, 2) +
        Math.pow(reitsPercent * assetData.reits.volatility, 2) +
        2 * stocksPercent * bondsPercent * 0.2 * assetData.stocks.volatility * assetData.bonds.volatility +
        2 * stocksPercent * reitsPercent * 0.6 * assetData.stocks.volatility * assetData.reits.volatility +
        2 * bondsPercent * reitsPercent * 0.1 * assetData.bonds.volatility * assetData.reits.volatility
      );
      
      const sharpeRatio = (expectedReturn - 2.5) / portfolioVolatility; // Assuming 2.5% risk-free rate
      const annualExpectedGain = value * (expectedReturn / 100);
      
      // Asset allocation in dollars
      const stocksValue = value * stocksPercent;
      const bondsValue = value * bondsPercent;
      const reitsValue = value * reitsPercent;
      
      setResult({
        expectedReturn,
        portfolioVolatility,
        sharpeRatio,
        annualExpectedGain,
        stocksValue,
        bondsValue,
        reitsValue,
        riskLevel: portfolioVolatility < 8 ? 'Conservative' : portfolioVolatility < 15 ? 'Moderate' : 'Aggressive'
      });
    } else {
      setResult(null);
    }
  }, [stocks, bonds, reits, portfolioValue]);

  const handlePercentageChange = (setter: React.Dispatch<React.SetStateAction<string>>, value: string) => {
    setter(value);
  };

  const totalPercentage = parseFloat(stocks) + parseFloat(bonds) + parseFloat(reits);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Portfolio Optimization Calculator</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Portfolio Value ($)
              </label>
              <input
                type="number"
                value={portfolioValue}
                onChange={(e) => setPortfolioValue(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Stocks Allocation (%)
              </label>
              <input
                type="number"
                min="0"
                max="100"
                value={stocks}
                onChange={(e) => handlePercentageChange(setStocks, e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-sm text-gray-500 mt-1">Expected return: 10.0%, Volatility: 16.0%</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bonds Allocation (%)
              </label>
              <input
                type="number"
                min="0"
                max="100"
                value={bonds}
                onChange={(e) => handlePercentageChange(setBonds, e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-sm text-gray-500 mt-1">Expected return: 4.5%, Volatility: 4.0%</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                REITs Allocation (%)
              </label>
              <input
                type="number"
                min="0"
                max="100"
                value={reits}
                onChange={(e) => handlePercentageChange(setReits, e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-sm text-gray-500 mt-1">Expected return: 8.5%, Volatility: 20.0%</p>
            </div>

            <div className={`p-4 rounded-lg ${totalPercentage === 100 ? 'bg-green-50' : 'bg-red-50'}`}>
              <p className={`text-sm font-medium ${totalPercentage === 100 ? 'text-green-700' : 'text-red-700'}`}>
                Total Allocation: {totalPercentage.toFixed(1)}%
                {totalPercentage !== 100 && ' (Must equal 100%)'}
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Portfolio Analysis</h3>
            {result ? (
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Expected Annual Return</p>
                  <p className="text-2xl font-bold text-green-600">
                    {result.expectedReturn.toFixed(2)}%
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Portfolio Volatility</p>
                  <p className="text-xl font-semibold text-orange-600">
                    {result.portfolioVolatility.toFixed(2)}%
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Sharpe Ratio</p>
                  <p className="text-lg font-medium text-blue-600">
                    {result.sharpeRatio.toFixed(2)}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Risk Level</p>
                  <p className={`text-lg font-medium ${
                    result.riskLevel === 'Conservative' ? 'text-green-600' :
                    result.riskLevel === 'Moderate' ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {result.riskLevel}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Expected Annual Gain</p>
                  <p className="text-lg font-medium text-purple-600">
                    ${result.annualExpectedGain.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">Asset Allocation ($)</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Stocks:</span>
                      <span className="font-medium">${result.stocksValue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bonds:</span>
                      <span className="font-medium">${result.bondsValue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>REITs:</span>
                      <span className="font-medium">${result.reitsValue.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <p className="text-gray-500">
                  Please ensure allocations total 100%
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioOptimizationCalculator;