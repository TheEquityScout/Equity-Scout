/**
 * Project Payback - Financing Calculator Component
 * Calculate loan payments and financing options
 */

import React, { useState, useMemo } from 'react';
import { formatCurrency } from '../utils/calculations';

interface FinancingCalculatorProps {
  projectCost: number;
}

interface LoanCalculation {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  loanAmount: number;
}

export const FinancingCalculator: React.FC<FinancingCalculatorProps> = ({ projectCost }) => {
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTermYears, setLoanTermYears] = useState(15);
  const [showDetails, setShowDetails] = useState(false);

  const calculations = useMemo<LoanCalculation>(() => {
    const downPayment = (projectCost * downPaymentPercent) / 100;
    const loanAmount = projectCost - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTermYears * 12;

    // Monthly payment formula: M = P * [r(1+r)^n] / [(1+r)^n - 1]
    const monthlyPayment =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - loanAmount;

    return {
      monthlyPayment: isFinite(monthlyPayment) ? monthlyPayment : 0,
      totalPayment: isFinite(totalPayment) ? totalPayment : 0,
      totalInterest: isFinite(totalInterest) ? totalInterest : 0,
      loanAmount,
    };
  }, [projectCost, downPaymentPercent, interestRate, loanTermYears]);

  const downPaymentAmount = (projectCost * downPaymentPercent) / 100;

  return (
    <div className="financing-calculator mt-8 bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h3 className="text-xl font-bold text-gray-800 mb-4">💰 Financing Calculator</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Inputs */}
        <div className="space-y-4">
          {/* Down Payment */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Down Payment: {downPaymentPercent}%
            </label>
            <input
              type="range"
              min="0"
              max="50"
              step="5"
              value={downPaymentPercent}
              onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
              className="w-full"
            />
            <p className="text-sm text-gray-600 mt-1">{formatCurrency(downPaymentAmount)}</p>
          </div>

          {/* Interest Rate */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Interest Rate: {interestRate.toFixed(2)}%
            </label>
            <input
              type="range"
              min="2"
              max="10"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full"
            />
            <p className="text-xs text-gray-500 mt-1">
              Current market rates: 5.5% - 8.5% (varies by credit)
            </p>
          </div>

          {/* Loan Term */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Loan Term: {loanTermYears} years
            </label>
            <div className="flex space-x-2">
              {[5, 10, 15, 20, 30].map((term) => (
                <button
                  key={term}
                  onClick={() => setLoanTermYears(term)}
                  className={`px-3 py-2 rounded text-sm font-semibold transition ${
                    loanTermYears === term
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {term}yr
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-3">
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <p className="text-sm text-gray-600 font-semibold">Monthly Payment</p>
            <p className="text-3xl font-bold text-blue-600">
              {formatCurrency(calculations.monthlyPayment)}
            </p>
          </div>

          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <p className="text-sm text-gray-600 font-semibold">Loan Amount</p>
            <p className="text-2xl font-bold text-green-600">
              {formatCurrency(calculations.loanAmount)}
            </p>
          </div>

          <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
            <p className="text-sm text-gray-600 font-semibold">Total Interest Paid</p>
            <p className="text-2xl font-bold text-purple-600">
              {formatCurrency(calculations.totalInterest)}
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Breakdown */}
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="mt-4 text-blue-600 hover:text-blue-800 font-semibold text-sm"
      >
        {showDetails ? '▼ Hide Details' : '▶ Show Details'}
      </button>

      {showDetails && (
        <div className="mt-4 bg-gray-50 rounded-lg p-4 border border-gray-200">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600">Project Cost</p>
              <p className="font-bold text-gray-800">{formatCurrency(projectCost)}</p>
            </div>
            <div>
              <p className="text-gray-600">Down Payment</p>
              <p className="font-bold text-gray-800">{formatCurrency(downPaymentAmount)}</p>
            </div>
            <div>
              <p className="text-gray-600">Loan Amount</p>
              <p className="font-bold text-gray-800">{formatCurrency(calculations.loanAmount)}</p>
            </div>
            <div>
              <p className="text-gray-600">Monthly Payment</p>
              <p className="font-bold text-gray-800">{formatCurrency(calculations.monthlyPayment)}</p>
            </div>
            <div>
              <p className="text-gray-600">Total Payments ({loanTermYears}yr)</p>
              <p className="font-bold text-gray-800">{formatCurrency(calculations.totalPayment)}</p>
            </div>
            <div>
              <p className="text-gray-600">Total Interest</p>
              <p className="font-bold text-red-600">{formatCurrency(calculations.totalInterest)}</p>
            </div>
          </div>

          {/* Comparison */}
          <div className="mt-4 pt-4 border-t border-gray-300">
            <p className="text-sm font-semibold text-gray-700 mb-2">Financing Options Comparison</p>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span>Cash (No Financing)</span>
                <span className="font-bold">{formatCurrency(projectCost)}</span>
              </div>
              <div className="flex justify-between">
                <span>With 15-Year Loan @ {interestRate.toFixed(2)}%</span>
                <span className="font-bold">{formatCurrency(calculations.totalPayment)}</span>
              </div>
              <div className="flex justify-between text-red-600">
                <span>Extra Cost (Interest)</span>
                <span className="font-bold">{formatCurrency(calculations.totalInterest)}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Info Box */}
      <div className="mt-4 bg-blue-100 border-l-4 border-blue-500 p-3 rounded">
        <p className="text-xs text-blue-900">
          <strong>Note:</strong> This is a simplified calculator for estimation purposes. Actual loan
          terms, rates, and payments depend on your credit score, lender, and market conditions.
          Consult with your lender for accurate quotes.
        </p>
      </div>
    </div>
  );
};

export default FinancingCalculator;
