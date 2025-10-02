import React, { useState, useEffect } from 'react';
import { calculateBondPrice } from '../../utils/calculations';

const BondCalculator: React.FC = () => {
  const [faceValue, setFaceValue] = useState<string>('1000');
  const [couponRate, setCouponRate] = useState<string>('5');
  const [yieldRate, setYieldRate] = useState<string>('4');
  const [yearsToMaturity, setYearsToMaturity] = useState<string>('10');
  const [paymentsPerYear, setPaymentsPerYear] = useState<string>('2');
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    if (faceValue && couponRate && yieldRate && yearsToMaturity && paymentsPerYear) {
      try {
        const calc = calculateBondPrice(
          parseFloat(faceValue),
          parseFloat(couponRate),
          parseFloat(yieldRate),
          parseFloat(yearsToMaturity),
          parseFloat(paymentsPerYear)
        );
        setResult(calc);
      } catch (error) {
        console.error('Calculation error:', error);
      }
    }
  }, [faceValue, couponRate, yieldRate, yearsToMaturity, paymentsPerYear]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Bond Calculator</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Face Value ($)
              </label>
              <input
                type="number"
                value={faceValue}
                onChange={(e) => setFaceValue(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Coupon Rate (%)
              </label>
              <input
                type="number"
                step="0.1"
                value={couponRate}
                onChange={(e) => setCouponRate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Yield to Maturity (%)
              </label>
              <input
                type="number"
                step="0.1"
                value={yieldRate}
                onChange={(e) => setYieldRate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Years to Maturity
              </label>
              <input
                type="number"
                value={yearsToMaturity}
                onChange={(e) => setYearsToMaturity(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Payments Per Year
              </label>
              <select
                value={paymentsPerYear}
                onChange={(e) => setPaymentsPerYear(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="1">Annual</option>
                <option value="2">Semi-annual</option>
                <option value="4">Quarterly</option>
                <option value="12">Monthly</option>
              </select>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Bond Metrics</h3>
            {result && (
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Bond Price</p>
                  <p className="text-2xl font-bold text-blue-600">
                    ${result.price.toFixed(2)}
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Current Yield</p>
                  <p className="text-xl font-semibold text-green-600">
                    {result.currentYield.toFixed(2)}%
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="text-lg font-medium text-gray-900">
                    {result.duration.toFixed(2)} years
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

export default BondCalculator;