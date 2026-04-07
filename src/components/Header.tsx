/**
 * Equity Scout - Header Component
 * Navigation header with fintech modern design
 */

import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        {/* Logo and Title */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="bg-emerald-500 rounded-lg p-2">
              <span className="text-white font-bold text-xl">ES</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white drop-shadow-lg">Equity Scout</h1>
              <p className="text-emerald-100 text-sm font-medium">Data-Driven Home Improvement Analysis</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-8 text-sm font-medium">
          <a href="#calculator" className="text-white hover:text-emerald-300 transition">
            Calculator
          </a>
          <a href="#about" className="text-white hover:text-emerald-300 transition">
            About
          </a>
          <a href="#blog" className="text-white hover:text-emerald-300 transition">
            Blog
          </a>
          <a href="#contact" className="text-white hover:text-emerald-300 transition">
            Contact
          </a>
        </nav>
      </div>

      {/* AdSense Header Placeholder */}
      <div className="bg-slate-700 py-3 border-t border-slate-600">
        <div className="container mx-auto px-4">
          <div
            id="ad-header"
            className="ad-placeholder bg-slate-600 rounded flex items-center justify-center text-slate-300 text-xs font-semibold"
            style={{ height: '90px', minHeight: '90px' }}
          >
            {/* 
              AdSense Code Insertion Point
              Paste your Google AdSense code here
              Recommended: 728x90 Leaderboard or 300x60 Half Banner
              
              Example:
              <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
              <ins class="adsbygoogle"
                   style="display:inline-block;width:728px;height:90px"
                   data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
                   data-ad-slot="xxxxxxxxxx"></ins>
              <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
              </script>
            */}
            📊 Header Ad Placeholder (728x90 or 300x60)
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
