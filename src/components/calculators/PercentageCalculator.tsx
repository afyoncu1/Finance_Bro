import React, { useState } from 'react';

const PercentageCalculator: React.FC = () => {
  const [value, setValue] = useState<string>('100');
  const [percentage, setPercentage] = useState<string>('20');
  const [originalValue, setOriginalValue] = useState<string>('80');
  const [newValue, setNewValue] = useState<string>('100');

  const calculatePercentageOf = () => {
    const val = parseFloat(value);
    const perc = parseFloat(percentage);
    return (val * perc / 100).toFixed(2);
  };

  const calculatePercentageChange = () => {
    const orig = parseFloat(originalValue);
    const newVal = parseFloat(newValue);
    const change = ((newVal - orig) / orig * 100).toFixed(2);
    return change;
  };

  const calculateWhatPercentage = () => {
    const val = parseFloat(value);
    const perc = parseFloat(percentage);
    return (perc / val * 100).toFixed(2);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Percentage Calculator</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* What is X% of Y */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">What is X% of Y?</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Percentage (%)
                </label>
                <input
                  type="number"
                  value={percentage}
                  onChange={(e) => setPercentage(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Value
                </label>
                <input
                  type="number"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="text-sm text-gray-600">Result</p>
                <p className="text-xl font-bold text-blue-600">{calculatePercentageOf()}</p>
              </div>
            </div>
          </div>

          {/* Percentage Change */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Percentage Change</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Original Value
                </label>
                <input
                  type="number"
                  value={originalValue}
                  onChange={(e) => setOriginalValue(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Value
                </label>
                <input
                  type="number"
                  value={newValue}
                  onChange={(e) => setNewValue(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="text-sm text-gray-600">Change</p>
                <p className="text-xl font-bold text-green-600">{calculatePercentageChange()}%</p>
              </div>
            </div>
          </div>

          {/* What percentage is X of Y */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">X is what % of Y?</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Part (X)
                </label>
                <input
                  type="number"
                  value={percentage}
                  onChange={(e) => setPercentage(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Whole (Y)
                </label>
                <input
                  type="number"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="text-sm text-gray-600">Percentage</p>
                <p className="text-xl font-bold text-purple-600">{calculateWhatPercentage()}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PercentageCalculator;