import React, { useState, useEffect } from 'react';

const ValueAtRiskCalculator: React.FC = () => {
  const [portfolioValue, setPortfolioValue] = useState<string>('');
  const [expectedReturn, setExpectedReturn] = useState<string>('');
  const [volatility, setVolatility] = useState<string>('');
  const [confidenceLevel, setConfidenceLevel] = useState<string>('');
  const [timeHorizon, setTimeHorizon] = useState<string>('');
  const [result, setResult] = useState<any>(null);

  // Z-scores for different confidence levels
  const zScores: { [key: string]: number } = {
    '90': 1.282,
    '95': 1.645,
    '99': 2.326
  };

  useEffect(() => {
    if (portfolioValue && expectedReturn && volatility && confidenceLevel && timeHorizon) {
      const value = parseFloat(portfolioValue);
      const mu = parseFloat(expectedReturn) / 100;
      const sigma = parseFloat(volatility) / 100;
      const confidence = parseFloat(confidenceLevel);
      const time = parseFloat(timeHorizon);
      
      // Adjust for time horizon
      const adjustedReturn = mu * time;
      const adjustedVolatility = sigma * Math.sqrt(time);
      
      // Calculate VaR using parametric method
      const zScore = zScores[confidenceLevel];
      const var95 = value * (adjustedReturn - zScore * adjustedVolatility);
      const varAmount = Math.abs(var95);
      
      // Expected Shortfall (Conditional VaR)
      const expectedShortfall = value * (adjustedReturn - adjustedVolatility * Math.exp(-0.5 * zScore * zScore) / (Math.sqrt(2 * Math.PI) * (1 - confidence / 100)));
      const esAmount = Math.abs(expectedShortfall);
      
      // Risk metrics
      const varPercentage = (varAmount / value) * 100;
      const esPercentage = (esAmount / value) * 100;
      
      setResult({
        varAmount,
        varPercentage,
        esAmount,
        esPercentage,
        confidence,
        timeHorizon: time,
        portfolioValue: value
      });
    }
  }, [portfolioValue, expectedReturn, volatility, confidenceLevel, timeHorizon]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Value at Risk (VaR) Calculator</h2>
        
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
                Expected Annual Return (%)
              </label>
              <input
                type="number"
                step="0.1"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Annual Volatility (%)
              </label>
              <input
                type="number"
                step="0.1"
                value={volatility}
                onChange={(e) => setVolatility(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confidence Level (%)
              </label>
              <select
                value={confidenceLevel}
                onChange={(e) => setConfidenceLevel(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="90">90%</option>
                <option value="95">95%</option>
                <option value="99">99%</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time Horizon (days)
              </label>
              <select
                value={timeHorizon}
                onChange={(e) => setTimeHorizon(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="1">1 Day</option>
                <option value="10">10 Days</option>
                <option value="30">30 Days</option>
                <option value="252">1 Year</option>
              </select>
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-medium text-red-900 mb-2">Risk Warning</h4>
              <p className="text-sm text-red-700">
                VaR estimates potential losses under normal market conditions. 
                Extreme market events may result in losses exceeding VaR estimates.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Risk Analysis</h3>
            {result && (
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Value at Risk ({result.confidence}%)</p>
                  <p className="text-2xl font-bold text-red-600">
                    ${result.varAmount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {result.varPercentage.toFixed(2)}% of portfolio value
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Expected Shortfall (CVaR)</p>
                  <p className="text-xl font-semibold text-orange-600">
                    ${result.esAmount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {result.esPercentage.toFixed(2)}% of portfolio value
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">Risk Interpretation</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      • There is a {100 - result.confidence}% chance of losing more than 
                      ${result.varAmount.toLocaleString()} over {result.timeHorizon} day(s)
                    </p>
                    <p>
                      • If losses exceed VaR, the expected loss is 
                      ${result.esAmount.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">Risk Level</h4>
                  <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                    result.varPercentage < 2 ? 'bg-green-100 text-green-800' :
                    result.varPercentage < 5 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {result.varPercentage < 2 ? 'Low Risk' :
                     result.varPercentage < 5 ? 'Moderate Risk' : 'High Risk'}
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

export default ValueAtRiskCalculator;