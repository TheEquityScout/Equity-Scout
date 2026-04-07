/**
 * Equity Scout - Footer Component
 * Footer with links and information
 */

import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h4 className="text-white font-bold mb-4">About Equity Scout</h4>
            <p className="text-sm text-slate-400">
              Equity Scout empowers homeowners with data-driven analysis for home improvement decisions. 
              We provide transparent financial insights to help you maximize your home's equity potential.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#calculator" className="text-slate-400 hover:text-emerald-400 transition">
                  Calculator
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-emerald-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-400 hover:text-emerald-400 transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-emerald-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Data Source */}
          <div>
            <h4 className="text-white font-bold mb-4">Data Source</h4>
            <p className="text-sm text-slate-400 mb-3">
              All ROI percentages are based on Georgia market analysis and verified industry benchmarks.
            </p>
            <p className="text-xs text-slate-500">
              Market data updated: 2026
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400">
              &copy; {currentYear} Equity Scout. All rights reserved.
            </p>

            <div className="flex space-x-6 text-sm mt-4 md:mt-0">
              <a href="#privacy" className="text-slate-400 hover:text-emerald-400 transition">
                Privacy Policy
              </a>
              <a href="#terms" className="text-slate-400 hover:text-emerald-400 transition">
                Terms of Service
              </a>
              <a href="#disclaimer" className="text-slate-400 hover:text-emerald-400 transition">
                Disclaimer
              </a>
            </div>
          </div>

          {/* Disclaimer Text */}
          <div className="mt-6 pt-6 border-t border-slate-700">
            <p className="text-xs text-slate-500">
              <strong>Disclaimer:</strong> Equity Scout provides estimates based on Georgia market data and 
              industry benchmarks. Actual results may vary significantly by specific property location, market conditions, 
              and individual project specifications. This calculator is for informational purposes only and should not be 
              considered financial or investment advice. Always consult with qualified professionals including real estate 
              agents, financial advisors, or appraisers before making investment decisions regarding your home.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
