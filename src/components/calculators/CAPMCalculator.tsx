import React, { useState, useEffect } from 'react';

const CAPMCalculator: React.FC = () => {
  const [riskFreeRate, setRiskFreeRate] = useState<string>('2.5');
  const [marketReturn, setMarketReturn] = useState<string>('10');
  const [beta, setBeta] = useState<string>('1.2');
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    if (riskFreeRate && marketReturn && beta) {
      const rf = parseFloat(riskFreeRate) / 100;
      const rm = parseFloat(marketReturn) / 100;
      const betaValue = parseFloat(beta);
      
      // CAPM Formula: Expected Return = Risk-Free Rate + Beta * (Market Return - Risk-Free Rate)
      const expectedReturn = rf + betaValue * (rm - rf);
      const marketRiskPremium = rm - rf;
      const riskPremium = betaValue * marketRiskPremium;
      
      // Risk assessment
      let riskLevel = 'Low';
      if (betaValue > 1.5) riskLevel = 'High';
      else if (betaValue > 1) riskLevel = 'Moderate';
      
      setResult({
        expectedReturn: expectedReturn * 100,
        marketRiskPremium: marketRiskPremium * 100,
        riskPremium: riskPremium * 100,
        beta: betaValue,
        riskLevel
      });
    }
  }, [riskFreeRate, marketReturn, beta]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">CAPM Calculator</h2>
        <p className="text-gray-600 mb-6">Calculate expected returns using the Capital Asset Pricing Model</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Risk-Free Rate (%)
              </label>
              <input
                type="number"
                step="0.1"
                value={riskFreeRate}
                onChange={(e) => setRiskFreeRate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-sm text-gray-500 mt-1">
                Typically 10-year Treasury bond rate
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Market Return (%)
              </label>
              <input
                type="number"
                step="0.1"
                value={marketReturn}
                onChange={(e) => setMarketReturn(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-sm text-gray-500 mt-1">
                Expected return of the market (e.g., S&P 500)
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Beta (β)
              </label>
              <input
                type="number"
                step="0.1"
                value={beta}
                onChange={(e) => setBeta(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-sm text-gray-500 mt-1">
                Measure of systematic risk relative to market
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">CAPM Formula</h4>
              <p className="text-sm text-blue-700 mb-2">
                Expected Return = Risk-Free Rate + β × (Market Return - Risk-Free Rate)
              </p>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• β &lt; 1: Less volatile than market</li>
                <li>• β = 1: Same volatility as market</li>
                <li>• β &gt; 1: More volatile than market</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">CAPM Results</h3>
            {result && (
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Expected Return</p>
                  <p className="text-2xl font-bold text-green-600">
                    {result.expectedReturn.toFixed(2)}%
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Market Risk Premium</p>
                  <p className="text-xl font-semibold text-blue-600">
                    {result.marketRiskPremium.toFixed(2)}%
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Risk Premium</p>
                  <p className="text-lg font-medium text-purple-600">
                    {result.riskPremium.toFixed(2)}%
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Beta (β)</p>
                  <p className="text-lg font-medium text-orange-600">
                    {result.beta.toFixed(2)}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Risk Level</p>
                  <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                    result.riskLevel === 'Low' ? 'bg-green-100 text-green-800' :
                    result.riskLevel === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {result.riskLevel}
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">Interpretation</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>
                      • This asset is expected to return {result.expectedReturn.toFixed(2)}% annually
                    </p>
                    <p>
                      • The risk premium over risk-free rate is {result.riskPremium.toFixed(2)}%
                    </p>
                    <p>
                      • Beta of {result.beta.toFixed(2)} indicates {
                        result.beta < 1 ? 'lower' : result.beta > 1 ? 'higher' : 'equal'
                      } volatility vs. market
                    </p>
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

export default CAPMCalculator;