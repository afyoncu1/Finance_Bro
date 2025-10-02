import { Calculator } from '../types/calculators';

export const calculators: Calculator[] = [
  // Basic Level
  {
    id: 'simple-interest',
    name: 'Simple Interest',
    description: 'Calculate simple interest on your investments',
    icon: 'Calculator',
    level: 'basic'
  },
  {
    id: 'compound-interest',
    name: 'Compound Interest',
    description: 'See how your money grows with compound interest',
    icon: 'TrendingUp',
    level: 'basic'
  },
  {
    id: 'currency-converter',
    name: 'Currency Converter',
    description: 'Convert between different currencies',
    icon: 'DollarSign',
    level: 'basic'
  },
  {
    id: 'percentage',
    name: 'Percentage Calculator',
    description: 'Calculate percentages, markups, and discounts',
    icon: 'Percent',
    level: 'basic'
  },
  {
    id: 'tip-calculator',
    name: 'Tip Calculator',
    description: 'Calculate tips and split bills',
    icon: 'Receipt',
    level: 'basic'
  },
  {
    id: 'investment-growth',
    name: 'Investment Growth',
    description: 'Track your investment growth over time',
    icon: 'LineChart',
    level: 'basic'
  },

  // Intermediate Level
  {
    id: 'mortgage',
    name: 'Mortgage Calculator',
    description: 'Calculate monthly mortgage payments',
    icon: 'Home',
    level: 'intermediate'
  },
  {
    id: 'bond-yield',
    name: 'Bond Calculator',
    description: 'Calculate bond prices and yields',
    icon: 'FileText',
    level: 'intermediate'
  },
  {
    id: 'loan-payment',
    name: 'Loan Payment',
    description: 'Calculate loan payments and schedules',
    icon: 'CreditCard',
    level: 'intermediate'
  },
  {
    id: 'retirement-planning',
    name: 'Retirement Planning',
    description: 'Plan for your retirement savings',
    icon: 'PiggyBank',
    level: 'intermediate'
  },
  {
    id: 'tax-calculator',
    name: 'Tax Calculator',
    description: 'Estimate your tax obligations',
    icon: 'FileX',
    level: 'intermediate'
  },
  {
    id: 'present-value',
    name: 'Present/Future Value',
    description: 'Calculate time value of money',
    icon: 'Clock',
    level: 'intermediate'
  },

  // Advanced Level
  {
    id: 'black-scholes',
    name: 'Black-Scholes',
    description: 'Option pricing using Black-Scholes model',
    icon: 'BarChart3',
    level: 'advanced'
  },
  {
    id: 'portfolio-optimization',
    name: 'Portfolio Optimization',
    description: 'Optimize your investment portfolio',
    icon: 'Target',
    level: 'advanced'
  },
  {
    id: 'value-at-risk',
    name: 'Value at Risk (VaR)',
    description: 'Calculate potential portfolio losses',
    icon: 'AlertTriangle',
    level: 'advanced'
  },
  {
    id: 'capm',
    name: 'CAPM Calculator',
    description: 'Capital Asset Pricing Model calculations',
    icon: 'TrendingUp',
    level: 'advanced'
  },
  {
    id: 'bond-duration',
    name: 'Bond Duration & Convexity',
    description: 'Advanced bond risk metrics',
    icon: 'Activity',
    level: 'advanced'
  },
  {
    id: 'dcf-valuation',
    name: 'DCF Valuation',
    description: 'Discounted Cash Flow company valuation',
    icon: 'Calculator',
    level: 'advanced'
  },
  {
    id: 'comparative-analysis',
    name: 'Comparative Analysis',
    description: 'Company valuation using multiples',
    icon: 'BarChart2',
    level: 'advanced'
  }
];