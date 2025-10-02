import React, { useState, useEffect } from 'react';

const InvestmentGrowthCalculator: React.FC = () => {
  const [initialInvestment, setInitialInvestment] = useState<string>('10000');
  const [monthlyContribution, setMonthlyContribution] = useState<string>('500');
  const [annualReturn, setAnnualReturn] = useState<string>('8');
  const [years, setYears] = useState<string>('20');
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    if (initialInvestment && monthlyContribution && annualReturn && years) {
      const initial = parseFloat(initialInvestment);
      const monthly = parseFloat(monthlyContribution);
      const rate = parseFloat(annualReturn) / 100;
      const time = parseFloat(years);
      
      // Future value of initial investment
      const futureValueInitial = initial * Math.pow(1 + rate, time);
      
      // Future value of monthly contributions (annuity)
      const monthlyRate = rate / 12;
      const totalMonths = time * 12;
      const futureValueContributions = monthly * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);
      
      const totalValue = futureValueInitial + futureValueContributions;
      const totalContributions = initial + (monthly * 12 * time);
      const totalGrowth = totalValue - totalContributions;
      
      setResult({
        totalValue,
        totalContributions,
        totalGrowth,
        returnOnInvestment: (totalGrowth / totalContributions) * 100
      });
    }
  }, [initialInvestment, monthlyContribution, annualReturn, years]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Investment Growth Calculator</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Initial Investment ($)
              </label>
              <input
                type="number"
                value={initialInvestment}
                onChange={(e) => setInitialInvestment(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                value={annualReturn}
                onChange={(e) => setAnnualReturn(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Investment Period (years)
              </label>
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Investment Projection</h3>
            {result && (
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Total Portfolio Value</p>
                  <p className="text-2xl font-bold text-green-600">
                    ${result.totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Total Contributions</p>
                  <p className="text-xl font-semibold text-blue-600">
                    ${result.totalContributions.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Investment Growth</p>
                  <p className="text-lg font-medium text-purple-600">
                    ${result.totalGrowth.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Return on Investment</p>
                  <p className="text-lg font-medium text-orange-600">
                    {result.returnOnInvestment.toFixed(2)}%
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

export default InvestmentGrowthCalculator;