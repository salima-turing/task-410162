// Sample data structure
const data = [
    {
        "date": "2023-01-01",
        "backlog": 20,
        "review_time": 3,
        "optimization_impact": 80,
        "team": "teamA"
    },
    // Add more data points for each date/metric
    // For larger datasets, you can use Array.from() or a loop to generate more data.
];

function createGraphs() {
    const traces = [];

    traces.push({
        x: data.map(d => new Date(d.date)),
        y: data.map(d => d.backlog),
        mode: 'lines+markers',
        name: 'Backlog Size'
    });

    traces.push({
        x: data.map(d => new Date(d.date)),
        y: data.map(d => d.review_time),
        mode: 'lines+markers',
        name: 'Review Time'
    });

    traces.push({
        x: data.map(d => new Date(d.date)),
        y: data.map(d => d.optimization_impact),
        mode: 'lines+markers',
        name: 'Optimization Impact'
    });

    const layout = {
        title: 'Code Review Dashboard',
        barmode: 'group',
        legend: { x: 0.8, y: 1 },
        height: 400,
        width: '100%',
        hovermode: 'closest'
    };

    Plotly.newPlot('graph-container', traces, layout, { responsive: true });
}

function applyFilter() {
    const startDate = new Date(document.getElementById('start-date').value);
    const endDate = new Date(document.getElementById('end-date').value);
    const selectedTeam = document.getElementById('team-filter').value;

    const filteredData = data.filter(d => {
        const date = new Date(d.date);
        return (
            date >= startDate && date <= endDate &&
            (selectedTeam === 'all' || d.team === selectedTeam)
        );
    });

    updateGraphs(filteredData);
}
