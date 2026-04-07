/**
 * Project Payback - Results Component
 * Displays ROI calculation results
 */

import React from 'react';
import { CalculatorResults, Recommendation, VerdictType } from '../types';
import { formatCurrency, formatPercentage } from '../utils/calculations';

interface ResultsProps {
  results: CalculatorResults | null;
  recommendation: Recommendation | null;
}

export const Results: React.FC<ResultsProps> = ({ results, recommendation }) => {
  if (!results || !recommendation) {
    return null;
  }

  const getVerdictColor = (verdict: VerdictType): string => {
    switch (verdict) {
      case VerdictType.EXCELLENT:
        return 'bg-green-100 border-green-500 text-green-800';
      case VerdictType.GOOD:
        return 'bg-blue-100 border-blue-500 text-blue-800';
      case VerdictType.MODERATE:
        return 'bg-yellow-100 border-yellow-500 text-yellow-800';
      case VerdictType.POOR:
        return 'bg-red-100 border-red-500 text-red-800';
      default:
        return 'bg-gray-100 border-gray-500 text-gray-800';
    }
  };

  const getVerdictIcon = (verdict: VerdictType): string => {
    switch (verdict) {
      case VerdictType.EXCELLENT:
        return '✓';
      case VerdictType.GOOD:
        return '✓';
      case VerdictType.MODERATE:
        return '→';
      case VerdictType.POOR:
        return '⚠';
      default:
        return '?';
    }
  };

  return (
    <div className="results-section mt-8 space-y-6">
      {/* Verdict Card */}
      <div
        className={`verdict-card border-l-4 p-6 rounded-lg ${getVerdictColor(
          recommendation.verdict
        )}`}
      >
        <div className="flex items-start">
          <span className="text-3xl font-bold mr-4">{getVerdictIcon(recommendation.verdict)}</span>
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2">{recommendation.message}</h3>
            <p className="text-sm">{recommendation.suggestedAction}</p>
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="results-grid grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Project Type */}
        <div className="result-card bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-gray-600 text-sm font-semibold">Project Type</p>
          <p className="text-lg font-bold text-gray-800">{results.projectType}</p>
        </div>

        {/* Industry ROI */}
        <div className="result-card bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-gray-600 text-sm font-semibold">Industry ROI</p>
          <p className="text-lg font-bold text-blue-600">{formatPercentage(results.industryROI)}</p>
        </div>

        {/* Estimated Cost */}
        <div className="result-card bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-gray-600 text-sm font-semibold">Estimated Cost</p>
          <p className="text-lg font-bold text-gray-800">{formatCurrency(results.estimatedCost)}</p>
        </div>

        {/* Equity Gain */}
        <div className="result-card bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-gray-600 text-sm font-semibold">Equity Gain</p>
          <p className="text-lg font-bold text-green-600">{formatCurrency(results.equityGain)}</p>
        </div>

        {/* Current Home Value */}
        <div className="result-card bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-gray-600 text-sm font-semibold">Current Home Value</p>
          <p className="text-lg font-bold text-gray-800">
            {formatCurrency(results.currentHomeValue)}
          </p>
        </div>

        {/* Estimated New Home Value */}
        <div className="result-card bg-white rounded-lg p-4 border border-gray-200 bg-blue-50">
          <p className="text-gray-600 text-sm font-semibold">Estimated New Home Value</p>
          <p className="text-lg font-bold text-blue-700">
            {formatCurrency(results.estimatedNewHomeValue)}
          </p>
        </div>

        {/* Payback Period */}
        <div className="result-card bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-gray-600 text-sm font-semibold">Payback Period</p>
          <p className="text-lg font-bold text-gray-800">{results.paybackPeriodYears.toFixed(1)} years</p>
        </div>

        {/* Actual ROI Percentage */}
        <div className="result-card bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-gray-600 text-sm font-semibold">Your ROI</p>
          <p className="text-lg font-bold text-green-600">{formatPercentage(results.roiPercentage)}</p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="disclaimer bg-gray-100 rounded-lg p-4 text-xs text-gray-600">
        <p>
          <strong>Disclaimer:</strong> ROI percentages are based on 2025 Cost vs Value Report
          national averages. Actual results may vary by region, market conditions, and individual
          project specifications. Consult with a real estate professional for personalized advice.
        </p>
      </div>
    </div>
  );
};

export default Results;
