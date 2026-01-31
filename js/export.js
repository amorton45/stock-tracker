// Export functionality for Stock Research Tracker

function exportToCSV(stocks) {
    const headers = [
        'Ticker',
        'Company',
        'Sector',
        'Priority',
        'Conviction',
        'Price Target',
        'Analyst',
        'Model Complete',
        'Completed Calls',
        'Scheduled Calls',
        'Thesis',
        'Current Price',
        'Price Change %'
    ];

    const rows = stocks.map(s => [
        s.ticker,
        s.name || '',
        s.sector || '',
        s.priority,
        s.conviction,
        s.priceTarget || '',
        s.analyst || '',
        s.modelCompleted ? 'Yes' : 'No',
        s.completedCalls.length,
        s.scheduledCalls.length,
        `"${(s.thesis || '').replace(/"/g, '""')}"`,
        s.price || '',
        s.priceChange || ''
    ]);

    const csv = [
        headers.join(','),
        ...rows.map(r => r.join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `stock-research-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function exportCallsToCSV(stocks) {
    const headers = ['Ticker', 'Type', 'Contact', 'Date', 'Notes'];
    const rows = [];

    stocks.forEach(s => {
        s.completedCalls.forEach(c => {
            rows.push([s.ticker, 'Completed', c.contact, c.date, `"${(c.notes || '').replace(/"/g, '""')}"`]);
        });
        s.scheduledCalls.forEach(c => {
            rows.push([s.ticker, 'Scheduled', c.contact, c.date, `"${(c.notes || '').replace(/"/g, '""')}"`]);
        });
    });

    const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.setAttribute('href', URL.createObjectURL(blob));
    link.setAttribute('download', `call-log-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
