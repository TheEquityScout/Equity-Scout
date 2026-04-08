/**
 * Equity Scout - Calculator Component
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
    setErrors(errors.filter((err) => err.field !== 'projectType'));
  };

  const handleCostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value ? parseFloat(e.target.value) : null;
    setInput({ ...input, estimatedCost: value });
    setErrors(errors.filter((err) => err.field !== 'estimatedCost'));
  };

  const handleHomeValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value ? parseFloat(e.target.value) : null;
    setInput({ ...input, currentHomeValue: value });
    setErrors(errors.filter((err) => err.field !== 'currentHomeValue'));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateInputs(
      input.projectType,
      input.estimatedCost,
      input.currentHomeValue
    );

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

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

    const recommendation = generateRecommendation(
      input.projectType!,
      input.estimatedCost!,
      results,
      region
    );

    setErrors([]);
    onCalculate(results, recommendation);
  };

  const getErrorMessage = (field: string): string | undefined => {
    return errors.find((err) => err.field === field)?.message;
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    color: '#0f172a',
    fontWeight: '500' as const,
    fontSize: '1rem',
    fontFamily: 'inherit',
  };

  const selectStyle = {
    ...inputStyle,
  };

  return (
    <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', padding: '32px' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '24px' }}>
        Calculate Your ROI
      </h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Region Selector */}
        <div>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
            Region (for ROI adjustment)
          </label>
          <select
            id="region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            style={selectStyle}
          >
            {REGIONS.map((r) => (
              <option key={r.region} value={r.region}>
                {r.description}
              </option>
            ))}
          </select>
        </div>

        {/* Project Type Dropdown */}
        <div>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
            Project Type *
          </label>
          <select
            id="projectType"
            value={input.projectType || ''}
            onChange={handleProjectTypeChange}
            style={{
              ...selectStyle,
              borderColor: getErrorMessage('projectType') ? '#ef4444' : '#cbd5e1',
            }}
          >
            <option value="">Select a project type...</option>
            {ROI_DATABASE.map((project) => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))}
          </select>
          {getErrorMessage('projectType') && (
            <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '4px' }}>
              {getErrorMessage('projectType')}
            </p>
          )}
        </div>

        {/* Estimated Cost Input */}
        <div>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
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
            style={{
              ...inputStyle,
              borderColor: getErrorMessage('estimatedCost') ? '#ef4444' : '#cbd5e1',
            }}
          />
          {getErrorMessage('estimatedCost') && (
            <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '4px' }}>
              {getErrorMessage('estimatedCost')}
            </p>
          )}
        </div>

        {/* Current Home Value Input */}
        <div>
          <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
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
            style={{
              ...inputStyle,
              borderColor: getErrorMessage('currentHomeValue') ? '#ef4444' : '#cbd5e1',
            }}
          />
          {getErrorMessage('currentHomeValue') && (
            <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '4px' }}>
              {getErrorMessage('currentHomeValue')}
            </p>
          )}
        </div>

        {/* Submit Buttons */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            type="submit"
            style={{
              flex: 1,
              backgroundColor: '#10b981',
              color: 'white',
              fontWeight: 'bold',
              padding: '12px 16px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'all 0.2s ease-in-out',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#059669';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#10b981';
            }}
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
              style={{
                flex: 1,
                backgroundColor: '#3b82f6',
                color: 'white',
                fontWeight: 'bold',
                padding: '12px 16px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'all 0.2s ease-in-out',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#2563eb';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#3b82f6';
              }}
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
