/**
 * Project Payback - Sidebar Component
 * Sidebar with AdSense placeholder and additional information
 */

import React from 'react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar space-y-6">
      {/* AdSense Sidebar Placeholder */}
      <div
        id="ad-sidebar"
        className="ad-placeholder bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 text-xs font-semibold"
        style={{ height: '600px', minHeight: '600px' }}
      >
        {/* 
          AdSense Code Insertion Point
          Paste your Google AdSense code here
          Recommended: 300x600 Half Page or 300x250 Medium Rectangle
          
          Example:
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <ins class="adsbygoogle"
               style="display:inline-block;width:300px;height:600px"
               data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
               data-ad-slot="xxxxxxxxxx"></ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        */}
        📢 Sidebar Ad Placeholder (300x600 or 300x250)
      </div>

      {/* Information Card */}
      <div className="info-card bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">💡 Quick Tips</h3>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <span>Minor projects typically offer better ROI than major renovations</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <span>Exterior projects often return more value than interior updates</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <span>ROI varies by region - these are national averages</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <span>Consider durability and personal preferences alongside ROI</span>
          </li>
        </ul>
      </div>

      {/* Data Source Card */}
      <div className="source-card bg-blue-50 rounded-lg border border-blue-200 p-6">
        <h3 className="text-sm font-bold text-blue-900 mb-2">📊 Data Source</h3>
        <p className="text-xs text-blue-800 mb-3">
          All ROI data is sourced from the 2025 Cost vs Value Report by the Journal of Light
          Construction, based on national averages across 119 U.S. markets.
        </p>
        <a
          href="https://www.jlconline.com/cost-vs-value/2025/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-blue-600 hover:text-blue-800 font-semibold underline"
        >
          View Full Report →
        </a>
      </div>

      {/* Disclaimer Card */}
      <div className="disclaimer-card bg-yellow-50 rounded-lg border border-yellow-200 p-6">
        <h3 className="text-sm font-bold text-yellow-900 mb-2">⚠️ Disclaimer</h3>
        <p className="text-xs text-yellow-800">
          This calculator provides estimates based on national averages. Actual ROI may vary
          significantly based on location, market conditions, quality of work, and local real
          estate trends. Consult with a real estate professional or contractor for personalized
          advice.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
