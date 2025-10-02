import React, { useState, useEffect } from 'react';
import { calculateCompoundInterest } from '../../utils/calculations';

const CompoundInterestCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState<string>('10000');
  const [rate, setRate] = useState<string>('7');
  const [time, setTime] = useState<string>('10');
  const [compound, setCompound] = useState<string>('12');
  const [monthlyContribution, setMonthlyContribution] = useState<string>('0');
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    if (principal && rate && time && compound) {
      const calc = calculateCompoundInterest(
        parseFloat(principal),
        parseFloat(rate),
        parseFloat(time),
        parseFloat(compound),
        parseFloat(monthlyContribution) || 0
      );
      setResult(calc);
    }
  }, [principal, rate, time, compound, monthlyContribution]);

  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-8 py-4 md:py-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Compound Interest Calculator</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          {/* Input Section */}
          <div className="space-y-4 md:space-y-6">
            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                Principal Amount ($)
              </label>
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="10000"
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                Annual Interest Rate (%)
              </label>
              <input
                type="number"
                step="0.1"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="7"
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                Time Period (years)
              </label>
              <input
                type="number"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="10"
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                Compounding Frequency (per year)
              </label>
              <select
                value={compound}
                onChange={(e) => setCompound(e.target.value)}
                className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="1">Annually</option>
                <option value="2">Semi-annually</option>
                <option value="4">Quarterly</option>
                <option value="12">Monthly</option>
                <option value="365">Daily</option>
              </select>
            </div>

            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                Monthly Contribution ($)
              </label>
              <input
                type="number"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(e.target.value)}
                className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0"
              />
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-gray-50 rounded-lg p-4 md:p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">Results</h3>
            {result && (
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-xs md:text-sm text-gray-600">Final Amount</p>
                  <p className="text-lg md:text-2xl font-bold text-green-600">
                    ${result.finalAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-xs md:text-sm text-gray-600">Total Interest Earned</p>
                  <p className="text-base md:text-xl font-semibold text-blue-600">
                    ${result.totalInterest.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-xs md:text-sm text-gray-600">Principal Amount</p>
                  <p className="text-base md:text-lg font-medium text-gray-900">
                    ${parseFloat(principal).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                </div>

                {result.monthlyContributions > 0 && (
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <p className="text-xs md:text-sm text-gray-600">Total Contributions</p>
                    <p className="text-base md:text-lg font-medium text-gray-900">
                      ${result.monthlyContributions.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompoundInterestCalculator;