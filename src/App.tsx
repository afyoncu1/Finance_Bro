import React, { useState } from 'react';
import Header from './components/Header';
import CategorySelection from './components/CategorySelection';
import CategoryLanding from './components/CategoryLanding';
import CompoundInterestCalculator from './components/calculators/CompoundInterestCalculator';
import SimpleInterestCalculator from './components/calculators/SimpleInterestCalculator';
import CurrencyConverter from './components/calculators/CurrencyConverter';
import MortgageCalculator from './components/calculators/MortgageCalculator';
import BlackScholesCalculator from './components/calculators/BlackScholesCalculator';
import BondCalculator from './components/calculators/BondCalculator';
import PercentageCalculator from './components/calculators/PercentageCalculator';
import TipCalculator from './components/calculators/TipCalculator';
import InvestmentGrowthCalculator from './components/calculators/InvestmentGrowthCalculator';
import LoanPaymentCalculator from './components/calculators/LoanPaymentCalculator';
import RetirementPlanningCalculator from './components/calculators/RetirementPlanningCalculator';
import TaxCalculator from './components/calculators/TaxCalculator';
import PresentValueCalculator from './components/calculators/PresentValueCalculator';
import PortfolioOptimizationCalculator from './components/calculators/PortfolioOptimizationCalculator';
import ValueAtRiskCalculator from './components/calculators/ValueAtRiskCalculator';
import CAPMCalculator from './components/calculators/CAPMCalculator';
import BondDurationCalculator from './components/calculators/BondDurationCalculator';
import DCFValuationCalculator from './components/calculators/DCFValuationCalculator';
import ComparativeAnalysisCalculator from './components/calculators/ComparativeAnalysisCalculator';

function App() {
  const [currentView, setCurrentView] = useState<string>('category-selection');
  const [selectedCategory, setSelectedCategory] = useState<'basic' | 'intermediate' | 'advanced' | null>(null);

  const handleSelectCalculator = (calculatorId: string) => {
    setCurrentView(calculatorId);
  };

  const handleSelectCategory = (category: 'basic' | 'intermediate' | 'advanced') => {
    setSelectedCategory(category);
    setCurrentView('category-landing');
  };

  const handleBack = () => {
    if (currentView === 'category-landing') {
      setCurrentView('category-selection');
      setSelectedCategory(null);
    } else {
      setCurrentView('category-landing');
    }
  };

  const renderCalculator = () => {
    switch (currentView) {
      case 'category-selection':
        return <CategorySelection onSelectCategory={handleSelectCategory} />;
      case 'category-landing':
        return selectedCategory ? (
          <CategoryLanding 
            category={selectedCategory} 
            onSelectCalculator={handleSelectCalculator}
            onBack={handleBack}
          />
        ) : <CategorySelection onSelectCategory={handleSelectCategory} />;
      case 'simple-interest':
        return <SimpleInterestCalculator />;
      case 'compound-interest':
        return <CompoundInterestCalculator />;
      case 'currency-converter':
        return <CurrencyConverter />;
      case 'percentage':
        return <PercentageCalculator />;
      case 'tip-calculator':
        return <TipCalculator />;
      case 'mortgage':
        return <MortgageCalculator />;
      case 'bond-yield':
        return <BondCalculator />;
      case 'black-scholes':
        return <BlackScholesCalculator />;
      case 'investment-growth':
        return <InvestmentGrowthCalculator />;
      case 'loan-payment':
        return <LoanPaymentCalculator />;
      case 'retirement-planning':
        return <RetirementPlanningCalculator />;
      case 'tax-calculator':
        return <TaxCalculator />;
      case 'present-value':
        return <PresentValueCalculator />;
      case 'portfolio-optimization':
        return <PortfolioOptimizationCalculator />;
      case 'value-at-risk':
        return <ValueAtRiskCalculator />;
      case 'capm':
        return <CAPMCalculator />;
      case 'bond-duration':
        return <BondDurationCalculator />;
      case 'dcf-valuation':
        return <DCFValuationCalculator />;
      case 'comparative-analysis':
        return <ComparativeAnalysisCalculator />;
      default:
        return <CategorySelection onSelectCategory={handleSelectCategory} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentView={currentView} 
        onBack={handleBack}
      />
      {renderCalculator()}
    </div>
  );
}

export default App;