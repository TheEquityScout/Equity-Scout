/**
 * Equity Scout - About Page Component
 * Information about data-driven home improvement analysis
 */

import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">About Equity Scout</h2>
            <p className="text-xl text-slate-600">
              Empowering homeowners with transparent, data-driven financial insights for home improvement decisions.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Equity Scout is dedicated to providing homeowners with accurate, transparent financial analysis 
              for home improvement projects. We believe that informed decisions lead to better investments and 
              stronger home equity growth.
            </p>
            <p className="text-slate-700 leading-relaxed">
              By combining verified market data with intelligent analysis, we help you understand the true financial 
              impact of your home improvement decisions.
            </p>
          </div>

          {/* Data-Driven Approach */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Data-Driven Analysis</h3>
            <p className="text-emerald-800 leading-relaxed mb-4">
              Our calculator is built on verified Georgia market data and industry benchmarks. We analyze:
            </p>
            <ul className="space-y-2 text-emerald-800">
              <li className="flex items-start">
                <span className="text-emerald-600 font-bold mr-3">✓</span>
                <span>Return on Investment (ROI) percentages for each project type</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 font-bold mr-3">✓</span>
                <span>Equity gain calculations based on current market conditions</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 font-bold mr-3">✓</span>
                <span>Payback period analysis for financial planning</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 font-bold mr-3">✓</span>
                <span>Financing options and loan payment scenarios</span>
              </li>
            </ul>
          </div>

          {/* Financial Transparency */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Financial Transparency</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              We believe homeowners deserve clear, honest information about their investments. That's why we:
            </p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="text-emerald-600 font-bold mr-3">•</span>
                <span><strong>Use verified data:</strong> All ROI figures are based on industry benchmarks and market analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 font-bold mr-3">•</span>
                <span><strong>Provide clear calculations:</strong> Every result shows exactly how we arrived at the numbers</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 font-bold mr-3">•</span>
                <span><strong>Include disclaimers:</strong> We're transparent about limitations and variables</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 font-bold mr-3">•</span>
                <span><strong>Recommend professional consultation:</strong> We encourage verification with qualified experts</span>
              </li>
            </ul>
          </div>

          {/* How It Works */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">How Equity Scout Works</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-600 text-white font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">Select Your Project</h4>
                  <p className="text-slate-600">Choose from Kitchen Remodel, Bathroom Update, Deck Addition, or Roof Replacement</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-600 text-white font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">Enter Your Details</h4>
                  <p className="text-slate-600">Provide your estimated project cost and current home value</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-600 text-white font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">Get Analysis</h4>
                  <p className="text-slate-600">Receive detailed ROI analysis, equity gain calculations, and payback period</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-600 text-white font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">Make Informed Decisions</h4>
                  <p className="text-slate-600">Use the data to plan your home improvement investments with confidence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-slate-100 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Important Notes</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="text-slate-600 font-bold mr-3">•</span>
                <span>This calculator provides estimates based on Georgia market data. Actual results vary by location and market conditions.</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-600 font-bold mr-3">•</span>
                <span>ROI percentages are based on verified industry benchmarks and may change over time.</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-600 font-bold mr-3">•</span>
                <span>This tool is for informational purposes and should not be considered financial or investment advice.</span>
              </li>
              <li className="flex items-start">
                <span className="text-slate-600 font-bold mr-3">•</span>
                <span>Always consult with qualified professionals before making significant home improvement investments.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
