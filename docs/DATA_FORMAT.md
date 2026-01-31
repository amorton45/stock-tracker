# Stock Tracker Data Format

This document describes how data is structured in GitHub Issues for the Stock Research Tracker.

## Issue Structure

Each stock is represented as a GitHub Issue with the `stock` label.

### Issue Title
The stock ticker symbol (e.g., `NVDA`, `AMD`, `AAPL`)

### Issue Body

```markdown
Company: [Full company name]
Analyst: [Assigned analyst name]
Conviction: [high/medium/low]
Price Target: [$XXX]

- [x] Model Completed   (or - [ ] Model Completed if not done)

## Thesis
[Investment thesis paragraph]

## Bull Case
- [Bull point 1]
- [Bull point 2]
- [Bull point 3]

## Bear Case
- [Bear point 1]
- [Bear point 2]
- [Bear point 3]

## Key Questions
- [Question 1 to answer through research]
- [Question 2]

## Notes
[Freeform research notes]
```

### Labels

Apply these labels to categorize stocks:

**Required:**
- `stock` - Identifies this issue as a stock

**Sector (pick one):**
- `sector:semis` - Semiconductors
- `sector:software` - Software
- `sector:internet` - Internet

**Priority (pick one):**
- `priority:high` - High priority research
- `priority:medium` - Medium priority
- `priority:low` - Low priority / monitoring

**Status (pick one):**
- `status:active` - Active research
- `status:monitoring` - Passive monitoring
- `status:archived` - No longer tracking

### Comments (Call Log)

Each comment on the issue can contain call entries:

```
COMPLETED: [Contact Name] | [Date] | [Optional: Notes/takeaways]
SCHEDULED: [Contact Name] | [Date] | [Optional: Call purpose]
```

**Examples:**
```
COMPLETED: CFO | Jan 27, 2026 | Bullish on datacenter demand, expects 30% growth
SCHEDULED: VP of Sales | Feb 5, 2026 | Discuss competitive dynamics
COMPLETED: Industry Expert (Former Intel) | Jan 25, 2026
```

## Randy Commands

Tell Randy to manage stocks with natural language:

**Adding Stocks:**
- "Add AAPL - Apple Inc to the tracker"
- "Add MSFT as high priority in software sector"

**Updating Stocks:**
- "Set AMD as high conviction"
- "Update NVDA price target to $180"
- "Mark COMPEQ model as complete"
- "Add Drew as analyst on AMD"

**Managing Calls:**
- "Log a completed call for NVDA: CFO, Jan 27"
- "Schedule a call for AMD: Customer check, Feb 10"
- "Add notes to the last AMD call: Very bullish on MI300"

**Thesis & Research:**
- "Add thesis for AAPL: Services growth driving margin expansion"
- "Add bull point for AMD: Taking share from Intel"
- "Add bear point for NVDA: Customer concentration risk"
- "Add key question for COMPEQ: What is utilization rate?"

**Organization:**
- "Move INTC to monitoring status"
- "Archive XYZ stock"
- "Set all semis to high priority"

## API Integration

The tracker reads from the public GitHub API:

```
GET /repos/{owner}/{repo}/issues?labels=stock&state=open
GET /repos/{owner}/{repo}/issues/{issue_number}/comments
```

Stock prices are fetched from Yahoo Finance (unofficial API).
