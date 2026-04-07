/**
 * Project Payback - Calculator Component
 * Main calculator form for user input
 */

import React, { useState } from 'react';
import { ProjectType, CalculatorInput, ValidationError } from '../types';
import { ROI_DATABASE } from '../data/roiData';
import { REGIONS } from '../data/regionalROIData';
import { validateInputs, calculateROI, generateRecommendation } from '../utils/calculations';

interface CalculatorProps {
  onCalculate: (results: any, recommendation: any) => void;
  onAddToComparison?: (results: any) => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ onCalculate, onAddToComparison }) => {
  const [input, setInput] = useState<CalculatorInput>({
    projectType: null,
    estimatedCost: null,
    currentHomeValue: null,
  });

  const [region, setRegion] = useState<string>('national');
  const [errors, setErrors] = useState<ValidationError[]>([]);

  const handleProjectTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as ProjectType;
    setInput({ ...input, projectType: value || null });
    // Clear errors for this field
    setErrors(errors.filter((err) => err.field !== 'projectType'));
  };

  const handleCostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value ? parseFloat(e.target.value) : null;
    setInput({ ...input, estimatedCost: value });
    // Clear errors for this field
    setErrors(errors.filter((err) => err.field !== 'estimatedCost'));
  };

  const handleHomeValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value ? parseFloat(e.target.value) : null;
    setInput({ ...input, currentHomeValue: value });
    // Clear errors for this field
    setErrors(errors.filter((err) => err.field !== 'currentHomeValue'));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate inputs
    const validationErrors = validateInputs(
      input.projectType,
      input.estimatedCost,
      input.currentHomeValue
    );

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Calculate ROI
    const results = calculateROI(
      input.projectType!,
      input.estimatedCost!,
      input.currentHomeValue!,
      region
    );

    if (!results) {
      setErrors([{ field: 'projectType', message: 'Invalid project type' }]);
      return;
    }

    // Generate recommendation
    const recommendation = generateRecommendation(
      input.projectType!,
      input.estimatedCost!,
      results,
      region
    );

    // Clear errors
    setErrors([]);

    // Call parent callback
    onCalculate(results, recommendation);
  };

  const getErrorMessage = (field: string): string | undefined => {
    return errors.find((err) => err.field === field)?.message;
  };

  return (
    <div className="calculator-form bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Calculate Your ROI</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Region Selector */}
        <div className="form-group">
          <label htmlFor="region" className="block text-sm font-semibold text-gray-700 mb-2">
            Region (for ROI adjustment)
          </label>
          <select
            id="region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            {REGIONS.map((r) => (
              <option key={r.region} value={r.region}>
                {r.description}
              </option>
            ))}
          </select>
        </div>

        {/* Project Type Dropdown */}
        <div className="form-group">
          <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
            Project Type *
          </label>
          <select
            id="projectType"
            value={input.projectType || ''}
            onChange={handleProjectTypeChange}
            className={`w-full px-4 py-3 border rounded-lg bg-white text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
              getErrorMessage('projectType') ? 'border-red-500' : 'border-slate-300'
            }`}
          >
            <option value="">Select a project type...</option>
            {ROI_DATABASE.map((project) => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))}
          </select>
          {getErrorMessage('projectType') && (
            <p className="text-red-500 text-sm mt-1">{getErrorMessage('projectType')}</p>
          )}
        </div>

        {/* Estimated Cost Input */}
        <div className="form-group">
          <label htmlFor="estimatedCost" className="block text-sm font-semibold text-gray-700 mb-2">
            Estimated Project Cost ($) *
          </label>
          <input
            id="estimatedCost"
            type="number"
            value={input.estimatedCost || ''}
            onChange={handleCostChange}
            placeholder="Enter project cost"
            min="0"
            step="100"
            className={`w-full px-4 py-3 border rounded-lg bg-white text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
              getErrorMessage('estimatedCost') ? 'border-red-500' : 'border-slate-300'
            }`}
          />
          {getErrorMessage('estimatedCost') && (
            <p className="text-red-500 text-sm mt-1">{getErrorMessage('estimatedCost')}</p>
          )}
        </div>

        {/* Current Home Value Input */}
        <div className="form-group">
          <label
            htmlFor="currentHomeValue"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Current Home Value ($) *
          </label>
          <input
            id="currentHomeValue"
            type="number"
            value={input.currentHomeValue || ''}
            onChange={handleHomeValueChange}
            placeholder="Enter current home value"
            min="0"
            step="1000"
            className={`w-full px-4 py-3 border rounded-lg bg-white text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
              getErrorMessage('currentHomeValue') ? 'border-red-500' : 'border-slate-300'
            }`}
          />
          {getErrorMessage('currentHomeValue') && (
            <p className="text-red-500 text-sm mt-1">{getErrorMessage('currentHomeValue')}</p>
          )}
        </div>

        {/* Submit Buttons */}
        <div className="flex gap-3">
          <button
            type="submit"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
          >
            Calculate ROI
          </button>
          {onAddToComparison && (
            <button
              type="button"
              onClick={() => {
                const validationErrors = validateInputs(
                  input.projectType,
                  input.estimatedCost,
                  input.currentHomeValue
                );
                if (validationErrors.length === 0) {
                  const results = calculateROI(
                    input.projectType!,
                    input.estimatedCost!,
                    input.currentHomeValue!,
                    region
                  );
                  if (results) {
                    onAddToComparison(results);
                  }
                }
              }}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
            >
              Add to Comparison
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Calculator;
