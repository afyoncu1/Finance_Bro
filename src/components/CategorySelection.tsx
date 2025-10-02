import React from 'react';
import { Calculator, TrendingUp, Target } from 'lucide-react';

interface CategorySelectionProps {
  onSelectCategory: (category: 'basic' | 'intermediate' | 'advanced') => void;
}

const CategorySelection: React.FC<CategorySelectionProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      id: 'basic' as const,
      name: 'Basic',
      description: 'Essential financial calculations for everyday use',
      icon: Calculator,
      color: 'green',
      calculators: ['Simple Interest', 'Compound Interest', 'Currency Converter', 'Percentage Calculator', 'Tip Calculator', 'Investment Growth']
    },
    {
      id: 'intermediate' as const,
      name: 'Intermediate',
      description: 'Advanced planning tools for major financial decisions',
      icon: TrendingUp,
      color: 'blue',
      calculators: ['Mortgage Calculator', 'Bond Calculator', 'Loan Payment', 'Retirement Planning', 'Tax Calculator', 'Present/Future Value']
    },
    {
      id: 'advanced' as const,
      name: 'Advanced',
      description: 'Professional-grade financial modeling and analysis',
      icon: Target,
      color: 'purple',
      calculators: ['Black-Scholes', 'Portfolio Optimization', 'Value at Risk (VaR)', 'CAPM Calculator', 'Bond Duration & Convexity', 'DCF Valuation', 'Comparative Analysis']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4 px-4">
            Choose Your Calculator Level
          </h1>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Select the category that best matches your financial calculation needs
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto px-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className={`bg-white rounded-xl md:rounded-2xl shadow-lg border-2 border-transparent hover:border-${category.color}-300 hover:shadow-xl transition-all duration-300 cursor-pointer group p-4 md:p-8`}
              >
                <div className="text-center">
                  <div className={`bg-${category.color}-100 p-3 md:p-6 rounded-full w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 group-hover:bg-${category.color}-200 transition-colors`}>
                    <IconComponent className={`h-8 w-8 md:h-12 md:w-12 text-${category.color}-600 mx-auto`} />
                  </div>
                  
                  <h2 className={`text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-${category.color}-600 transition-colors`}>
                    {category.name}
                  </h2>
                  
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="space-y-2 md:space-y-2">
                    <h4 className="font-medium text-gray-900 text-xs md:text-sm">Includes:</h4>
                    <div className="text-xs md:text-sm text-gray-600 space-y-1">
                      {category.calculators.map((calc, index) => (
                        <div key={index} className="flex items-center justify-center">
                          <span className={`w-1.5 h-1.5 md:w-2 md:h-2 bg-${category.color}-400 rounded-full mr-2`}></span>
                          <span>{calc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className={`mt-4 md:mt-8 w-full bg-${category.color}-600 text-white py-2 md:py-3 px-4 md:px-6 rounded-lg text-sm md:text-base font-semibold hover:bg-${category.color}-700 transition-colors`}>
                    Explore {category.name} Calculators
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8 md:mt-16 px-4">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 md:p-8 max-w-4xl mx-auto">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
              Not sure which level to choose?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-xs md:text-sm text-gray-600">
              <div>
                <h4 className="font-medium text-green-600 mb-1 md:mb-2">Basic Level</h4>
                <p>Perfect for personal finance, budgeting, and simple investment calculations</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-600 mb-1 md:mb-2">Intermediate Level</h4>
                <p>Ideal for major purchases, retirement planning, and tax calculations</p>
              </div>
              <div>
                <h4 className="font-medium text-purple-600 mb-1 md:mb-2">Advanced Level</h4>
                <p>Designed for professional traders, portfolio managers, and financial analysts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySelection;