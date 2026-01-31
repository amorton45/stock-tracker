# Changelog

All notable changes to the Stock Research Tracker.

## [2.0.0] - 2026-01-31

### Added
- **Dashboard Redesign**
  - New sidebar navigation with filters
  - Stats bar with 5 key metrics
  - Activity feed showing recent calls
  
- **Views**
  - Cards view (default) with rich stock information
  - Table view for quick scanning
  - Search across all stocks
  - Sort by ticker, priority, calls, or last updated

- **Stock Management**
  - Investment thesis field
  - Bull/bear case sections
  - Key questions tracker
  - Notes section
  - Conviction levels (high/medium/low)
  - Price targets
  - Analyst assignment
  - Research progress indicator

- **Organization**
  - Filter by sector (Semis, Software, Internet)
  - Filter by priority (High, Medium, Low)
  - Filter by status (Active, Monitoring)

- **Market Data**
  - Live stock prices from Yahoo Finance
  - Price change indicators

- **Export & Shortcuts**
  - Export to CSV
  - Keyboard shortcuts:
    - `/` - Focus search
    - `r` - Refresh data
    - `t` - Table view
    - `c` - Cards view
    - `e` - Export CSV
    - `1` - All stocks
    - `2` - Active only
    - `Esc` - Close modal

- **Documentation**
  - DATA_FORMAT.md with all field specifications
  - README with feature overview
  - Randy command examples

### Technical
- Single-file HTML/CSS/JS for easy deployment
- GitHub Issues as backend database
- GitHub Pages hosting
- Auto-refresh every 60 seconds
- Print-friendly styles

## [1.0.0] - 2026-01-27

### Added
- Initial release
- Basic stock tracking with cards
- Call logging (completed/scheduled)
- Model completion tracking
- GitHub Issues backend
