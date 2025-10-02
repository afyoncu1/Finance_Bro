// Compound Interest Calculator
export const calculateCompoundInterest = (
  principal: number,
  rate: number,
  time: number,
  compound: number,
  monthlyContribution: number = 0
): { finalAmount: number; totalInterest: number; monthlyContributions: number } => {
  const r = rate / 100;
  const n = compound;
  const t = time;
  
  // Future value of principal
  const principalFV = principal * Math.pow(1 + r / n, n * t);
  
  // Future value of monthly contributions (annuity)
  let contributionsFV = 0;
  if (monthlyContribution > 0) {
    const monthlyRate = r / 12;
    const totalMonths = t * 12;
    contributionsFV = monthlyContribution * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);
  }
  
  const finalAmount = principalFV + contributionsFV;
  const totalContributions = monthlyContribution * 12 * t;
  const totalInterest = finalAmount - principal - totalContributions;
  
  return {
    finalAmount,
    totalInterest,
    monthlyContributions: totalContributions
  };
};

// Mortgage Calculator
export const calculateMortgage = (
  principal: number,
  rate: number,
  years: number
): { monthlyPayment: number; totalPayment: number; totalInterest: number } => {
  const monthlyRate = rate / 100 / 12;
  const totalPayments = years * 12;
  
  const monthlyPayment = principal * 
    (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
    (Math.pow(1 + monthlyRate, totalPayments) - 1);
  
  const totalPayment = monthlyPayment * totalPayments;
  const totalInterest = totalPayment - principal;
  
  return {
    monthlyPayment,
    totalPayment,
    totalInterest
  };
};

// Black-Scholes Option Pricing
export const calculateBlackScholes = (
  S: number, // Current stock price
  K: number, // Strike price
  T: number, // Time to expiration (in years)
  r: number, // Risk-free rate
  sigma: number // Volatility
): { callPrice: number; putPrice: number; delta: number; gamma: number; theta: number; vega: number; rho: number } => {
  const d1 = (Math.log(S / K) + (r + 0.5 * sigma * sigma) * T) / (sigma * Math.sqrt(T));
  const d2 = d1 - sigma * Math.sqrt(T);
  
  const N = (x: number) => 0.5 * (1 + erf(x / Math.sqrt(2)));
  const n = (x: number) => Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI);
  
  const callPrice = S * N(d1) - K * Math.exp(-r * T) * N(d2);
  const putPrice = K * Math.exp(-r * T) * N(-d2) - S * N(-d1);
  
  const delta = N(d1);
  const gamma = n(d1) / (S * sigma * Math.sqrt(T));
  const theta = (-S * n(d1) * sigma / (2 * Math.sqrt(T)) - r * K * Math.exp(-r * T) * N(d2)) / 365;
  const vega = S * n(d1) * Math.sqrt(T) / 100;
  const rho = K * T * Math.exp(-r * T) * N(d2) / 100;
  
  return { callPrice, putPrice, delta, gamma, theta, vega, rho };
};

// Error function approximation for Black-Scholes
const erf = (x: number): number => {
  const a1 =  0.254829592;
  const a2 = -0.284496736;
  const a3 =  1.421413741;
  const a4 = -1.453152027;
  const a5 =  1.061405429;
  const p  =  0.3275911;
  
  const sign = x >= 0 ? 1 : -1;
  x = Math.abs(x);
  
  const t = 1.0 / (1.0 + p * x);
  const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
  
  return sign * y;
};

// Bond Price Calculator
export const calculateBondPrice = (
  faceValue: number,
  couponRate: number,
  yieldRate: number,
  yearsToMaturity: number,
  paymentsPerYear: number = 2
): { price: number; currentYield: number; duration: number } => {
  const periodsToMaturity = yearsToMaturity * paymentsPerYear;
  const couponPayment = (faceValue * couponRate / 100) / paymentsPerYear;
  const yieldPerPeriod = yieldRate / 100 / paymentsPerYear;
  
  let price = 0;
  let duration = 0;
  
  // Present value of coupon payments
  for (let i = 1; i <= periodsToMaturity; i++) {
    const pv = couponPayment / Math.pow(1 + yieldPerPeriod, i);
    price += pv;
    duration += (i / paymentsPerYear) * pv;
  }
  
  // Present value of face value
  const pvFaceValue = faceValue / Math.pow(1 + yieldPerPeriod, periodsToMaturity);
  price += pvFaceValue;
  duration += yearsToMaturity * pvFaceValue;
  
  duration = duration / price;
  const currentYield = (faceValue * couponRate / 100) / price * 100;
  
  return { price, currentYield, duration };
};

// Currency exchange rates (static for demo - in production, use API)
export const exchangeRates: { [key: string]: number } = {
  'USD': 1,
  'EUR': 0.85,
  'GBP': 0.73,
  'JPY': 110,
  'CAD': 1.25,
  'AUD': 1.35,
  'CHF': 0.92,
  'CNY': 6.45,
  'INR': 74.5,
  'BRL': 5.2
};

export const convertCurrency = (amount: number, from: string, to: string): number => {
  const usdAmount = amount / exchangeRates[from];
  return usdAmount * exchangeRates[to];
};