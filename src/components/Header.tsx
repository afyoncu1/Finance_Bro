import React from 'react';
import { ArrowLeft, Shirt } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onBack: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onBack }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          <div className="flex items-center space-x-4">
            {currentView !== 'category-selection' && (
              <button
                onClick={onBack}
                className="p-1 md:p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
              </button>
            )}
            <div className="flex items-center space-x-2 md:space-x-3">
              <div className="bg-blue-900 p-1.5 md:p-2 rounded-lg">
                <Shirt className="h-4 w-4 md:h-6 md:w-6 text-white" />
              </div>
              <div>
                <h1 className="text-base md:text-xl font-bold text-gray-900">Finance Bro</h1>
                <p className="text-xs md:text-sm text-gray-500 hidden sm:block">Professional Financial Calculators</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;