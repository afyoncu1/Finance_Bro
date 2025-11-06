import React, { useState, useEffect } from 'react';

const RetirementPlanningCalculator: React.FC = () => {
  const [currentAge, setCurrentAge] = useState<string>('30');
  const [retirementAge, setRetirementAge] = useState<string>('65');
  const [currentSavings, setCurrentSavings] = useState<string>('50000');
  const [monthlyContribution, setMonthlyContribution] = useState<string>('1000');
  const [expectedReturn, setExpectedReturn] = useState<string>('7');
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    if (currentAge && retirementAge && currentSavings && monthlyContribution && expectedReturn) {
      const yearsToRetirement = parseFloat(retirementAge) - parseFloat(currentAge);
      const current = parseFloat(currentSavings);
      const monthly = parseFloat(monthlyContribution);
      const rate = parseFloat(expectedReturn) / 100;
      
      if (yearsToRetirement > 0) {
        // Future value of current savings
        const futureValueCurrent = current * Math.pow(1 + rate, yearsToRetirement);
        
        // Future value of monthly contributions
        const monthlyRate = rate / 12;
        const totalMonths = yearsToRetirement * 12;
        const futureValueContributions = monthly * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);
        
        const totalRetirementSavings = futureValueCurrent + futureValueContributions;
        const totalContributions = current + (monthly * 12 * yearsToRetirement);
        const totalGrowth = totalRetirementSavings - totalContributions;
        
        // 4% withdrawal rule
        const annualWithdrawal = totalRetirementSavings * 0.04;
        const monthlyWithdrawal = annualWithdrawal / 12;
        
        setResult({
          yearsToRetirement,
          totalRetirementSavings,
          totalContributions,
          totalGrowth,
          annualWithdrawal,
          monthlyWithdrawal
        });
      }
    }
  }, [currentAge, retirementAge, currentSavings, monthlyContribution, expectedReturn]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Retirement Planning Calculator</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Age
              </label>
              <input
                type="number"
                value={currentAge}
                onChange={(e) => setCurrentAge(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Retirement Age
              </label>
              <input
                type="number"
                value={retirementAge}
                onChange={(e) => setRetirementAge(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Retirement Savings ($)
              </label>
              <input
                type="number"
                value={currentSavings}
                onChange={(e) => setCurrentSavings(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Contribution ($)
              </label>
              <input
                type="number"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Retirement Projection</h3>
            {result && (
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Years to Retirement</p>
                  <p className="text-xl font-bold text-blue-600">
                    {result.yearsToRetirement} years
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Total Retirement Savings</p>
                  <p className="text-2xl font-bold text-green-600">
                    ${result.totalRetirementSavings.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Total Contributions</p>
                  <p className="text-lg font-semibold text-blue-600">
                    ${result.totalContributions.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Investment Growth</p>
                  <p className="text-lg font-medium text-purple-600">
                    ${result.totalGrowth.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Monthly Retirement Income (4% Rule)</p>
                  <p className="text-lg font-medium text-orange-600">
                    ${result.monthlyWithdrawal.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetirementPlanningCalculator;