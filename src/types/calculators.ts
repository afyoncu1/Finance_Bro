export interface Calculator {
  id: string;
  name: string;
  description: string;
  icon: string;
  level: 'basic' | 'intermediate' | 'advanced';
}

export interface CompoundInterestResult {
  finalAmount: number;
  totalInterest: number;
  monthlyContributions: number;
}

export interface MortgageResult {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  schedule?: PaymentScheduleItem[];
}

export interface PaymentScheduleItem {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

export interface BlackScholesResult {
  callPrice: number;
  putPrice: number;
  delta: number;
  gamma: number;
  theta: number;
  vega: number;
  rho: number;
}

export interface BondResult {
  price: number;
  currentYield: number;
  yieldToMaturity: number;
  duration: number;
  convexity: number;
}