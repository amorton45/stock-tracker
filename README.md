# Stock Research Tracker

A project management tool for hedge fund research teams to track stocks, manage due diligence calls, and organize investment research.

**Live:** [https://amorton45.github.io/stock-tracker/](https://amorton45.github.io/stock-tracker/)

## Features

### Dashboard
- 📊 Summary statistics (active stocks, calls, models, high conviction)
- 🔍 Search across all stocks
- 📋 Cards and table views
- 🔄 Auto-refresh every 60 seconds

### Stock Management
- Track multiple stocks with company info
- Assign analysts to stocks
- Set priority levels (High/Medium/Low)
- Categorize by sector (Semis/Software/Internet)
- Add investment thesis, bull/bear cases
- Set conviction levels and price targets
- Track model completion status

### Call Tracking
- Log completed calls with contacts and dates
- Schedule future calls
- Add notes to calls
- See recent activity feed

### Live Market Data
- Real-time stock prices (via Yahoo Finance)
- Price change indicators

## How It Works

This tracker uses **GitHub Issues as a database**:
- Each stock is a GitHub Issue with the `stock` label
- Issue body contains structured metadata
- Comments contain call logs
- Labels manage sectors, priorities, and status

**Randy (AI assistant) manages all data.** Just tell Randy:
- "Add AAPL - Apple Inc to the tracker"
- "Set AMD as high priority in semiconductors"
- "Log a completed call for NVDA: CFO channel check, Jan 27"
- "Add thesis for AMD: AI demand driving datacenter growth"
- "Mark COMPEQ model as complete"

## Data Format

### Issue Body Structure

```markdown
Company: Apple Inc
Analyst: Drew
Conviction: high
Price Target: $250

- [x] Model Completed

## Thesis
Brief investment thesis goes here.

## Bull Case
- Point 1
- Point 2

## Bear Case
- Point 1
- Point 2
```

### Call Comment Format

```
COMPLETED: Contact Name | Date | Optional notes
SCHEDULED: Contact Name | Date | Optional notes
```

### Labels

**Sectors:**
- `sector:semis` - Semiconductors
- `sector:software` - Software
- `sector:internet` - Internet

**Priority:**
- `priority:high`
- `priority:medium`
- `priority:low`

**Status:**
- `status:active` - Active research
- `status:monitoring` - Monitoring only
- `status:archived` - Archived

## Development

The entire app is a single `index.html` file using vanilla JavaScript. Data is fetched from the GitHub API.

To run locally:
1. Clone the repo
2. Open `index.html` in a browser

## License

Private - Internal use only
