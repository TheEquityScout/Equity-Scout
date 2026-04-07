/**
 * Equity Scout - Main App Component
 * Orchestrates the entire application with all features
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { Calculator } from './components/Calculator';
import { Results } from './components/Results';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Comparison } from './components/Comparison';
import { FinancingCalculator } from './components/FinancingCalculator';
import { CalculatorResults, Recommendation } from './types';
import './App.css';

interface ComparisonItem {
  id: string;
  results: CalculatorResults;
}

function App() {
  const [results, setResults] = useState<CalculatorResults | null>(null);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const [comparisonItems, setComparisonItems] = useState<ComparisonItem[]>([]);

  const handleCalculate = (calculatedResults: CalculatorResults, calculatedRecommendation: Recommendation) => {
    setResults(calculatedResults);
    setRecommendation(calculatedRecommendation);

    // Scroll to results
    setTimeout(() => {
      const resultsElement = document.querySelector('.results-section');
      if (resultsElement) {
        resultsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleAddToComparison = (calculatedResults: CalculatorResults) => {
    const newItem: ComparisonItem = {
      id: `${Date.now()}-${Math.random()}`,
      results: calculatedResults,
    };
    setComparisonItems([...comparisonItems, newItem]);
    
    // Show confirmation
    alert(`"${calculatedResults.projectType}" added to comparison!`);
  };

  const handleRemoveFromComparison = (id: string) => {
    setComparisonItems(comparisonItems.filter((item) => item.id !== id));
  };

  const handleClearComparison = () => {
    setComparisonItems([]);
  };

  return (
    <div className="app bg-slate-50 min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area (Left - 2 columns) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Calculator Section */}
            <section id="calculator">
              <Calculator onCalculate={handleCalculate} onAddToComparison={handleAddToComparison} />
            </section>

            {/* Results Section */}
            {results && recommendation && (
              <section className="results-section">
                <Results results={results} recommendation={recommendation} />
                {/* Financing Calculator */}
                <FinancingCalculator projectCost={results.estimatedCost} />
              </section>
            )}

            {/* Comparison Section */}
            {comparisonItems.length > 0 && (
              <section className="comparison-section">
                <Comparison
                  items={comparisonItems}
                  onRemove={handleRemoveFromComparison}
                  onClear={handleClearComparison}
                />
              </section>
            )}
          </div>

          {/* Sidebar (Right - 1 column) */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>

      {/* About Section */}
      <About />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
