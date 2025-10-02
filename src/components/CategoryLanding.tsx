import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { calculators } from '../data/calculators';
import { Calculator } from '../types/calculators';
import * as Icons from 'lucide-react';

interface CategoryLandingProps {
  category: 'basic' | 'intermediate' | 'advanced';
  onSelectCalculator: (calculatorId: string) => void;
  onBack: () => void;
}

const CategoryLanding: React.FC<CategoryLandingProps> = ({ category, onSelectCalculator, onBack }) => {
  const categoryCalculators = calculators.filter(calc => calc.level === category);
  
  const categoryInfo = {
    basic: {
      title: 'Basic Calculators',
      description: 'Essential financial calculations for everyday use',
      color: 'green'
    },
    intermediate: {
      title: 'Intermediate Calculators',
      description: 'Advanced planning tools for major financial decisions',
      color: 'blue'
    },
    advanced: {
      title: 'Advanced Calculators',
      description: 'Professional-grade financial modeling and analysis',
      color: 'purple'
    }
  };

  const info = categoryInfo[category];

  const renderCalculatorCard = (calculator: Calculator) => {
    const IconComponent = Icons[calculator.icon as keyof typeof Icons] as React.ComponentType<any>;
    
    return (
      <div
        key={calculator.id}
        onClick={() => onSelectCalculator(calculator.id)}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-blue-300 transition-all duration-200 cursor-pointer group"
      >
        <div className="flex items-start space-x-4">
          <div className={`bg-${info.color}-50 p-3 rounded-lg group-hover:bg-${info.color}-100 transition-colors`}>
            <IconComponent className={`h-6 w-6 text-${info.color}-600`} />
          </div>
          <div className="flex-1">
            <h3 className={`font-semibold text-gray-900 group-hover:text-${info.color}-600 transition-colors`}>
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        {/* Header with Back Button */}
        <div className="flex items-center mb-4 md:mb-8">
          <button
            onClick={onBack}
            className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors mr-2 md:mr-4"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div>
            <h1 className={`text-xl md:text-3xl font-bold text-${info.color}-600`}>
              {info.title}
            </h1>
            <p className="text-sm md:text-base text-gray-600 mt-1">
              {info.description}
            </p>
          </div>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {categoryCalculators.map(renderCalculatorCard)}
        </div>
      </div>
    </div>
  );
};

export default CategoryLanding;