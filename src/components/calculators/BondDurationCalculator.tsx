import React, { useState, useEffect } from 'react';

const BondDurationCalculator: React.FC = () => {
  const [faceValue, setFaceValue] = useState<string>('1000');
  const [couponRate, setCouponRate] = useState<string>('5');
  const [yieldToMaturity, setYieldToMaturity] = useState<string>('4');
  const [yearsToMaturity, setYearsToMaturity] = useState<string>('10');
  const [paymentsPerYear, setPaymentsPerYear] = useState<string>('2');
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    if (faceValue && couponRate && yieldToMaturity && yearsToMaturity && paymentsPerYear) {
      const face = parseFloat(faceValue);
      const coupon = parseFloat(couponRate) / 100;
      const ytm = parseFloat(yieldToMaturity) / 100;
      const years = parseFloat(yearsToMaturity);
      const frequency = parseFloat(paymentsPerYear);
      
      const periodsToMaturity = years * frequency;
      const couponPayment = (face * coupon) / frequency;
      const yieldPerPeriod = ytm / frequency;
      
      // Calculate bond price
      let bondPrice = 0;
      let macaulayDuration = 0;
      let convexity = 0;
      
      // Present value of coupon payments
      for (let t = 1; t <= periodsToMaturity; t++) {
        const pv = couponPayment / Math.pow(1 + yieldPerPeriod, t);
        bondPrice += pv;
        macaulayDuration += (t / frequency) * pv;
        convexity += (t * (t + 1)) * pv / Math.pow(1 + yieldPerPeriod, 2);
      }
      
      // Present value of face value
      const pvFaceValue = face / Math.pow(1 + yieldPerPeriod, periodsToMaturity);
      bondPrice += pvFaceValue;
      macaulayDuration += years * pvFaceValue;
      convexity += (periodsToMaturity * (periodsToMaturity + 1)) * pvFaceValue / Math.pow(1 + yieldPerPeriod, 2);
      
      // Finalize calculations
      macaulayDuration = macaulayDuration / bondPrice;
      const modifiedDuration = macaulayDuration / (1 + yieldPerPeriod);
      convexity = convexity / (bondPrice * Math.pow(frequency, 2));
      
      // Price sensitivity calculations
      const durationRisk = modifiedDuration * 0.01; // 1% yield change
      const convexityAdjustment = 0.5 * convexity * Math.pow(0.01, 2);
      const totalPriceSensitivity = (durationRisk + convexityAdjustment) * 100;
      
      // Risk metrics
      let riskLevel = 'Low';
      if (modifiedDuration > 7) riskLevel = 'High';
      else if (modifiedDuration > 4) riskLevel = 'Moderate';
      
      setResult({
        bondPrice,
        macaulayDuration,
        modifiedDuration,
        convexity,
        durationRisk: durationRisk * 100,
        convexityAdjustment: convexityAdjustment * 100,
        totalPriceSensitivity,
        riskLevel,
        currentYield: (face * coupon / bondPrice) * 100
      });
    }
  }, [faceValue, couponRate, yieldToMaturity, yearsToMaturity, paymentsPerYear]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Bond Duration & Convexity Calculator</h2>
        
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
                value={yieldToMaturity}
                onChange={(e) => setYieldToMaturity(e.target.value)}
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
              </select>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Duration & Convexity</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Duration measures price sensitivity to yield changes</li>
                <li>• Convexity measures the curvature of price-yield relationship</li>
                <li>• Higher duration = higher interest rate risk</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Bond Risk Metrics</h3>
            {result && (
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Bond Price</p>
                  <p className="text-2xl font-bold text-blue-600">
                    ${result.bondPrice.toFixed(2)}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-600">Macaulay Duration</p>
                    <p className="text-lg font-semibold text-green-600">
                      {result.macaulayDuration.toFixed(2)} years
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-600">Modified Duration</p>
                    <p className="text-lg font-semibold text-purple-600">
                      {result.modifiedDuration.toFixed(2)} years
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Convexity</p>
                  <p className="text-xl font-bold text-orange-600">
                    {result.convexity.toFixed(2)}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Interest Rate Risk Level</p>
                  <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                    result.riskLevel === 'Low' ? 'bg-green-100 text-green-800' :
                    result.riskLevel === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {result.riskLevel}
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">Price Sensitivity (1% yield change)</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Duration Effect:</span>
                      <span className="font-medium">{result.durationRisk.toFixed(2)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Convexity Adjustment:</span>
                      <span className="font-medium">{result.convexityAdjustment.toFixed(2)}%</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="font-medium">Total Price Change:</span>
                      <span className="font-bold text-red-600">{result.totalPriceSensitivity.toFixed(2)}%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600">Current Yield</p>
                  <p className="text-lg font-medium text-gray-900">
                    {result.currentYield.toFixed(2)}%
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

export default BondDurationCalculator;