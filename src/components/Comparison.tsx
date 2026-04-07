/**
 * Project Payback - Comparison Component
 * Side-by-side comparison of multiple projects
 */

import React from 'react';
import { CalculatorResults } from '../types';
import { formatCurrency, formatPercentage } from '../utils/calculations';

interface ComparisonItem {
  id: string;
  results: CalculatorResults;
}

interface ComparisonProps {
  items: ComparisonItem[];
  onRemove: (id: string) => void;
  onClear: () => void;
}

export const Comparison: React.FC<ComparisonProps> = ({ items, onRemove, onClear }) => {
  if (items.length === 0) {
    return null;
  }

  // Find best ROI
  const bestROI = Math.max(...items.map((item) => item.results.roiPercentage));
  const bestPayback = Math.min(...items.map((item) => item.results.paybackPeriodYears));
  const bestEquity = Math.max(...items.map((item) => item.results.equityGain));

  return (
    <div className="comparison-section mt-12 bg-white rounded-lg shadow-lg p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Project Comparison</h2>
        <button
          onClick={onClear}
          className="text-sm bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
        >
          Clear All
        </button>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 border-b-2 border-gray-300">
            <tr>
              <th className="text-left p-3 font-semibold text-gray-700">Project</th>
              <th className="text-right p-3 font-semibold text-gray-700">Cost</th>
              <th className="text-right p-3 font-semibold text-gray-700">ROI %</th>
              <th className="text-right p-3 font-semibold text-gray-700">Equity Gain</th>
              <th className="text-right p-3 font-semibold text-gray-700">Payback (Years)</th>
              <th className="text-right p-3 font-semibold text-gray-700">New Home Value</th>
              <th className="text-center p-3 font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              const isTopROI = item.results.roiPercentage === bestROI;
              const isTopPayback = item.results.paybackPeriodYears === bestPayback;
              const isTopEquity = item.results.equityGain === bestEquity;

              return (
                <tr
                  key={item.id}
                  className={`border-b border-gray-200 hover:bg-gray-50 transition ${
                    isTopROI || isTopPayback || isTopEquity ? 'bg-blue-50' : ''
                  }`}
                >
                  <td className="p-3 font-semibold text-gray-800">{item.results.projectType}</td>
                  <td className="p-3 text-right text-gray-700">
                    {formatCurrency(item.results.estimatedCost)}
                  </td>
                  <td
                    className={`p-3 text-right font-bold ${
                      isTopROI ? 'text-green-600 bg-green-100' : 'text-gray-700'
                    }`}
                  >
                    {formatPercentage(item.results.roiPercentage)}
                  </td>
                  <td className="p-3 text-right text-gray-700">
                    {formatCurrency(item.results.equityGain)}
                  </td>
                  <td
                    className={`p-3 text-right font-semibold ${
                      isTopPayback ? 'text-green-600 bg-green-100' : 'text-gray-700'
                    }`}
                  >
                    {item.results.paybackPeriodYears.toFixed(1)}
                  </td>
                  <td className="p-3 text-right text-gray-700">
                    {formatCurrency(item.results.estimatedNewHomeValue)}
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => onRemove(item.id)}
                      className="text-red-500 hover:text-red-700 font-semibold transition"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Summary Stats */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm text-gray-600 font-semibold">Best ROI</p>
          <p className="text-2xl font-bold text-green-600">
            {formatPercentage(bestROI)}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {items.find((item) => item.results.roiPercentage === bestROI)?.results.projectType}
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-gray-600 font-semibold">Fastest Payback</p>
          <p className="text-2xl font-bold text-blue-600">
            {bestPayback.toFixed(1)} years
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {items.find((item) => item.results.paybackPeriodYears === bestPayback)?.results.projectType}
          </p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <p className="text-sm text-gray-600 font-semibold">Highest Equity Gain</p>
          <p className="text-2xl font-bold text-purple-600">
            {formatCurrency(bestEquity)}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {items.find((item) => item.results.equityGain === bestEquity)?.results.projectType}
          </p>
        </div>
      </div>

      {/* Recommendation */}
      <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
        <p className="text-sm font-semibold text-yellow-900">💡 Comparison Insight</p>
        <p className="text-sm text-yellow-800 mt-2">
          {bestROI > 80
            ? `The best ROI is ${formatPercentage(bestROI)} - consider prioritizing this project.`
            : bestPayback < 5
              ? `The fastest payback is ${bestPayback.toFixed(1)} years - good for quick returns.`
              : `Consider your priorities: ROI, payback speed, or total equity gain.`}
        </p>
      </div>
    </div>
  );
};

export default Comparison;
