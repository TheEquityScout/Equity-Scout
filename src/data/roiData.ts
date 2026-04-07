/**
 * Equity Scout - ROI Data Database
 * Georgia Market Averages
 * Source: 2026 Market Analysis
 */

import { ROIProject, ProjectType, ProjectCategory } from '../types';

/**
 * Georgia Market ROI database with 4 project types
 * Fixed ROI percentages based on Georgia market averages
 */
export const ROI_DATABASE: ROIProject[] = [
  // Kitchen Projects
  {
    id: ProjectType.KITCHEN_MINOR,
    name: 'Kitchen Remodel',
    category: ProjectCategory.KITCHEN,
    roi: 75,
    averageJobCost: 35000,
    averageResaleValue: 61250,
    description: 'Complete kitchen renovation including cabinets, countertops, and appliances. Georgia market average.',
  },

  // Bathroom Projects
  {
    id: ProjectType.BATHROOM_MIDRANGE,
    name: 'Bathroom Update',
    category: ProjectCategory.BATHROOM,
    roi: 70,
    averageJobCost: 25000,
    averageResaleValue: 42500,
    description: 'Bathroom renovation including fixtures, tile, and lighting. Georgia market average.',
  },

  // Deck Projects
  {
    id: ProjectType.DECK_WOOD,
    name: 'Deck Addition',
    category: ProjectCategory.DECK,
    roi: 65,
    averageJobCost: 20000,
    averageResaleValue: 33000,
    description: 'New deck construction with outdoor living space. Georgia market average.',
  },

  // Roof Projects
  {
    id: ProjectType.ROOF_ASPHALT,
    name: 'Roof Replacement',
    category: ProjectCategory.ROOF,
    roi: 60,
    averageJobCost: 30000,
    averageResaleValue: 48000,
    description: 'Complete roof replacement with modern materials. Georgia market average.',
  },
];

/**
 * Get a project by its ID
 */
export function getProjectById(id: ProjectType): ROIProject | undefined {
  return ROI_DATABASE.find((project) => project.id === id);
}

/**
 * Get all projects by category
 */
export function getProjectsByCategory(category: ProjectCategory): ROIProject[] {
  return ROI_DATABASE.filter((project) => project.category === category);
}

/**
 * Get all unique categories
 */
export function getAllCategories(): ProjectCategory[] {
  const categories = new Set(ROI_DATABASE.map((project) => project.category));
  return Array.from(categories);
}

/**
 * Get all projects sorted by ROI (descending)
 */
export function getProjectsSortedByROI(): ROIProject[] {
  return [...ROI_DATABASE].sort((a, b) => b.roi - a.roi);
}

/**
 * Get project display name for dropdown
 */
export function getProjectDisplayName(projectType: ProjectType): string {
  const project = getProjectById(projectType);
  return project?.name || 'Unknown Project';
}
