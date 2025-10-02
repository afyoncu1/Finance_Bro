import React, { useState, useEffect } from 'react';

const ComparativeAnalysisCalculator: React.FC = () => {
  const [targetRevenue, setTargetRevenue] = useState<string>('500000000');
  const [targetEbitda, setTargetEbitda] = useState<string>('100000000');
  const [targetEarnings, setTargetEarnings] = useState<string>('75000000');
  const [targetShares, setTargetShares] = useState<string>('50000000');
  
  // Comparable companies data
  const [comp1Revenue, setComp1Revenue] = useState<string>('1000000000');
  const [comp1EV, setComp1EV] = useState<string>('5000000000');
  const [comp1Ebitda, setComp1Ebitda] = useState<string>('200000000');
  const [comp1Earnings, setComp1Earnings] = useState<string>('150000000');
  const [comp1MarketCap, setComp1MarketCap] = useState<string>('4500000000');
  
  const [comp2Revenue, setComp2Revenue] = useState<string>('800000000');
  const [comp2EV, setComp2EV] = useState<string>('4000000000');
  const [comp2Ebitda, setComp2Ebitda] = useState<string>('160000000');
  const [comp2Earnings, setComp2Earnings] = useState<string>('120000000');
  const [comp2MarketCap, setComp2MarketCap] = useState<string>('3600000000');
  
  const [comp3Revenue, setComp3Revenue] = useState<string>('1200000000');
  const [comp3EV, setComp3EV] = useState<string>('6000000000');
  const [comp3Ebitda, setComp3Ebitda] = useState<string>('240000000');
  const [comp3Earnings, setComp3Earnings] = useState<string>('180000000');
  const [comp3MarketCap, setComp3MarketCap] = useState<string>('5400000000');
  
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    if (targetRevenue && targetEbitda && targetEarnings && targetShares) {
      const target = {
        revenue: parseFloat(targetRevenue),
        ebitda: parseFloat(targetEbitda),
        earnings: parseFloat(targetEarnings),
        shares: parseFloat(targetShares)
      };

      const comps = [
        {
          revenue: parseFloat(comp1Revenue),
          ev: parseFloat(comp1EV),
          ebitda: parseFloat(comp1Ebitda),
          earnings: parseFloat(comp1Earnings),
          marketCap: parseFloat(comp1MarketCap)
        },
        {
          revenue: parseFloat(comp2Revenue),
          ev: parseFloat(comp2EV),
          ebitda: parseFloat(comp2Ebitda),
          earnings: parseFloat(comp2Earnings),
          marketCap: parseFloat(comp2MarketCap)
        },
        {
          revenue: parseFloat(comp3Revenue),
          ev: parseFloat(comp3EV),
          ebitda: parseFloat(comp3Ebitda),
          earnings: parseFloat(comp3Earnings),
          marketCap: parseFloat(comp3MarketCap)
        }
      ];

      // Calculate multiples for each comparable
      const multiples = comps.map(comp => ({
        evRevenue: comp.ev / comp.revenue,
        evEbitda: comp.ev / comp.ebitda,
        peRatio: comp.marketCap / comp.earnings
      }));

      // Calculate median multiples
      const evRevenueMultiples = multiples.map(m => m.evRevenue).sort((a, b) => a - b);
      const evEbitdaMultiples = multiples.map(m => m.evEbitda).sort((a, b) => a - b);
      const peMultiples = multiples.map(m => m.peRatio).sort((a, b) => a - b);

      const medianEVRevenue = evRevenueMultiples[1];
      const medianEVEbitda = evEbitdaMultiples[1];
      const medianPE = peMultiples[1];

      // Apply multiples to target company
      const evByRevenue = target.revenue * medianEVRevenue;
      const evByEbitda = target.ebitda * medianEVEbitda;
      const marketCapByEarnings = target.earnings * medianPE;

      // Calculate implied share prices
      const sharePriceByRevenue = evByRevenue / target.shares;
      const sharePriceByEbitda = evByEbitda / target.shares;
      const sharePriceByEarnings = marketCapByEarnings / target.shares;

      // Calculate average valuation
      const averageEV = (evByRevenue + evByEbitda) / 2;
      const averageMarketCap = (averageEV + marketCapByEarnings) / 2;
      const averageSharePrice = (sharePriceByRevenue + sharePriceByEbitda + sharePriceByEarnings) / 3;

      setResult({
        multiples,
        medianEVRevenue,
        medianEVEbitda,
        medianPE,
        evByRevenue,
        evByEbitda,
        marketCapByEarnings,
        sharePriceByRevenue,
        sharePriceByEbitda,
        sharePriceByEarnings,
        averageEV,
        averageMarketCap,
        averageSharePrice
      });
    }
  }, [targetRevenue, targetEbitda, targetEarnings, targetShares, 
      comp1Revenue, comp1EV, comp1Ebitda, comp1Earnings, comp1MarketCap,
      comp2Revenue, comp2EV, comp2Ebitda, comp2Earnings, comp2MarketCap,
      comp3Revenue, comp3EV, comp3Ebitda, comp3Earnings, comp3MarketCap]);

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8 py-4 md:py-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Comparative Analysis Calculator</h2>
        <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">Value companies using trading multiples from comparable companies</p>
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6">
          {/* Target Company */}
          <div className="bg-blue-50 rounded-lg p-4 md:p-6">
            <h3 className="text-base md:text-lg font-semibold text-blue-900 mb-4">Target Company</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                  Revenue ($)
                </label>
                <input
                  type="number"
                  value={targetRevenue}
                  onChange={(e) => setTargetRevenue(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                  EBITDA ($)
                </label>
                <input
                  type="number"
                  value={targetEbitda}
                  onChange={(e) => setTargetEbitda(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                  Net Earnings ($)
                </label>
                <input
                  type="number"
                  value={targetEarnings}
                  onChange={(e) => setTargetEarnings(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                  Shares Outstanding
                </label>
                <input
                  type="number"
                  value={targetShares}
                  onChange={(e) => setTargetShares(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Comparable Companies */}
          <div className="bg-gray-50 rounded-lg p-4 md:p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">Comparable Companies</h3>
            
            {/* Company 1 */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-800 mb-3">Company 1</h4>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  placeholder="Revenue"
                  value={comp1Revenue}
                  onChange={(e) => setComp1Revenue(e.target.value)}
                  className="px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                />
                <input
                  type="number"
                  placeholder="Enterprise Value"
                  value={comp1EV}
                  onChange={(e) => setComp1EV(e.target.value)}
                  className="px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                />
                <input
                  type="number"
                  placeholder="EBITDA"
                  value={comp1Ebitda}
                  onChange={(e) => setComp1Ebitda(e.target.value)}
                  className="px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                />
                <input
                  type="number"
                  placeholder="Earnings"
                  value={comp1Earnings}
                  onChange={(e) => setComp1Earnings(e.target.value)}
                  className="px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                />
                <input
                  type="number"
                  placeholder="Market Cap"
                  value={comp1MarketCap}
                  onChange={(e) => setComp1MarketCap(e.target.value)}
                  className="px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 col-span-2"
                />
              </div>
            </div>

            {/* Company 2 */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-800 mb-3">Company 2</h4>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  placeholder="Revenue"
                  value={comp2Revenue}
                  onChange={(e) => setComp2Revenue(e.target.value)}
                  className="px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                />
                <input
                  type="number"
                  placeholder="Enterprise Value"
                  value={comp2EV}
                  onChange={(e) => setComp2EV(e.target.value)}
                  className="px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                />
                <input
                  type="number"
                  placeholder="EBITDA"
                  value={comp2Ebitda}
                  onChange={(e) => setComp2Ebitda(e.target.value)}
                  className="px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                />
                <input
                  type="number"
                  placeholder="Earnings"
                  value={comp2Earnings}
                  onChange={(e) => setComp2Earnings(e.target.value)}
                  className="px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                />
                <input
                  type="number"
                  placeholder="Market Cap"
                  value={comp2MarketCap}
                  onChange={(e) => setComp2MarketCap(e.target.value)}
                  className="px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 col-span-2"
                />
              </div>
            </div>

            {/* Company 3 */}
            <div>
              <h4 className="text-sm font-medium text-gray-800 mb-3">Company 3</h4>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  placeholder="Revenue"
                  value={comp3Revenue}
                  onChange={(e) => setComp3Revenue(e.target.value)}
                  className="px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                />
                <input
                  type="number"
                  placeholder="Enterprise Value"
                  value={comp3EV}
                  onChange={(e) => setComp3EV(e.target.value)}
                  className="px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                />
                <input
                  type="number"
                  placeholder="EBITDA"
                  value={comp3Ebitda}
                  onChange={(e) => setComp3Ebitda(e.target.value)}
                  className="px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                />
                <input
                  type="number"
                  placeholder="Earnings"
                  value={comp3Earnings}
                  onChange={(e) => setComp3Earnings(e.target.value)}
                  className="px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                />
                <input
                  type="number"
                  placeholder="Market Cap"
                  value={comp3MarketCap}
                  onChange={(e) => setComp3MarketCap(e.target.value)}
                  className="px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 col-span-2"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-green-50 rounded-lg p-4 md:p-6">
            <h3 className="text-base md:text-lg font-semibold text-green-900 mb-4">Valuation Results</h3>
            {result && (
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-xs md:text-sm text-gray-600">Average Share Price</p>
                  <p className="text-lg md:text-2xl font-bold text-green-600">
                    ${result.averageSharePrice.toFixed(2)}
                  </p>
                </div>

                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <h4 className="text-xs font-medium text-gray-900 mb-2">Median Multiples</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span>EV/Revenue:</span>
                      <span className="font-medium">{result.medianEVRevenue.toFixed(1)}x</span>
                    </div>
                    <div className="flex justify-between">
                      <span>EV/EBITDA:</span>
                      <span className="font-medium">{result.medianEVEbitda.toFixed(1)}x</span>
                    </div>
                    <div className="flex justify-between">
                      <span>P/E Ratio:</span>
                      <span className="font-medium">{result.medianPE.toFixed(1)}x</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <h4 className="text-xs font-medium text-gray-900 mb-2">Share Price by Multiple</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span>By Revenue:</span>
                      <span className="font-medium">${result.sharePriceByRevenue.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>By EBITDA:</span>
                      <span className="font-medium">${result.sharePriceByEbitda.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>By Earnings:</span>
                      <span className="font-medium">${result.sharePriceByEarnings.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <h4 className="text-xs font-medium text-gray-900 mb-2">Implied Valuations</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span>Enterprise Value:</span>
                      <span className="font-medium">${(result.averageEV / 1000000).toFixed(0)}M</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Market Cap:</span>
                      <span className="font-medium">${(result.averageMarketCap / 1000000).toFixed(0)}M</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2 text-xs">Analysis Method</h4>
                  <div className="text-xs text-blue-700 space-y-1">
                    <p>• Uses median multiples from comps</p>
                    <p>• EV/Revenue & EV/EBITDA multiples</p>
                    <p>• P/E ratio for equity valuation</p>
                    <p>• Average of all methods</p>
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

export default ComparativeAnalysisCalculator;