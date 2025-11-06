import React from 'react';
import { calculators } from '../data/calculators';
import { Calculator } from '../types/calculators';
import * as Icons from 'lucide-react';
import logo from '../assets/7ac4c4e4-a13a-4f94-8389-e4dddfb3b277.png';

interface LandingProps {
  onSelectCalculator: (calculatorId: string) => void;
}

const Landing: React.FC<LandingProps> = ({ onSelectCalculator }) => {
  const basicCalculators = calculators.filter(calc => calc.level === 'basic');
  const intermediateCalculators = calculators.filter(calc => calc.level === 'intermediate');
  const advancedCalculators = calculators.filter(calc => calc.level === 'advanced');

  const renderCalculatorCard = (calculator: Calculator) => {
    const IconComponent = Icons[calculator.icon as keyof typeof Icons] as React.ComponentType<any>;
    
    return (
      <div
        key={calculator.id}
        onClick={() => onSelectCalculator(calculator.id)}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-blue-300 transition-all duration-200 cursor-pointer group"
      >
        <div className="flex items-start space-x-4">
          <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
            <IconComponent className="h-6 w-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {calculator.name}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {calculator.description}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const renderSection = (title: string, calculators: Calculator[], color: string) => (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className={`text-2xl font-bold text-${color}-600 mb-2`}>{title}</h2>
        <div className={`h-1 w-20 bg-${color}-600 mx-auto rounded-full`}></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {calculators.map(renderCalculatorCard)}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <img src={logo} alt="Finance Bro" className="h-24 mx-auto mb-8" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Financial Calculators
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From basic interest calculations to advanced option pricing models,
            Finance Bro provides all the tools you need for financial analysis.
          </p>
        </div>

        {/* Calculator Sections */}
        {renderSection('Basic Calculators', basicCalculators, 'green')}
        {renderSection('Intermediate Calculators', intermediateCalculators, 'blue')}
        {renderSection('Advanced Calculators', advancedCalculators, 'purple')}
      </div>
    </div>
  );
};

export default Landing;