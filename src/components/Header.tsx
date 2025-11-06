import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Logo from './Logo';

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
            <div className="flex flex-col space-y-1">
              <Logo className="h-16 md:h-20 w-auto" />
              <p className="text-xs md:text-sm text-gray-500 font-semibold">Professional Financial Calculators</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;