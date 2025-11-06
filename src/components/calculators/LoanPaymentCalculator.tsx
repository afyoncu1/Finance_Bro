import React, { useState, useEffect } from 'react';

const LoanPaymentCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<string>('');
  const [interestRate, setInterestRate] = useState<string>('');
  const [loanTerm, setLoanTerm] = useState<string>('');
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const loan = loanAmount || '25000';
    const rate = interestRate || '6.5';
    const term = loanTerm || '5';

    if (loan && rate && term) {
      const principal = parseFloat(loan);
      const rateNum = parseFloat(rate) / 100 / 12;
      const months = parseFloat(term) * 12;
      
      const monthlyPayment = principal * (rateNum * Math.pow(1 + rateNum, months)) / (Math.pow(1 + rateNum, months) - 1);
      const totalPayment = monthlyPayment * months;
      const totalInterest = totalPayment - principal;
      
      setResult({
        monthlyPayment,
        totalPayment,
        totalInterest,
        interestPercentage: (totalInterest / principal) * 100
      });
    }
  }, [loanAmount, interestRate, loanTerm]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Loan Payment Calculator</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Amount ($)
              </label>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
                placeholder="25000"
              />
            </div>

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
                placeholder="6.5"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Term (years)
              </label>
              <input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
                placeholder="5"
              />
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Loan Types</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Personal Loans: 6-36% APR</li>
                <li>• Auto Loans: 3-10% APR</li>
                <li>• Student Loans: 3-7% APR</li>
                <li>• Home Equity: 3-8% APR</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Details</h3>
            {result && (
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Monthly Payment</p>
                  <p className="text-2xl font-bold text-green-600">
                    ${result.monthlyPayment.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Total Payment</p>
                  <p className="text-xl font-semibold text-blue-600">
                    ${result.totalPayment.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Total Interest</p>
                  <p className="text-lg font-medium text-red-600">
                    ${result.totalInterest.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Interest as % of Loan</p>
                  <p className="text-lg font-medium text-orange-600">
                    {result.interestPercentage.toFixed(1)}%
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

export default LoanPaymentCalculator;