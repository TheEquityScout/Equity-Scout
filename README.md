# Project Payback - Home Improvement ROI Calculator

A professional, full-stack ROI calculator web application for homeowners to evaluate home improvement projects and get repair vs. replace recommendations based on 2026 industry standards.

## 📋 Project Overview

**Project Payback** helps homeowners make informed decisions about home improvement investments by:

- Calculating potential equity gains based on verified 2026 industry ROI data
- Providing smart repair vs. replace recommendations
- Displaying estimated new home values and payback periods
- Offering a professional, contractor-grade interface
- Including AdSense-ready ad placeholders for monetization

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/pnpm
- Basic knowledge of React and TypeScript

### Installation

```bash
cd project-payback
npm install
# or
pnpm install
```

### Development

```bash
npm run dev
# or
pnpm dev
```

The application will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
pnpm build
```

Output will be in the `dist/` directory.

## 📁 Project Structure

```
project-payback/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx       # Navigation + header ad placeholder
│   │   ├── Calculator.tsx   # Main calculator form
│   │   ├── Results.tsx      # Results display
│   │   ├── Sidebar.tsx      # Sidebar + ad placeholder
│   │   └── Footer.tsx       # Footer with links
│   ├── data/
│   │   └── roiData.ts       # 2026 ROI database
│   ├── utils/
│   │   └── calculations.ts  # ROI calculation logic
│   ├── types/
│   │   └── index.ts         # TypeScript type definitions
│   ├── App.tsx              # Main app component
│   ├── App.css              # Global styles
│   ├── index.css            # Tailwind CSS imports
│   └── main.tsx             # Entry point
├── index.html               # HTML template
├── tailwind.config.js       # Tailwind configuration
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
├── postcss.config.js        # PostCSS configuration
└── package.json             # Dependencies
```

## 🔧 Core Components

### Calculator Component (`src/components/Calculator.tsx`)
- User input form with project type dropdown
- Estimated cost and home value inputs
- Form validation with error messages
- Calls calculation logic on submit

### Results Component (`src/components/Results.tsx`)
- Displays calculation results in a grid layout
- Shows repair vs. replace verdict with color coding
- Displays equity gain, payback period, and new home value
- Includes disclaimer about regional variations

### Header Component (`src/components/Header.tsx`)
- Navigation menu
- AdSense placeholder (728x90 or 300x60)
- Professional branding

### Sidebar Component (`src/components/Sidebar.tsx`)
- AdSense placeholder (300x600 or 300x250)
- Quick tips card
- Data source information
- Disclaimer card

### Footer Component (`src/components/Footer.tsx`)
- Links and navigation
- Data source attribution
- Legal disclaimers
- Copyright information

## 📊 Data & Calculations

### ROI Database (`src/data/roiData.ts`)

Contains 10 project types with 2026 industry ROI data:

| Project | ROI | Category |
|---------|-----|----------|
| Kitchen (Minor) | 113% | Kitchen |
| Kitchen (Major) | 51% | Kitchen |
| Bathroom (Midrange) | 80% | Bathroom |
| Bathroom (Addition) | 53% | Bathroom |
| Roof (Asphalt) | 68% | Roof |
| Roof (Metal) | 50% | Roof |
| Windows (Vinyl) | 76% | Windows |
| Windows (Wood) | 70% | Windows |
| Deck (Wood) | 95% | Deck |
| Deck (Composite) | 89% | Deck |

**Data Source:** 2025 Cost vs Value Report by Journal of Light Construction

### Calculation Logic (`src/utils/calculations.ts`)

**Equity Gain Formula:**
```
Equity Gain = Estimated Cost × (Industry ROI / 100)
```

**New Home Value Formula:**
```
Estimated New Home Value = Current Home Value + Equity Gain
```

**Payback Period Formula:**
```
Payback Period (years) = Estimated Cost / (Equity Gain / 30)
```

**Recommendation Logic:**
- **Excellent**: Payback < 5 years AND ROI ≥ 80%
- **Good**: Payback < 10 years AND ROI ≥ 60%
- **Moderate**: Payback < 15 years AND ROI ≥ 40%
- **Poor**: Everything else

## 🎨 Design System

### Color Palette (Pro-Contractor Aesthetic)
- **Primary Blue**: `#1E3A5F` (Deep Navy)
- **Secondary Blue**: `#2D5A8C` (Professional Blue)
- **Accent Green**: `#2D5A3D` (Forest Green)
- **Light Gray**: `#F8F9FA` (Background)
- **Dark Text**: `#2C3E50` (Primary Text)
- **Success**: `#27AE60` (Green)
- **Warning**: `#E67E22` (Orange)
- **Danger**: `#C0392B` (Red)

### Typography
- **Font Family**: System fonts (Inter, Segoe UI)
- **Headings**: Bold, 24px-32px
- **Body**: Regular, 14px-16px
- **Labels**: Semibold, 14px

### Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 💰 AdSense Integration

### Header Ad Placeholder
- **Location**: `src/components/Header.tsx`
- **Dimensions**: 728x90 (Leaderboard) or 300x60 (Half Banner)
- **Element ID**: `ad-header`
- **Instructions**: Replace placeholder content with AdSense code

### Sidebar Ad Placeholder
- **Location**: `src/components/Sidebar.tsx`
- **Dimensions**: 300x600 (Half Page) or 300x250 (Medium Rectangle)
- **Element ID**: `ad-sidebar`
- **Instructions**: Replace placeholder content with AdSense code

### How to Add AdSense Code

1. Get your AdSense code from Google AdSense
2. Locate the ad placeholder div (e.g., `id="ad-header"`)
3. Replace the placeholder content with your AdSense script:

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
     style="display:inline-block;width:728px;height:90px"
     data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
     data-ad-slot="xxxxxxxxxx"></ins>
<script>
  (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

## 🔄 Incremental Development Roadmap

### Phase 1: Core Foundation ✅
- [x] TypeScript types and interfaces
- [x] ROI data database
- [x] Calculation logic and utilities
- [x] Component templates
- [x] Styling framework

### Phase 2: UI Implementation (Next)
- [ ] Install dependencies (`npm install`)
- [ ] Test components in development
- [ ] Refine styling and animations
- [ ] Test responsive design

### Phase 3: Features & Polish
- [ ] Add regional ROI variations
- [ ] Implement project comparison tool
- [ ] Add project timeline calculator
- [ ] Create financing calculator

### Phase 4: Optimization & Deployment
- [ ] Performance optimization
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] Deploy to production

### Phase 5: Monetization
- [ ] Integrate Google AdSense
- [ ] Add affiliate links
- [ ] Create premium features
- [ ] Set up email newsletter

## 📝 Type Definitions

All TypeScript types are defined in `src/types/index.ts`:

- `ProjectCategory`: Enum of project categories
- `ProjectType`: Enum of all project types
- `ROIProject`: Structure for ROI data
- `CalculatorInput`: User input structure
- `CalculatorResults`: Calculation results
- `Recommendation`: Repair vs. replace verdict
- `ValidationError`: Form validation errors
- `AppState`: Application state

## 🧪 Testing

To add tests, install testing libraries:

```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
```

Create test files alongside components (e.g., `Calculator.test.tsx`)

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Design

The application is fully responsive:
- **Desktop**: Full layout with sidebar
- **Tablet**: Stacked layout, sidebar below content
- **Mobile**: Single column, optimized for small screens

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on form inputs
- Keyboard navigation support
- Color contrast compliance
- Reduced motion support

## 📄 License

MIT License - Feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

To contribute improvements:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📞 Support

For questions or issues:
- Check the FAQ section in the application
- Review the data source documentation
- Consult with a real estate professional

## 🔗 Resources

- [2025 Cost vs Value Report](https://www.jlconline.com/cost-vs-value/2025/)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)

## 📊 Data Disclaimer

All ROI percentages are based on national averages from the 2025 Cost vs Value Report. Actual results may vary significantly by:
- Geographic location
- Local market conditions
- Quality of work
- Material choices
- Home age and condition
- Local real estate trends

Always consult with a qualified real estate professional or contractor before making investment decisions.

---

**Project Payback** - Making home improvement decisions data-driven and transparent.
