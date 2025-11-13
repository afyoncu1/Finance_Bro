import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';

const DCFValuationCalculator: React.FC = () => {
  const [revenue, setRevenue] = useState<string>('');
  const [revenueGrowth, setRevenueGrowth] = useState<string>('');
  const [ebitdaMargin, setEbitdaMargin] = useState<string>('');
  const [taxRate, setTaxRate] = useState<string>('');
  const [capexPercent, setCapexPercent] = useState<string>('');
  const [workingCapitalPercent, setWorkingCapitalPercent] = useState<string>('');
  const [wacc, setWacc] = useState<string>('');
  const [terminalGrowth, setTerminalGrowth] = useState<string>('');
  const [sharesOutstanding, setSharesOutstanding] = useState<string>('');
  const [netDebt, setNetDebt] = useState<string>('');
  const [result, setResult] = useState<any>(null);

  const [showWaccCalculator, setShowWaccCalculator] = useState(false);

  const [waccEquityValue, setWaccEquityValue] = useState<string>('');
  const [waccDebtValue, setWaccDebtValue] = useState<string>('');
  const [waccCostOfEquity, setWaccCostOfEquity] = useState<string>('');
  const [waccCostOfDebt, setWaccCostOfDebt] = useState<string>('');
  const [waccTaxRate, setWaccTaxRate] = useState<string>('');
  const [calculatedWacc, setCalculatedWacc] = useState<number | null>(null);

  const calculateWacc = () => {
    if (waccEquityValue && waccDebtValue && waccCostOfEquity && waccCostOfDebt && waccTaxRate) {
      const E = parseFloat(waccEquityValue);
      const D = parseFloat(waccDebtValue);
      const Re = parseFloat(waccCostOfEquity) / 100;
      const Rd = parseFloat(waccCostOfDebt) / 100;
      const Tc = parseFloat(waccTaxRate) / 100;
      const V = E + D;

      const waccResult = ((E / V) * Re + (D / V) * Rd * (1 - Tc)) * 100;
      setCalculatedWacc(waccResult);
    }
  };

  const useWaccInDcf = () => {
    if (calculatedWacc !== null) {
      setWacc(calculatedWacc.toFixed(2));
      setShowWaccCalculator(false);
    }
  };

  useEffect(() => {
    if (waccEquityValue && waccDebtValue && waccCostOfEquity && waccCostOfDebt && waccTaxRate) {
      calculateWacc();
    }
  }, [waccEquityValue, waccDebtValue, waccCostOfEquity, waccCostOfDebt, waccTaxRate]);

  useEffect(() => {
    if (revenue && revenueGrowth && ebitdaMargin && taxRate && capexPercent && workingCapitalPercent && wacc && terminalGrowth && sharesOutstanding && netDebt) {
      const currentRevenue = parseFloat(revenue);
      const growthRate = parseFloat(revenueGrowth) / 100;
      const margin = parseFloat(ebitdaMargin) / 100;
      const tax = parseFloat(taxRate) / 100;
      const capex = parseFloat(capexPercent) / 100;
      const workingCap = parseFloat(workingCapitalPercent) / 100;
      const discountRate = parseFloat(wacc) / 100;
      const terminalRate = parseFloat(terminalGrowth) / 100;
      const shares = parseFloat(sharesOutstanding);
      const debt = parseFloat(netDebt);

      // Project 5 years of cash flows
      const projectionYears = 5;
      const cashFlows: number[] = [];
      let projectedRevenue = currentRevenue;

      for (let year = 1; year <= projectionYears; year++) {
        projectedRevenue = projectedRevenue * (1 + growthRate);
        const ebitda = projectedRevenue * margin;
        const ebit = ebitda; // Simplified - assuming no D&A for this calculation
        const nopat = ebit * (1 - tax);
        const capexAmount = projectedRevenue * capex;
        const workingCapChange = projectedRevenue * workingCap * growthRate;
        const freeCashFlow = nopat - capexAmount - workingCapChange;
        cashFlows.push(freeCashFlow);
      }

      // Calculate present value of projected cash flows
      let pvCashFlows = 0;
      for (let i = 0; i < cashFlows.length; i++) {
        pvCashFlows += cashFlows[i] / Math.pow(1 + discountRate, i + 1);
      }

      // Calculate terminal value
      const terminalCashFlow = cashFlows[cashFlows.length - 1] * (1 + terminalRate);
      const terminalValue = terminalCashFlow / (discountRate - terminalRate);
      const pvTerminalValue = terminalValue / Math.pow(1 + discountRate, projectionYears);

      // Calculate enterprise and equity value
      const enterpriseValue = pvCashFlows + pvTerminalValue;
      const equityValue = enterpriseValue - debt;
      const sharePrice = equityValue / shares;

      // Calculate valuation metrics
      const evRevenue = enterpriseValue / currentRevenue;
      const evEbitda = enterpriseValue / (currentRevenue * margin);

      setResult({
        cashFlows,
        pvCashFlows,
        terminalValue,
        pvTerminalValue,
        enterpriseValue,
        equityValue,
        sharePrice,
        evRevenue,
        evEbitda,
        projectedRevenue: projectedRevenue / (1 + growthRate) // Last year revenue
      });
    }
  }, [revenue, revenueGrowth, ebitdaMargin, taxRate, capexPercent, workingCapitalPercent, wacc, terminalGrowth, sharesOutstanding, netDebt]);

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8 py-4 md:py-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">DCF Valuation Calculator</h2>
        <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">Calculate company valuation using Discounted Cash Flow analysis</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          <div className="space-y-4 md:space-y-6">
            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                Current Revenue ($)
              </label>
              <input
                type="number"
                value={revenue}
                onChange={(e) => setRevenue(e.target.value)}
                className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                Revenue Growth Rate (%)
              </label>
              <input
                type="number"
                step="0.1"
                value={revenueGrowth}
                onChange={(e) => setRevenueGrowth(e.target.value)}
                className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                EBITDA Margin (%)
              </label>
              <input
                type="number"
                step="0.1"
                value={ebitdaMargin}
                onChange={(e) => setEbitdaMargin(e.target.value)}
                className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                Tax Rate (%)
              </label>
              <input
                type="number"
                step="0.1"
                value={taxRate}
                onChange={(e) => setTaxRate(e.target.value)}
                className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                CapEx (% of Revenue)
              </label>
              <input
                type="number"
                step="0.1"
                value={capexPercent}
                onChange={(e) => setCapexPercent(e.target.value)}
                className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                Working Capital (% of Revenue)
              </label>
              <input
                type="number"
                step="0.1"
                value={workingCapitalPercent}
                onChange={(e) => setWorkingCapitalPercent(e.target.value)}
                className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                WACC - Discount Rate (%)
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  step="0.1"
                  value={wacc}
                  onChange={(e) => setWacc(e.target.value)}
                  className="flex-1 px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., 8.5"
                />
                <button
                  onClick={() => setShowWaccCalculator(true)}
                  className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1 text-sm"
                  title="Calculate WACC"
                >
                  <Calculator size={16} />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                Growth Rate (%)
              </label>
              <input
                type="number"
                step="0.1"
                value={terminalGrowth}
                onChange={(e) => setTerminalGrowth(e.target.value)}
                className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., 2.5"
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                Shares Outstanding
              </label>
              <input
                type="number"
                value={sharesOutstanding}
                onChange={(e) => setSharesOutstanding(e.target.value)}
                className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                Net Debt ($)
              </label>
              <input
                type="number"
                value={netDebt}
                onChange={(e) => setNetDebt(e.target.value)}
                className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 md:p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">DCF Valuation Results</h3>
            {result && (
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-xs md:text-sm text-gray-600">Intrinsic Share Price</p>
                  <p className="text-lg md:text-2xl font-bold text-green-600">
                    ${result.sharePrice.toFixed(2)}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-xs md:text-sm text-gray-600">Enterprise Value</p>
                  <p className="text-base md:text-xl font-semibold text-blue-600">
                    ${(result.enterpriseValue / 1000000).toFixed(0)}M
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-xs md:text-sm text-gray-600">Equity Value</p>
                  <p className="text-base md:text-lg font-medium text-purple-600">
                    ${(result.equityValue / 1000000).toFixed(0)}M
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <p className="text-xs text-gray-600">EV/Revenue</p>
                    <p className="text-sm md:text-base font-medium text-orange-600">
                      {result.evRevenue.toFixed(1)}x
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <p className="text-xs text-gray-600">EV/EBITDA</p>
                    <p className="text-sm md:text-base font-medium text-red-600">
                      {result.evEbitda.toFixed(1)}x
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-xs md:text-sm text-gray-600">PV of Cash Flows (5Y)</p>
                  <p className="text-sm md:text-base font-medium text-gray-900">
                    ${(result.pvCashFlows / 1000000).toFixed(0)}M
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-xs md:text-sm text-gray-600">PV of Terminal Value</p>
                  <p className="text-sm md:text-base font-medium text-gray-900">
                    ${(result.pvTerminalValue / 1000000).toFixed(0)}M
                  </p>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2 text-xs md:text-sm">DCF Components</h4>
                  <div className="text-xs text-blue-700 space-y-1">
                    <p>• 5-year cash flow projection</p>
                    <p>• Terminal value calculation</p>
                    <p>• WACC discount rate applied</p>
                    <p>• Net debt subtracted from EV</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showWaccCalculator && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">WACC Calculator</h3>
                <button
                  onClick={() => setShowWaccCalculator(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Market Value of Equity ($)
                  </label>
                  <input
                    type="number"
                    value={waccEquityValue}
                    onChange={(e) => setWaccEquityValue(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., 1000000000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Market Value of Debt ($)
                  </label>
                  <input
                    type="number"
                    value={waccDebtValue}
                    onChange={(e) => setWaccDebtValue(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., 300000000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cost of Equity (%)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={waccCostOfEquity}
                    onChange={(e) => setWaccCostOfEquity(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., 10"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cost of Debt (%)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={waccCostOfDebt}
                    onChange={(e) => setWaccCostOfDebt(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., 5"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tax Rate (%)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={waccTaxRate}
                    onChange={(e) => setWaccTaxRate(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., 21"
                  />
                </div>

                {calculatedWacc !== null && (
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <p className="text-sm text-gray-600 mb-1">Calculated WACC</p>
                    <p className="text-3xl font-bold text-blue-600">
                      {calculatedWacc.toFixed(2)}%
                    </p>
                    <div className="mt-4 text-xs text-gray-600">
                      <p className="font-medium mb-1">Formula:</p>
                      <p>WACC = (E/V × Re) + (D/V × Rd × (1 - Tc))</p>
                      <p className="mt-2">Where:</p>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>E = Market value of equity</li>
                        <li>D = Market value of debt</li>
                        <li>V = E + D (Total value)</li>
                        <li>Re = Cost of equity</li>
                        <li>Rd = Cost of debt</li>
                        <li>Tc = Tax rate</li>
                      </ul>
                    </div>
                  </div>
                )}

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={useWaccInDcf}
                    disabled={calculatedWacc === null}
                    className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed font-medium"
                  >
                    Use in DCF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DCFValuationCalculator;