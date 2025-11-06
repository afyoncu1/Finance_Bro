import React from 'react';
import { ArrowLeft } from 'lucide-react';
import logo from '../assets/7ac4c4e4-a13a-4f94-8389-e4dddfb3b277 copy.png';

interface HeaderProps {
  currentView: string;
  onBack: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onBack }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-24 md:h-28">
          <div className="flex items-center space-x-3">
            {currentView !== 'category-selection' && (
              <button
                onClick={onBack}
                className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
            )}
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Finance Bro" className="h-20 md:h-24 w-auto" />
              <p className="text-base md:text-lg text-gray-700 font-bold">Professional Financial Calculators</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;