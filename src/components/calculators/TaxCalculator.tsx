import React, { useState, useEffect } from 'react';

const TaxCalculator: React.FC = () => {
  const [income, setIncome] = useState<string>('75000');
  const [filingStatus, setFilingStatus] = useState<string>('single');
  const [deductions, setDeductions] = useState<string>('12950');
  const [result, setResult] = useState<any>(null);

  // 2023 Tax Brackets
  const taxBrackets = {
    single: [
      { min: 0, max: 11000, rate: 0.10 },
      { min: 11000, max: 44725, rate: 0.12 },
      { min: 44725, max: 95375, rate: 0.22 },
      { min: 95375, max: 182050, rate: 0.24 },
      { min: 182050, max: 231250, rate: 0.32 },
      { min: 231250, max: 578125, rate: 0.35 },
      { min: 578125, max: Infinity, rate: 0.37 }
    ],
    marriedJoint: [
      { min: 0, max: 22000, rate: 0.10 },
      { min: 22000, max: 89450, rate: 0.12 },
      { min: 89450, max: 190750, rate: 0.22 },
      { min: 190750, max: 364200, rate: 0.24 },
      { min: 364200, max: 462500, rate: 0.32 },
      { min: 462500, max: 693750, rate: 0.35 },
      { min: 693750, max: Infinity, rate: 0.37 }
    ]
  };

  const calculateTax = (taxableIncome: number, status: string) => {
    const brackets = taxBrackets[status as keyof typeof taxBrackets];
    let tax = 0;
    let remainingIncome = taxableIncome;

    for (const bracket of brackets) {
      if (remainingIncome <= 0) break;
      
      const taxableAtThisBracket = Math.min(remainingIncome, bracket.max - bracket.min);
      tax += taxableAtThisBracket * bracket.rate;
      remainingIncome -= taxableAtThisBracket;
    }

    return tax;
  };

  useEffect(() => {
    if (income && deductions) {
      const grossIncome = parseFloat(income);
      const totalDeductions = parseFloat(deductions);
      const taxableIncome = Math.max(0, grossIncome - totalDeductions);
      
      const federalTax = calculateTax(taxableIncome, filingStatus);
      const effectiveRate = (federalTax / grossIncome) * 100;
      const marginalRate = getMarginalRate(taxableIncome, filingStatus);
      const afterTaxIncome = grossIncome - federalTax;
      
      setResult({
        grossIncome,
        taxableIncome,
        federalTax,
        effectiveRate,
        marginalRate,
        afterTaxIncome,
        monthlyAfterTax: afterTaxIncome / 12
      });
    }
  }, [income, filingStatus, deductions]);

  const getMarginalRate = (taxableIncome: number, status: string) => {
    const brackets = taxBrackets[status as keyof typeof taxBrackets];
    for (const bracket of brackets) {
      if (taxableIncome >= bracket.min && taxableIncome < bracket.max) {
        return bracket.rate * 100;
      }
    }
    return 37; // Highest bracket
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Federal Tax Calculator</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Annual Income ($)
              </label>
              <input
                type="number"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filing Status
              </label>
              <select
                value={filingStatus}
                onChange={(e) => setFilingStatus(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="single">Single</option>
                <option value="marriedJoint">Married Filing Jointly</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Total Deductions ($)
              </label>
              <input
                type="number"
                value={deductions}
                onChange={(e) => setDeductions(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-sm text-gray-500 mt-1">
                Standard deduction: Single $12,950, Married $25,900
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">2023 Tax Year</h4>
              <p className="text-sm text-blue-700">
                This calculator uses 2023 federal tax brackets and standard deductions. 
                State taxes are not included.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tax Calculation</h3>
            {result && (
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Taxable Income</p>
                  <p className="text-xl font-bold text-blue-600">
                    ${result.taxableIncome.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Federal Tax Owed</p>
                  <p className="text-2xl font-bold text-red-600">
                    ${result.federalTax.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">After-Tax Income</p>
                  <p className="text-xl font-semibold text-green-600">
                    ${result.afterTaxIncome.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-600">Effective Rate</p>
                    <p className="text-lg font-medium text-orange-600">
                      {result.effectiveRate.toFixed(1)}%
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-600">Marginal Rate</p>
                    <p className="text-lg font-medium text-purple-600">
                      {result.marginalRate.toFixed(0)}%
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Monthly After-Tax</p>
                  <p className="text-lg font-medium text-gray-900">
                    ${result.monthlyAfterTax.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
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

export default TaxCalculator;