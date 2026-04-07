/**
 * Project Payback - Regional ROI Data
 * ROI variations by US region based on market conditions
 */

// Regional ROI data - no imports needed

/**
 * Regional multipliers for ROI adjustments
 * Based on regional market variations and cost of living
 */
export interface RegionalROI {
  region: string;
  multiplier: number; // 0.8 = 20% lower, 1.2 = 20% higher
  description: string;
}

export const REGIONS: RegionalROI[] = [
  {
    region: 'national',
    multiplier: 1.0,
    description: 'National Average',
  },
  {
    region: 'northeast',
    multiplier: 1.15,
    description: 'Northeast (Higher labor costs, strong market)',
  },
  {
    region: 'midwest',
    multiplier: 0.95,
    description: 'Midwest (Lower costs, moderate market)',
  },
  {
    region: 'south',
    multiplier: 0.90,
    description: 'South (Lower costs, growing market)',
  },
  {
    region: 'west',
    multiplier: 1.25,
    description: 'West (High costs, strong market)',
  },
];

/**
 * Get regional multiplier by region name
 */
export function getRegionalMultiplier(region: string): number {
  const regionalData = REGIONS.find((r) => r.region.toLowerCase() === region.toLowerCase());
  return regionalData?.multiplier || 1.0;
}

/**
 * Adjust ROI by region
 */
export function adjustROIByRegion(baseROI: number, region: string): number {
  const multiplier = getRegionalMultiplier(region);
  return Math.round(baseROI * multiplier * 10) / 10;
}

/**
 * Get all regions
 */
export function getAllRegions(): RegionalROI[] {
  return REGIONS;
}

/**
 * Get region display name
 */
export function getRegionDisplayName(region: string): string {
  const regionalData = REGIONS.find((r) => r.region.toLowerCase() === region.toLowerCase());
  return regionalData?.description || 'National Average';
}
