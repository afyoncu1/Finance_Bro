import React, { useState, useEffect } from 'react';

const TipCalculator: React.FC = () => {
  const [billAmount, setBillAmount] = useState<string>('');
  const [tipPercentage, setTipPercentage] = useState<string>('');
  const [numberOfPeople, setNumberOfPeople] = useState<string>('');
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const bill = billAmount || '50';
    const tip = tipPercentage || '18';
    const people = numberOfPeople || '1';

    if (bill && tip && people) {
      const billNum = parseFloat(bill);
      const tipNum = parseFloat(tip);
      const peopleNum = parseInt(people);
      
      const tipAmount = billNum * (tipNum / 100);
      const totalAmount = billNum + tipAmount;
      const perPerson = totalAmount / peopleNum;
      const tipPerPerson = tipAmount / peopleNum;
      
      setResult({
        tipAmount,
        totalAmount,
        perPerson,
        tipPerPerson
      });
    }
  }, [billAmount, tipPercentage, numberOfPeople]);

  const quickTipButtons = [15, 18, 20, 25];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Tip Calculator</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bill Amount ($)
              </label>
              <input
                type="number"
                step="0.01"
                value={billAmount}
                onChange={(e) => setBillAmount(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
                placeholder="50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tip Percentage (%)
              </label>
              <input
                type="number"
                value={tipPercentage}
                onChange={(e) => setTipPercentage(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
                placeholder="18"
              />
              <div className="flex gap-2 mt-2">
                {quickTipButtons.map(tip => (
                  <button
                    key={tip}
                    onClick={() => setTipPercentage(tip.toString())}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors text-sm"
                  >
                    {tip}%
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of People
              </label>
              <input
                type="number"
                min="1"
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
                placeholder="1"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Bill Summary</h3>
            {result && (
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Tip Amount</p>
                  <p className="text-xl font-bold text-green-600">
                    ${result.tipAmount.toFixed(2)}
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Total Amount</p>
                  <p className="text-2xl font-bold text-blue-600">
                    ${result.totalAmount.toFixed(2)}
                  </p>
                </div>

                {parseInt(numberOfPeople || '1') > 1 && (
                  <>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <p className="text-sm text-gray-600">Per Person</p>
                      <p className="text-lg font-semibold text-gray-900">
                        ${result.perPerson.toFixed(2)}
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <p className="text-sm text-gray-600">Tip Per Person</p>
                      <p className="text-lg font-medium text-green-600">
                        ${result.tipPerPerson.toFixed(2)}
                      </p>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipCalculator;