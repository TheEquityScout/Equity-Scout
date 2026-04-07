/**
 * Equity Scout - Calculation Utilities
 * Core ROI calculation and recommendation logic
 */

import {
  ProjectType,
  CalculatorResults,
  Recommendation,
  VerdictType,
  ValidationError,
} from '../types';
import { getProjectById } from '../data/roiData';
import { adjustROIByRegion } from '../data/regionalROIData';

/**
 * Validate calculator inputs
 */
export function validateInputs(
  projectType: ProjectType | null,
  estimatedCost: number | null,
  currentHomeValue: number | null
): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!projectType) {
    errors.push({ field: 'projectType', message: 'Please select a project type' });
  }

  if (!estimatedCost || estimatedCost <= 0) {
    errors.push({ field: 'estimatedCost', message: 'Please enter a valid estimated cost' });
  }

  if (!currentHomeValue || currentHomeValue <= 0) {
    errors.push({ field: 'currentHomeValue', message: 'Please enter a valid home value' });
  }

  return errors;
}

/**
 * Calculate ROI results
 * Formula: Equity Gain = Estimated Cost × (Industry ROI / 100)
 * Supports regional ROI adjustments
 */
export function calculateROI(
  projectType: ProjectType,
  estimatedCost: number,
  currentHomeValue: number,
  region: string = 'national'
): CalculatorResults | null {
  const project = getProjectById(projectType);

  if (!project) {
    return null;
  }

  // Adjust ROI by region
  const adjustedROI = adjustROIByRegion(project.roi, region);

  // Calculate equity gain
  const equityGain = estimatedCost * (adjustedROI / 100);

  // Calculate new home value
  const estimatedNewHomeValue = currentHomeValue + equityGain;

  // Calculate payback period (years to recover investment)
  const paybackPeriodYears = estimatedCost / (equityGain / 30);

  // Calculate actual ROI percentage
  const roiPercentage = (equityGain / estimatedCost) * 100;

  return {
    projectType: project.name,
    estimatedCost,
    industryROI: adjustedROI,
    equityGain: Math.round(equityGain * 100) / 100,
    currentHomeValue,
    estimatedNewHomeValue: Math.round(estimatedNewHomeValue * 100) / 100,
    paybackPeriodYears: Math.round(paybackPeriodYears * 10) / 10,
    roiPercentage: Math.round(roiPercentage * 10) / 10,
  };
}

/**
 * Generate repair vs. replace recommendation
 * Includes regional context
 */
export function generateRecommendation(
  projectType: ProjectType,
  estimatedCost: number,
  results: CalculatorResults,
  _region: string = 'national'
): Recommendation {
  let verdict: VerdictType;
  let message: string;
  let suggestedAction: string;

  const roi = results.industryROI;
  const paybackYears = results.paybackPeriodYears;

  // Determine verdict based on ROI
  if (roi >= 70) {
    verdict = VerdictType.EXCELLENT;
    message = `Excellent investment with ${roi}% ROI. This project is highly likely to increase your home's value.`;
  } else if (roi >= 60) {
    verdict = VerdictType.GOOD;
    message = `Good investment with ${roi}% ROI. This project should provide solid returns on your investment.`;
  } else if (roi >= 50) {
    verdict = VerdictType.MODERATE;
    message = `Moderate investment with ${roi}% ROI. Consider this project if aligned with your needs.`;
  } else {
    verdict = VerdictType.POOR;
    message = `Lower ROI of ${roi}%. Consider alternatives or focus on projects with higher returns.`;
  }

  // Get project-specific recommendation
  const projectSpecificTip = getProjectSpecificRecommendation(projectType, estimatedCost);

  // Determine suggested action
  if (paybackYears <= 5) {
    suggestedAction = `This project pays for itself in approximately ${paybackYears.toFixed(1)} years. Strong candidate for investment.`;
  } else if (paybackYears <= 10) {
    suggestedAction = `Payback period is ${paybackYears.toFixed(1)} years. Good long-term investment.`;
  } else {
    suggestedAction = `Payback period exceeds ${paybackYears.toFixed(1)} years. Consider if this aligns with your long-term plans.`;
  }

  return {
    verdict,
    message: `${message} ${projectSpecificTip}`,
    suggestedAction,
    paybackYears,
  };
}

/**
 * Get project-specific recommendation
 */
function getProjectSpecificRecommendation(
  projectType: ProjectType,
  _estimatedCost: number
): string {
  switch (projectType) {
    case ProjectType.KITCHEN_MINOR:
      return 'Kitchen remodels are among the best home improvement investments.';

    case ProjectType.BATHROOM_MIDRANGE:
      return 'Bathroom updates provide strong returns and improve daily living.';

    case ProjectType.ROOF_ASPHALT:
      return 'Roof replacement is essential for home protection and value.';

    case ProjectType.DECK_WOOD:
      return 'Deck additions offer excellent ROI and enhance outdoor living space.';

    default:
      return '';
  }
}

/**
 * Format currency for display
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

/**
 * Format percentage for display
 */
export function formatPercentage(value: number): string {
  return `${value.toFixed(1)}%`;
}
