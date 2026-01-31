# Research Hub Features

## Current Features (v2.0)

### 📊 Dashboard
- Summary cards with portfolio metrics
  - Active positions count
  - Average upside to targets
  - Total calls completed
  - High conviction count
- Portfolio overview table
- Randy AI assistant banner

### 📋 Portfolio Table
- Stock ticker and company name
- Live stock prices (Yahoo Finance)
- Daily price change with color coding
- Price target and % upside
- Conviction level (3-dot rating)
- Research status badge
- Progress bar

### 🔍 Stock Detail Modal
- Click any row to open
- Key metrics grid (price, target, upside, conviction)
- Research status (calls, model, progress)
- Investment thesis
- Bull case points
- Bear case points
- Key questions
- Call log (scheduled + completed)

### 📅 Calendar
- Monthly calendar view
- Earnings dates auto-fetched from Yahoo Finance
- Visual indicators for upcoming events
- Upcoming events sidebar

### 🔧 Sidebar
- Filter by view (All, Active, High Conviction)
- Filter by sector (Semis, Software, Internet)
- Quick actions (Export, Refresh)

### ⌨️ Keyboard Shortcuts
- `/` - Focus search
- `r` - Refresh data
- `Escape` - Close modal

### 📥 Export
- CSV export with all stock data

## Planned Features

### Phase 1 - Polish
- [ ] Hover animations and micro-interactions
- [ ] Loading skeletons instead of spinners
- [ ] Tooltips on all icons
- [ ] Keyboard shortcut help modal (?)
- [ ] Better mobile hamburger menu
- [ ] Dark/light theme toggle

### Phase 2 - Collaboration
- [ ] Team member avatars on stocks
- [ ] Activity feed showing all changes
- [ ] @mentions in notes
- [ ] Slack integration for notifications

### Phase 3 - Research Workflow
- [ ] Kanban board view
- [ ] Due date tracking
- [ ] Checklist templates
- [ ] Document attachments
- [ ] Research templates

### Phase 4 - Analytics
- [ ] Portfolio performance charts
- [ ] Call activity graphs
- [ ] Research velocity metrics
- [ ] Earnings calendar integration

## Technical Notes

### Data Flow
1. GitHub Issues = Database
2. Labels = Categories/Filters
3. Issue body = Structured data (parsed markdown)
4. Comments = Call log entries
5. Yahoo Finance API = Live prices + earnings dates

### Randy Commands
The AI assistant can:
- Add/remove stocks
- Update any field (thesis, targets, conviction)
- Log calls (completed/scheduled)
- Add bull/bear points
- Change status/priority
- Export data
