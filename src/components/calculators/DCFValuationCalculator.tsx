import React, { useState, useEffect } from 'react';

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
              <input
                type="number"
                step="0.1"
                value={wacc}
                onChange={(e) => setWacc(e.target.value)}
                className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                Terminal Growth Rate (%)
              </label>
              <input
                type="number"
                step="0.1"
                value={terminalGrowth}
                onChange={(e) => setTerminalGrowth(e.target.value)}
                className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
    </div>
  );
};

export default DCFValuationCalculator;