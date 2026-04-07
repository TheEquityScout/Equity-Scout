/**
 * Equity Scout - TypeScript Type Definitions
 * Core types for ROI calculator and recommendation engine
 */

/**
 * Project category enumeration
 */
export enum ProjectCategory {
  KITCHEN = 'kitchen',
  BATHROOM = 'bathroom',
  ROOF = 'roof',
  DECK = 'deck',
}

/**
 * Project type enumeration - Georgia Market
 */
export enum ProjectType {
  KITCHEN_MINOR = 'kitchen_minor',
  BATHROOM_MIDRANGE = 'bathroom_midrange',
  ROOF_ASPHALT = 'roof_asphalt',
  DECK_WOOD = 'deck_wood',
}

/**
 * ROI Data structure for each project type
 */
export interface ROIProject {
  id: ProjectType;
  name: string;
  category: ProjectCategory;
  roi: number; // ROI percentage (e.g., 75 for 75%)
  averageJobCost: number; // Average cost in dollars
  averageResaleValue: number; // Average resale value added
  description: string;
}

/**
 * Calculator input from user
 */
export interface CalculatorInput {
  projectType: ProjectType | null;
  estimatedCost: number | null;
  currentHomeValue: number | null;
}

/**
 * Calculator results
 */
export interface CalculatorResults {
  projectType: string;
  estimatedCost: number;
  industryROI: number;
  equityGain: number;
  currentHomeValue: number;
  estimatedNewHomeValue: number;
  paybackPeriodYears: number;
  roiPercentage: number;
}

/**
 * Recommendation verdict
 */
export enum VerdictType {
  EXCELLENT = 'excellent',
  GOOD = 'good',
  MODERATE = 'moderate',
  POOR = 'poor',
}

/**
 * Repair vs Replace recommendation
 */
export interface Recommendation {
  verdict: VerdictType;
  message: string;
  suggestedAction: string;
  paybackYears: number;
}

/**
 * Complete calculation result with recommendation
 */
export interface CalculationResult {
  results: CalculatorResults;
  recommendation: Recommendation;
}

/**
 * Validation error
 */
export interface ValidationError {
  field: string;
  message: string;
}

/**
 * Application state
 */
export interface AppState {
  input: CalculatorInput;
  results: CalculatorResults | null;
  recommendation: Recommendation | null;
  errors: ValidationError[];
  isLoading: boolean;
}
