import React, { useState, useEffect } from 'react';

const PresentValueCalculator: React.FC = () => {
  const [calculationType, setCalculationType] = useState<string>('pv');
  const [futureValue, setFutureValue] = useState<string>('10000');
  const [presentValue, setPresentValue] = useState<string>('8000');
  const [interestRate, setInterestRate] = useState<string>('5');
  const [periods, setPeriods] = useState<string>('5');
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    if (interestRate && periods) {
      const rate = parseFloat(interestRate) / 100;
      const n = parseFloat(periods);
      
      if (calculationType === 'pv' && futureValue) {
        // Calculate Present Value
        const fv = parseFloat(futureValue);
        const pv = fv / Math.pow(1 + rate, n);
        const discount = fv - pv;
        
        setResult({
          type: 'Present Value',
          value: pv,
          futureValue: fv,
          discount,
          rate: rate * 100,
          periods: n
        });
      } else if (calculationType === 'fv' && presentValue) {
        // Calculate Future Value
        const pv = parseFloat(presentValue);
        const fv = pv * Math.pow(1 + rate, n);
        const growth = fv - pv;
        
        setResult({
          type: 'Future Value',
          value: fv,
          presentValue: pv,
          growth,
          rate: rate * 100,
          periods: n
        });
      }
    }
  }, [calculationType, futureValue, presentValue, interestRate, periods]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Present/Future Value Calculator</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Calculation Type
              </label>
              <select
                value={calculationType}
                onChange={(e) => setCalculationType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
              >
                <option value="pv">Calculate Present Value</option>
                <option value="fv">Calculate Future Value</option>
              </select>
            </div>

            {calculationType === 'pv' ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Future Value ($)
                </label>
                <input
                  type="number"
                  value={futureValue}
                  onChange={(e) => setFutureValue(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
                />
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Present Value ($)
                </label>
                <input
                  type="number"
                  value={presentValue}
                  onChange={(e) => setPresentValue(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Annual Interest Rate (%)
              </label>
              <input
                type="number"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Periods (years)
              </label>
              <input
                type="number"
                value={periods}
                onChange={(e) => setPeriods(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
              />
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Time Value of Money</h4>
              <p className="text-sm text-blue-700">
                Money available today is worth more than the same amount in the future 
                due to its potential earning capacity.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Calculation Result</h3>
            {result && (
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">{result.type}</p>
                  <p className="text-2xl font-bold text-green-600">
                    ${result.value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                </div>

                {result.type === 'Present Value' ? (
                  <>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <p className="text-sm text-gray-600">Future Value</p>
                      <p className="text-xl font-semibold text-blue-600">
                        ${result.futureValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <p className="text-sm text-gray-600">Discount Amount</p>
                      <p className="text-lg font-medium text-red-600">
                        ${result.discount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <p className="text-sm text-gray-600">Present Value</p>
                      <p className="text-xl font-semibold text-blue-600">
                        ${result.presentValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <p className="text-sm text-gray-600">Growth Amount</p>
                      <p className="text-lg font-medium text-green-600">
                        ${result.growth.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </p>
                    </div>
                  </>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-600">Interest Rate</p>
                    <p className="text-lg font-medium text-purple-600">
                      {result.rate.toFixed(1)}%
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-600">Time Period</p>
                    <p className="text-lg font-medium text-orange-600">
                      {result.periods} years
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

export default PresentValueCalculator;